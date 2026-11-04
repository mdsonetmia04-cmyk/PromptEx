import React, { useState } from "react";
import { Upload, Zap, Tags, Layers, Sparkles } from "lucide-react";
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
    </div>
  );
};
