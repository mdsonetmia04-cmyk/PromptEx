import React, { useState } from "react";
import { Rocket, ChevronDown } from "lucide-react";
import { ExecutionMode } from "../types";

interface LandingIntroProps {
  mode: ExecutionMode;
  onStart: () => void;
}

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <div id="landing-intro" className="max-w-[880px] mx-auto mt-8 md:mt-14 px-2" style={{ background: "radial-gradient(ellipse 75% 480px at 50% -40px, rgba(143,191,90,0.09) 0%, rgba(143,191,90,0) 70%)" }}>
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
        <div className="flex flex-col gap-3 mt-6">
          {HOW_STEPS.map((st, i) => {
            const isOpen = openStep === i;
            return (
              <div
                key={i}
                className="rounded-[14px] overflow-hidden transition-colors"
                style={{
                  background: "#0E1510",
                  border: isOpen ? "1px solid rgba(143,191,90,0.45)" : "1px solid #233929",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenStep(isOpen ? null : i)}
                  className="w-full flex items-center gap-3.5 p-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
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
                  <span
                    className="font-bangla text-[14.5px] font-bold flex-1 transition-colors"
                    style={{ color: isOpen ? "#B4E677" : "#E6EFE8" }}
                  >
                    {st.title}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    color={isOpen ? "#B4E677" : "#6B8A7A"}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-4 pb-4 pl-[68px] font-bangla text-[12.5px] leading-[1.9]"
                      style={{ color: "#8CA99A" }}
                    >
                      {st.desc}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* START button */}
      <div className="mt-8 flex flex-col items-center gap-3">
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

      {/* FAQ — সহজ বাংলায় */}
      <div
        className="mt-8 mb-16 rounded-[20px] p-6 md:p-8"
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
          উত্তর দেখতে প্রশ্নে ক্লিক করুন
        </div>
        <div className="mt-6 flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-[14px] overflow-hidden transition-colors"
                style={{
                  background: "#0E1510",
                  border: isOpen ? "1px solid rgba(143,191,90,0.45)" : "1px solid #233929",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-3 p-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-bangla text-[14px] font-bold transition-colors"
                    style={{ color: isOpen ? "#B4E677" : "#E6EFE8" }}
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    color={isOpen ? "#B4E677" : "#6B8A7A"}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-4 pb-4 font-bangla text-[12.5px] leading-[1.9]"
                      style={{ color: "#8CA99A" }}
                    >
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
