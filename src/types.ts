export interface Provider {
  id: string;
  name: string;
  model: string;
  endpoint: string;
  free: boolean;
  description?: string;
  keyUrl: string;
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
  epsState?: "rendering" | "ready" | "failed";
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
    keyUrl: "https://aistudio.google.com/apikey",  },
  {
    id: "groq",
    name: "Groq",
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    endpoint: "api.groq.com",
    free: true,
    description: "Groq ultra-fast inference — Llama 4 Scout Vision",
    keyUrl: "https://console.groq.com/keys",  },
  {
    id: "openrouter",
    name: "OpenRouter",
    model: "google/gemini-2.5-flash",
    endpoint: "openrouter.ai",
    free: true,
    description: "OpenRouter unified AI endpoint",
    keyUrl: "https://openrouter.ai/keys",  },
  {
    id: "together",
    name: "Together",
    model: "meta-llama/Llama-3.2-11B-Vision-Instruct-Turbo",
    endpoint: "api.together.xyz",
    free: true,
    description: "Together AI high-throughput Vision API",
    keyUrl: "https://api.together.xyz/settings/api-keys",  },
  {
    id: "mistral",
    name: "Mistral",
    model: "pixtral-12b-2409",
    endpoint: "api.mistral.ai",
    free: true,
    description: "Mistral Pixtral 12B Multimodal model",
    keyUrl: "https://console.mistral.ai/api-keys",  },
  {
    id: "huggingface",
    name: "HuggingFace",
    model: "meta-llama/Llama-3.2-11B-Vision",
    endpoint: "api-inference.huggingface.co",
    free: true,
    description: "HuggingFace Serverless Inference",
    keyUrl: "https://huggingface.co/settings/tokens",  },
];

export const PLATFORMS: StockPlatform[] = [
  "AdobeStock",
  "Shutterstock",
  "Freepik",
  "Pond5",
  "Vecteezy",
];
