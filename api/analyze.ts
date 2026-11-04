import { analyze } from "./analyze-core.js";

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed." });
    const _b = req.body || {};
    if (_b.provider !== "pollinations" && !_b.apiKey?.trim()) return res.status(400).json({ error: "নিজের API key দিন — MANAGE API KEYS থেকে যোগ করুন।" });
    return res.status(200).json(await analyze(req.body || {}));
  } catch (error: any) {
    const message = String(error?.message || "Failed to analyze image");
    const status = Number(error?.status) || (message.includes("429") || message.includes("RESOURCE_EXHAUSTED") || message.toLowerCase().includes("quota") ? 429 : 500);
    console.error("Analysis API error:", message.slice(0, 300));
    return res.status(status).json({ error: status === 429 ? "AI request quota is currently saturated. Please wait or use another configured API key." : message });
  }
}
