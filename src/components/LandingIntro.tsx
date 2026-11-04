import React from "react";
import { Sparkles, Zap, Tags, Layers, Rocket } from "lucide-react";
import { ExecutionMode } from "../types";

interface LandingIntroProps {
  mode: ExecutionMode;
  onStart: () => void;
}

const PLATFORMS = ["AdobeStock", "Shutterstock", "Freepik", "Pond5", "Vecteezy"];

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
    desc: "aistudio.google.com থেকে ফ্রি Gemini API key সংগ্রহ করুন — মাত্র ১ মিনিট লাগে।",
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
    a: "না। এখন প্রত্যেকের নিজের API key দেওয়া বাধ্যতামূলক।",
  },
  {
    q: "কোন ধরনের ছবি আপলোড করা যায়?",
    a: "JPG, PNG, WEBP ও SVG — একসাথে অনেকগুলো ছবিও দেওয়া যায়।",
  },
];

export const LandingIntro: React.FC<LandingIntroProps> = ({ mode, onStart }) => {
  const isMetadata = mode === "metadata";

  return (
    <div id="landing-intro" className="max-w-[880px] mx-auto mt-8 md:mt-14 px-2" style={{ background: "radial-gradient(ellipse 75% 480px at 50% -40px, rgba(143,191,90,0.09) 0%, rgba(143,191,90,0) 70%)" }}>
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

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
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
        className="mt-8 rounded-[20px] p-6 md:p-8"
        style={{
          background: "#141F17",
          border: "1px solid #233929",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
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
        className="mt-8 mb-8 rounded-[20px] p-6 md:p-8"
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

      {/* START button */}
      <div className="mt-8 mb-16 flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={onStart}
          className="btn-primary-3d font-bangla px-14 h-[58px] rounded-[16px] flex items-center gap-3 text-[#0E1510] cursor-pointer text-[20px] font-bold"
          style={{ boxShadow: "0 0 44px rgba(143,191,90,0.45), 0 8px 24px rgba(0,0,0,0.4)" }}
        >
          <Rocket size={22} />
          <span>শুরু করুন</span>
        </button>
        <div className="font-bangla text-[12.5px]" style={{ color: "#5A7565" }}>
          ক্লিক করলেই মূল ওয়েবসাইট খুলবে
        </div>
      </div>
    </div>
  );
};
