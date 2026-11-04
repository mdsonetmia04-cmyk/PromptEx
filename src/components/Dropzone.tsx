import React, { useState } from "react";
import { Upload, Zap, Tags, Layers, Sparkles, KeyRound } from "lucide-react";
import { ExecutionMode } from "../types";

interface DropzoneProps {
  mode: ExecutionMode;
  onFilesSelected: (files: FileList | File[]) => void;
  onBrowseClick: () => void;
}

const PLATFORMS = ["AdobeStock", "Shutterstock", "Freepik", "Pond5", "Vecteezy"];
const FORMATS = ["JPG", "PNG", "WEBP", "SVG"];

const FEATURES = [
  {
    icon: Zap,
    title: "Batch Processing",
    desc: "Upload dozens of images and process them all at once",
  },
  {
    icon: Tags,
    title: "SEO Titles & Keywords",
    desc: "Optimized titles and 15–49 high-value keywords per image",
  },
  {
    icon: Layers,
    title: "5 Stock Platforms",
    desc: "Metadata tuned for every major microstock marketplace",
  },
];

const HOW_STEPS = [
  {
    title: "ফ্রি API Key নিন",
    desc: "aistudio.google.com থেকে ফ্রি Gemini API key নিন — অথবা key ছাড়াই Pollinations ব্যবহার করুন।",
  },
  {
    title: "Key যোগ করুন",
    desc: "MANAGE API KEYS বাটনে ক্লিক করে আপনার key পেস্ট করে TEST & SAVE করুন।",
  },
  {
    title: "ছবি আপলোড করুন",
    desc: "ছবি ড্র্যাগ করে দিন বা Browse করুন — একসাথে অনেকগুলো ছবিও চলবে।",
  },
  {
    title: "রেজাল্ট ডাউনলোড করুন",
    desc: "AI টাইটেল, কীওয়ার্ড ও প্রম্পট বানিয়ে দেবে — CSV নিয়ে স্টক সাইটে আপলোড করুন।",
  },
];

const FAQS = [
  {
    q: "API Key কোথায় পাবো?",
    a: "aistudio.google.com-এ গিয়ে Get API Key বাটনে চাপ দিন — সম্পূর্ণ ফ্রি, কোনো টাকা লাগে না।",
  },
  {
    q: "আমার Key কি নিরাপদ?",
    a: "হ্যাঁ। Key শুধু আপনার ব্রাউজারে save থাকে। আমাদের সার্ভার বা ডাটাবেজে এটি জমা হয় না।",
  },
  {
    q: "ব্যবহার করতে কি টাকা লাগবে?",
    a: "না, টুলটি সম্পূর্ণ ফ্রি। শুধু নিজের Gemini API key লাগে — ফ্রি লিমিটে প্রতিদিন অনেক ছবি প্রসেস করা যায়।",
  },
  {
    q: "Key ছাড়া কি ব্যবহার করা যাবে?",
    a: "হ্যাঁ! Pollinations সিলেক্ট করলে কোনো key ছাড়াই ফ্রি ব্যবহার করা যায়। তবে নিজের Gemini key-তে সবচেয়ে ভালো ও দ্রুত রেজাল্ট পাবেন।",
  },
  {
    q: "কোন ধরনের ছবি আপলোড করা যায়?",
    a: "JPG, PNG, WEBP ও SVG — একসাথে অনেকগুলো ছবিও দেওয়া যায়।",
  },
];

