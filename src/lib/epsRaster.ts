// Client-side EPS -> PNG rasterizer powered by Ghostscript WASM.
// Loaded lazily from CDN on the first EPS upload (~16MB one-time download).
// Proven: converts EPS to valid PNG via -dSAFER -dBATCH -dNOPAUSE -dEPSCrop -sDEVICE=png16m.

const GS_CDN = "https://cdn.jsdelivr.net/npm/@jspawn/ghostscript-wasm@0.0.2";

let modPromise: Promise<any> | null = null;
// Serialize conversions: all calls share the module's single virtual FS.
let queue: Promise<void> = Promise.resolve();

async function loadGhostscript(): Promise<any> {
  if (!modPromise) {
    modPromise = (async () => {
      // Fetch the WASM binary ourselves: 100% deterministic, bypasses
      // Emscripten's scriptDir detection which fails under dynamic import().
      const wasmBytes = await (await fetch(`${GS_CDN}/gs.wasm`)).arrayBuffer();
      const ns: any = await import(/* @vite-ignore */ `${GS_CDN}/gs.mjs`);
      const Module = ns.default;
      const mod = await Module({
        instantiateWasm: (imports: any, success: (instance: WebAssembly.Instance) => void) => {
          WebAssembly.instantiate(wasmBytes, imports).then((r) => success(r.instance));
          return {};
        },
      });
      return mod;
    })().catch((err) => {
      modPromise = null; // allow retry on next EPS
      throw err;
    });
  }
  return modPromise;
}

export function uint8ToBase64(bytes: Uint8Array): string {
  let s = "";
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) {
    s += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + CHUNK)) as number[]);
  }
  return btoa(s);
}

async function rasterizeEpsOnce(file: File, dpi = 150): Promise<Uint8Array> {
  const mod = await loadGhostscript();
  const data = new Uint8Array(await file.arrayBuffer());
  const inPath = "/in.eps";
  const outPath = "/out.png";
  const rm = (p: string) => {
    try {
      mod.FS.unlink(p);
    } catch {
      /* ignore */
    }
  };
  rm(inPath);
  rm(outPath);
  mod.FS.writeFile(inPath, data);
  try {
    const code: number = await mod.callMain([
      "-dSAFER",
      "-dBATCH",
      "-dNOPAUSE",
      "-dEPSCrop",
      "-sDEVICE=png16m",
      `-r${dpi}`,
      `-sOutputFile=${outPath}`,
      inPath,
    ]);
    if (code !== 0) throw new Error(`Ghostscript exited with code ${code}`);
    const out = mod.FS.readFile(outPath) as Uint8Array;
    if (!out || out.length === 0) throw new Error("Ghostscript produced no output");
    return out;
  } finally {
    rm(inPath);
    rm(outPath);
  }
}

// Queued wrapper: concurrent EPS uploads render one at a time.
export function rasterizeEps(file: File, dpi = 150): Promise<Uint8Array> {
  const run = queue.then(() => rasterizeEpsOnce(file, dpi));
  queue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}
