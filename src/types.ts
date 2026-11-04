export interface Provider {
  id: string;
  name: string;
  model: string;
  endpoint: string;
  free: boolean;
  description?: string;
}

export type ExecutionMode = "metadata" | "prompt";

export type StockPlatform = "AdobeStock" | "Shutterstock" | "Freepik" | "Pond5" | "Vecteezy";

export interface AnalysisResult {
  title: string;
  baseTitle?: string;
  keywords: string[];
  description: string;
  prompt: string;
  raw?: string;
}

export interface ImageItem {
  id: string;
  file: File;
  preview: string;
  base64: string;
  mime: string;
  status: "idle" | "processing" | "done" | "error";
  error?: string;
  result?: AnalysisResult;
}

export interface ProviderKeys {
  [key: string]: string;
}

export const PROVIDERS: Provider[] = [
  {
    id: "gemini",
    name: "Gemini",
    model: "gemini-2.5-flash-lite",
    endpoint: "generativelanguage.googleapis.com",
    free: true,
    description: "Google Gemini Vision — Fast, accurate microstock analysis",
  },
  {
    id: "groq",
    name: "Groq",
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    endpoint: "api.groq.com",
    free: true,
    description: "Groq ultra-fast inference — Llama 4 Scout Vision",
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    model: "google/gemini-2.5-flash",
    endpoint: "openrouter.ai",
    free: true,
    description: "OpenRouter unified AI endpoint",
  },
  {
    id: "together",
    name: "Together",
    model: "meta-llama/Llama-3.2-11B-Vision-Instruct-Turbo",
    endpoint: "api.together.xyz",
    free: true,
    description: "Together AI high-throughput Vision API",
  },
  {
    id: "mistral",
    name: "Mistral",
    model: "pixtral-12b-2409",
    endpoint: "api.mistral.ai",
    free: true,
    description: "Mistral Pixtral 12B Multimodal model",
  },
  {
    id: "huggingface",
    name: "HuggingFace",
    model: "meta-llama/Llama-3.2-11B-Vision",
    endpoint: "api-inference.huggingface.co",
    free: true,
    description: "HuggingFace Serverless Inference",
  },
  {
    id: "pollinations",
    name: "Pollinations",
    model: "openai",
    endpoint: "text.pollinations.ai",
    free: true,
    description: "Pollinations.ai — 100% free vision, no API key needed",
  },
];

export function detectProviderFromKey(rawKey: string): string | null {
  const key = rawKey.trim();
  if (!key) return null;
  if (key.startsWith("AIzaSy")) return "gemini";
  if (key.startsWith("gsk_")) return "groq";
  if (key.startsWith("sk-or-") || key.startsWith("sk-or-v1-")) return "openrouter";
  if (key.startsWith("hf_")) return "huggingface";
  if (/^[a-f0-9]{64}$/i.test(key)) return "together";
  return null;
}

export const PLATFORMS: StockPlatform[] = [
  "AdobeStock",
  "Shutterstock",
  "Freepik",
  "Pond5",
  "Vecteezy",
];