export const Dropzone: React.FC<DropzoneProps> = ({
  mode,
  onFilesSelected,
  onBrowseClick,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesSelected(e.dataTransfer.files);
    }
  };

  const isMetadata = mode === "metadata";

  return (
    <div id="hero" className="max-w-[880px] mx-auto mt-8 md:mt-14 px-2">
      {/* Eyebrow badge */}
      <div className="flex justify-center mb-5">
        <div
          className="mono text-[10px] tracking-[0.22em] px-4 py-1.5 rounded-full flex items-center gap-2"
          style={{
            color: "#B4E677",
            background: "rgba(143,191,90,0.08)",
            border: "1px solid rgba(143,191,90,0.35)",
            boxShadow: "0 0 18px rgba(143,191,90,0.12)",
          }}
        >
          <Sparkles size={12} color="#B4E677" />
          AI-POWERED MICROSTOCK STUDIO
        </div>
      </div>

      {/* Headline */}
      <h1
        className="text-center font-semibold tracking-tight leading-[1.12] text-[32px] md:text-[48px]"
        style={{ color: "#F2F7F0" }}
      >
        {isMetadata ? (
          <>
            Turn Images into{" "}
            <span
              style={{
                background: "linear-gradient(92deg, #B4E677 0%, #8FBF5A 55%, #6FA03E 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Sell-Ready Metadata
            </span>
          </>
        ) : (
          <>
            Describe Any Image,{" "}
            <span
              style={{
                background: "linear-gradient(92deg, #B4E677 0%, #8FBF5A 55%, #6FA03E 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Get the Perfect Prompt
            </span>
          </>
        )}
      </h1>

      {/* Sub-headline */}
      <p
        className="text-center mono text-[12.5px] md:text-[13.5px] leading-relaxed mt-4 max-w-[620px] mx-auto"
        style={{ color: "#8CA99A" }}
      >
        {isMetadata
          ? "Upload your photos — real vision AI writes optimized titles, keywords and prompts for Adobe Stock, Shutterstock, Freepik and more. Batch upload supported."
          : "Drop in any image — real vision AI reverse-engineers it into a detailed, reusable generation prompt in seconds."}
      </p>

      {/* Dropzone card */}
      <div
        className="rounded-[20px] p-4 md:p-5 mt-8 transition-all duration-300"
        style={{
          background: "linear-gradient(180deg, #16241A 0%, #101A13 100%)",
          border: "1px solid #2B4432",
          boxShadow: isDragOver
            ? "0 0 0 2px rgba(143,191,90,0.6), 0 0 44px rgba(143,191,90,0.28)"
            : "0 0 32px rgba(143,191,90,0.07), 0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={onBrowseClick}
          className="rounded-[14px] border-dashed border-[1.5px] flex flex-col items-center justify-center py-12 md:py-16 px-6 text-center transition-all duration-300 cursor-pointer"
          style={{
            borderColor: isDragOver ? "#8FBF5A" : "#324E3A",
            background: isDragOver ? "rgba(143,191,90,0.10)" : "rgba(14,21,16,0.55)",
            transform: isDragOver ? "scale(1.01)" : "scale(1)",
          }}
        >
          {/* Glowing upload icon */}
          <div
            className="w-[64px] h-[64px] rounded-[18px] flex items-center justify-center mb-5 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #243B29 0%, #1A2A1E 100%)",
              border: "1px solid rgba(143,191,90,0.45)",
              boxShadow: "0 0 26px rgba(143,191,90,0.30)",
              transform: isDragOver ? "scale(1.12)" : "scale(1)",
            }}
          >
            <Upload size={26} color="#B4E677" />
          </div>

          <div className="text-[16px] md:text-[17px] font-semibold tracking-wide text-[#F2F7F0]">
            {isDragOver ? "Drop them now!" : "Drop images here"}
          </div>
          <div className="mono text-[11.5px] mt-2" style={{ color: "#8CA99A" }}>
            or click to browse — paste works too{" "}
            <span
              className="px-1.5 py-0.5 rounded-[5px] text-[10px]"
              style={{ background: "#1F3324", border: "1px solid #2B4432", color: "#B4E677" }}
            >
              Ctrl+V
            </span>
          </div>

          {/* Format pills */}
          <div className="flex items-center gap-2 mt-4 flex-wrap justify-center">
            {FORMATS.map((f) => (
              <span
                key={f}
                className="mono text-[10px] tracking-widest px-2.5 py-1 rounded-full"
                style={{
                  color: "#8CA99A",
                  background: "#1A2A1E",
                  border: "1px solid #2B4432",
                }}
              >
                {f}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            type="button"
            className="btn-primary-3d mt-7 mono text-[12px] tracking-[0.18em] font-semibold px-8 h-[42px] rounded-[12px] flex items-center gap-2.5 text-[#0E1510] cursor-pointer"
            style={{ boxShadow: "0 0 24px rgba(143,191,90,0.35)" }}
          >
            <Upload size={15} />
            <span>UPLOAD IMAGES</span>
          </button>

          <div
            className="font-bangla text-[12.5px] mt-5 flex items-center justify-center gap-1.5"
            style={{ color: "#B4E677" }}
          >
            <KeyRound size={14} />
            <span>নিজের ফ্রি API key দিয়ে শুরু করুন — অথবা Pollinations ফ্রি ব্যবহার করুন</span>
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-[14px] p-4 flex items-start gap-3 transition-all hover:-translate-y-0.5"
            style={{
              background: "#141F17",
              border: "1px solid #233929",
            }}
          >
            <div
              className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center shrink-0"
              style={{
                background: "rgba(143,191,90,0.10)",
                border: "1px solid rgba(143,191,90,0.30)",
              }}
            >
              <f.icon size={16} color="#8FBF5A" />
            </div>
            <div>
              <div className="mono text-[11.5px] font-semibold tracking-wide text-[#E6EFE8]">
                {f.title}
              </div>
              <div className="mono text-[10.5px] leading-relaxed mt-1" style={{ color: "#6B8A7A" }}>
                {f.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Platform strip */}
      <div className="mt-8 mb-4 flex flex-col items-center gap-3">
        <div className="mono text-[9.5px] tracking-[0.28em]" style={{ color: "#5A7565" }}>
          OPTIMIZED FOR
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {PLATFORMS.map((p) => (
            <span
              key={p}
              className="mono text-[10.5px] tracking-wider px-3.5 py-1.5 rounded-full"
              style={{
                color: "#B4E677",
                background: "rgba(143,191,90,0.07)",
                border: "1px solid rgba(143,191,90,0.22)",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
      {/* How it works — সহজ বাংলায় */}
      <div
        className="mt-10 rounded-[20px] p-6 md:p-8"
        style={{
          background: "linear-gradient(180deg, #16241A 0%, #101A13 100%)",
          border: "1px solid #2B4432",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <div
          className="font-bangla text-center text-[22px] md:text-[26px] font-bold"
          style={{ color: "#F2F7F0" }}
        >
          কীভাবে ব্যবহার করবেন
        </div>
        <div
          className="font-bangla text-center text-[13px] mt-1.5"
          style={{ color: "#8CA99A" }}
        >
          মাত্র ৪টি সহজ ধাপে শুরু করুন
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          {HOW_STEPS.map((st, i) => (
            <div
              key={i}
              className="rounded-[14px] p-4 flex items-start gap-3.5"
              style={{ background: "#0E1510", border: "1px solid #233929" }}
            >
              <div
                className="font-bangla w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 text-[16px] font-bold"
                style={{
                  background: "rgba(143,191,90,0.12)",
                  border: "1px solid rgba(143,191,90,0.4)",
                  color: "#B4E677",
                }}
              >
                {["১", "২", "৩", "৪"][i]}
              </div>
              <div>
                <div
                  className="font-bangla text-[14.5px] font-bold"
                  style={{ color: "#E6EFE8" }}
                >
                  {st.title}
                </div>
                <div
                  className="font-bangla text-[12.5px] leading-relaxed mt-1"
                  style={{ color: "#8CA99A" }}
                >
                  {st.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ — সহজ বাংলায় */}
      <div
        className="mt-6 mb-10 rounded-[20px] p-6 md:p-8"
        style={{ background: "#141F17", border: "1px solid #233929" }}
      >
        <div
          className="font-bangla text-center text-[22px] md:text-[26px] font-bold"
          style={{ color: "#F2F7F0" }}
        >
          সাধারণ প্রশ্ন
        </div>
        <div
          className="font-bangla text-center text-[13px] mt-1.5"
          style={{ color: "#8CA99A" }}
        >
          যা যা জানতে চান
        </div>
        <div className="mt-6 flex flex-col gap-3">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="rounded-[14px] p-4"
              style={{ background: "#0E1510", border: "1px solid #233929" }}
            >
              <div
                className="font-bangla text-[14px] font-bold"
                style={{ color: "#B4E677" }}
              >
                {f.q}
              </div>
              <div
                className="font-bangla text-[12.5px] leading-relaxed mt-1.5"
                style={{ color: "#8CA99A" }}
              >
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
