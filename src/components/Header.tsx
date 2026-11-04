import React, { useState } from "react";
import { ExternalLink, Settings2, Key } from "lucide-react";

interface HeaderProps {
  aiEnabled: boolean;
  onToggleAi: () => void;
  onOpenContact: () => void;
  onOpenKeysModal: () => void;
  hasAnyKey: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  aiEnabled,
  onToggleAi,
  onOpenContact,
  onOpenKeysModal,
  hasAnyKey,
}) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <header
      id="app-header"
      className="h-[62px] w-full flex items-center justify-between px-4 md:px-6 border-b sticky top-0 z-30"
      style={{ background: "#0E1510", borderColor: "#1E3325" }}
    >
      <div className="flex items-center gap-3">
        <div className="leading-none">
          <div className="text-[18px] md:text-[20px] tracking-tight">
            <span className="font-light text-[#E6EFE8]">Prompt</span>
            <span className="font-semibold text-[#8FBF5A] ml-1.5">Executor</span>
          </div>
          <div
            className="mono text-[9px] tracking-[0.18em] mt-[3px] opacity-70"
            style={{ color: "#8CA99A" }}
          >
            MICROSTOCK JOURNEY WITH SONET
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        {/* API Config button + API KEYS dropdown */}
        <div className="relative">
          <button
            id="settings-btn"
            type="button"
            onClick={() => setSettingsOpen((v) => !v)}
            className={`btn-secondary-3d mono text-[11px] tracking-widest px-3 md:px-4 h-[32px] flex items-center gap-2 rounded-[8px] text-[#E6EFE8] cursor-pointer hover:text-[#8FBF5A] transition-colors ${settingsOpen ? "relative z-50" : ""}`}
            aria-expanded={settingsOpen}
          >
            <Settings2 size={13} className="text-[#8FBF5A] shrink-0" />
            <span className="hidden sm:inline">API Config</span>
          </button>

          {settingsOpen && (
            <>
              <div
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setSettingsOpen(false)}
              />
              <div
                className="absolute right-0 top-[calc(100%+10px)] z-50 w-[300px] max-w-[calc(100vw-32px)] rounded-[14px] p-4"
                style={{
                  background: "#142017",
                  border: "1px solid #324E3A",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.65)",
                }}
              >
                <div
                  className="flex items-center gap-2 mono text-[11px] tracking-[0.14em] mb-2.5"
                  style={{ color: "#8FBF5A" }}
                >
                  <Key size={14} />
                  <span>API KEYS & ENGINE</span>
                </div>
                <div
                  className={`text-[11px] leading-relaxed mb-3 ${
                    hasAnyKey ? "mono text-[#8CA99A]" : "font-bangla text-[#8CA99A]"
                  }`}
                >
                  {hasAnyKey
                    ? "API key active — vision model auto-selected."
                    : "নিজের API key আবশ্যক — MANAGE API KEYS থেকে ফ্রি key যোগ করুন।"}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSettingsOpen(false);
                    onOpenKeysModal();
                  }}
                  className="w-full h-[36px] rounded-[8px] bg-[#1F3324] hover:bg-[#2B4432] border border-[#2B4432] hover:border-[#8FBF5A]/50 text-[#E6EFE8] hover:text-[#8FBF5A] mono text-[11px] font-semibold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Key size={13} className="text-[#8FBF5A]" />
                  <span>MANAGE API KEYS</span>
                </button>
              </div>
            </>
          )}
        </div>

        <button
          id="contact-btn"
          type="button"
          onClick={onOpenContact}
          className="btn-secondary-3d mono text-[11px] tracking-widest px-4 h-[32px] flex items-center gap-2 rounded-[8px] text-[#E6EFE8] cursor-pointer hover:text-[#8FBF5A] transition-colors"
        >
          CONTACT
        </button>

        <button
          id="toggle-ai-btn"
          onClick={onToggleAi}
          className="btn-secondary-3d flex items-center gap-2 px-3 h-[32px] rounded-[8px] mono text-[11px] cursor-pointer transition-all"
        >
          <span
            className="w-[8px] h-[8px] rounded-full transition-all duration-300"
            style={{
              background: aiEnabled ? "#8FBF5A" : "#6B8A7A",
              boxShadow: aiEnabled ? "0 0 8px rgba(143,191,90,0.8)" : "none",
            }}
          />
          <span style={{ color: aiEnabled ? "#8FBF5A" : "#6B8A7A" }}>
            {aiEnabled ? "AI ON" : "AI OFF"}
          </span>
        </button>
      </div>
    </header>
  );
};
