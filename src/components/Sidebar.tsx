import React, { useState } from "react";
import { Layers, Settings2, Target, ChevronDown, SlidersHorizontal } from "lucide-react";
import { ExecutionMode, StockPlatform, PLATFORMS, ProviderKeys } from "../types";

interface SidebarProps {
  mode: ExecutionMode;
  onSelectMode: (mode: ExecutionMode) => void;
  selectedPlatforms: StockPlatform[];
  onTogglePlatform: (platform: StockPlatform) => void;
  minTitleWords: number;
  maxTitleWords: number;
  onChangeTitleWords: (min: number, max: number) => void;
  minKeywords: number;
  maxKeywords: number;
  onChangeKeywords: (min: number, max: number) => void;
  customPrompt: string;
  onChangeCustomPrompt: (val: string) => void;
  titlePrefix: string;
  onChangeTitlePrefix: (val: string) => void;
  titleSuffix: string;
  onChangeTitleSuffix: (val: string) => void;
  singleWordOnly: boolean;
  onToggleSingleWord: () => void;
  apiKeys: ProviderKeys;
  hasServerGeminiKey: boolean;
  activeProviderId: string;
  onOpenKeysModal: () => void;
  titleCase: string;
  onChangeTitleCase: (val: string) => void;
  maxTitleLength: number;
  onChangeMaxTitleLength: (val: number) => void;
  bannedWords: string;
  onChangeBannedWords: (val: string) => void;
  temperature: number;
  onChangeTemperature: (val: number) => void;
  promptDetail: string;
  onChangePromptDetail: (val: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  mode,
  onSelectMode,
  selectedPlatforms,
  onTogglePlatform,
  minTitleWords,
  maxTitleWords,
  onChangeTitleWords,
  minKeywords,
  maxKeywords,
  onChangeKeywords,
  customPrompt,
  onChangeCustomPrompt,
  titlePrefix,
  onChangeTitlePrefix,
  titleSuffix,
  onChangeTitleSuffix,
  singleWordOnly,
  onToggleSingleWord,
  apiKeys,
  hasServerGeminiKey,
  activeProviderId,
  onOpenKeysModal,
  titleCase,
  onChangeTitleCase,
  maxTitleLength,
  onChangeMaxTitleLength,
  bannedWords,
  onChangeBannedWords,
  temperature,
  onChangeTemperature,
  promptDetail,
  onChangePromptDetail,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  return (
    <aside
      id="app-sidebar"
      className="w-full lg:w-[360px] shrink-0 p-4 md:p-5 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r"
      style={{ borderColor: "#1E3325", background: "#0E1510" }}
    >
      {/* Mode Switcher */}
      <div
        id="sidebar-mode-card"
        className="rounded-[14px] p-4"
        style={{ background: "#1A2A1E", border: "1px solid #2B4432" }}
      >
        <div
          className="mono text-[11px] tracking-[0.14em] mb-3 flex items-center gap-2"
          style={{ color: "#8FBF5A" }}
        >
          <Layers size={14} />
          <span>MODE</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            id="mode-metadata-btn"
            onClick={() => onSelectMode("metadata")}
            className={`h-[44px] rounded-[10px] mono text-[11px] tracking-widest font-medium transition-all cursor-pointer ${
              mode === "metadata"
                ? "btn-primary-3d text-[#0E1510] font-semibold"
                : "btn-secondary-3d text-[#8CA99A]"
            }`}
          >
            METADATA
          </button>
          <button
            id="mode-prompt-btn"
            onClick={() => onSelectMode("prompt")}
            className={`h-[44px] rounded-[10px] mono text-[11px] tracking-widest font-medium transition-all cursor-pointer ${
              mode === "prompt"
                ? "btn-primary-3d text-[#0E1510] font-semibold"
                : "btn-secondary-3d text-[#8CA99A]"
            }`}
          >
            IMAGE TO PROMPT
          </button>
        </div>
      </div>

      {/* Microstock Platforms */}
      <div
        id="sidebar-platforms-card"
        className="rounded-[14px] p-4"
        style={{ background: "#1A2A1E", border: "1px solid #2B4432" }}
      >
        <div className="mono text-[11px] tracking-[0.14em] mb-3" style={{ color: "#8FBF5A" }}>
          PLATFORMS
        </div>
        <div className="flex flex-wrap gap-2">
          {PLATFORMS.map((platform) => {
            const isSelected = selectedPlatforms.includes(platform);
            return (
              <button
                key={platform}
                id={`platform-${platform.toLowerCase()}`}
                onClick={() => onTogglePlatform(platform)}
                className={`mono text-[10px] tracking-widest px-3 h-[28px] rounded-full border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#8FBF5A] text-[#0E1510] border-[#8FBF5A] font-semibold shadow-[0_0_12px_rgba(143,191,90,0.3)]"
                    : "bg-[#1F3324] text-[#8CA99A] border-[#2B4432] hover:border-[#324E3A]"
                }`}
              >
                {platform}
              </button>
            );
          })}
        </div>
      </div>

      {/* Settings Card */}
      <div
        id="sidebar-settings-card"
        className="rounded-[14px] p-4"
        style={{ background: "#1A2A1E", border: "1px solid #2B4432" }}
      >
        <div
          className="mono text-[11px] tracking-[0.14em] mb-4 flex items-center gap-2"
          style={{ color: "#8FBF5A" }}
        >
          <Settings2 size={14} />
          <span>SETTINGS</span>
        </div>

        <div className="space-y-4">
          <div>
            <div
              className="mono text-[10px] mb-2 flex justify-between"
              style={{ color: "#6B8A7A" }}
            >
              <span>TITLE LENGTH (WORDS)</span>
              <span className="text-[#8CA99A]">
                {minTitleWords}–{maxTitleWords}
              </span>
            </div>
            <div className="flex gap-2">
              <input
                id="min-title-words-input"
                type="number"
                min={1}
                max={50}
                value={minTitleWords}
                onChange={(e) =>
                  onChangeTitleWords(Math.max(1, Number(e.target.value) || 1), maxTitleWords)
                }
                className="w-full h-[32px] rounded-[8px] bg-[#0E1510] border border-[#2B4432] px-3 mono text-[12px] text-[#E6EFE8] outline-none focus:border-[#8FBF5A]/50"
              />
              <input
                id="max-title-words-input"
                type="number"
                min={minTitleWords}
                max={50}
                value={maxTitleWords}
                onChange={(e) =>
                  onChangeTitleWords(minTitleWords, Math.max(minTitleWords, Number(e.target.value) || minTitleWords))
                }
                className="w-full h-[32px] rounded-[8px] bg-[#0E1510] border border-[#2B4432] px-3 mono text-[12px] text-[#E6EFE8] outline-none focus:border-[#8FBF5A]/50"
              />
            </div>
          </div>

          <div>
            <div
              className="mono text-[10px] mb-2 flex justify-between"
              style={{ color: "#6B8A7A" }}
            >
              <span>KEYWORDS COUNT</span>
              <span className="text-[#8CA99A]">
                {minKeywords}–{maxKeywords}
              </span>
            </div>
            <div className="flex gap-2">
              <input
                id="min-keywords-input"
                type="number"
                min={1}
                max={100}
                value={minKeywords}
                onChange={(e) =>
                  onChangeKeywords(Math.max(1, Number(e.target.value) || 1), maxKeywords)
                }
                className="w-full h-[32px] rounded-[8px] bg-[#0E1510] border border-[#2B4432] px-3 mono text-[12px] text-[#E6EFE8] outline-none focus:border-[#8FBF5A]/50"
              />
              <input
                id="max-keywords-input"
                type="number"
                min={minKeywords}
                max={100}
                value={maxKeywords}
                onChange={(e) =>
                  onChangeKeywords(minKeywords, Math.max(minKeywords, Number(e.target.value) || minKeywords))
                }
                className="w-full h-[32px] rounded-[8px] bg-[#0E1510] border border-[#2B4432] px-3 mono text-[12px] text-[#E6EFE8] outline-none focus:border-[#8FBF5A]/50"
              />
            </div>
          </div>

          <div>
            <div className="mono text-[10px] mb-2" style={{ color: "#6B8A7A" }}>
              CUSTOM PROMPT / INSTRUCTIONS
            </div>
            <textarea
              id="custom-prompt-input"
              value={customPrompt}
              onChange={(e) => onChangeCustomPrompt(e.target.value)}
              placeholder="e.g. vintage style, minimal, isolated on white background"
              rows={2}
              className="w-full rounded-[8px] bg-[#0E1510] border border-[#2B4432] p-2.5 mono text-[11px] text-[#E6EFE8] outline-none focus:border-[#8FBF5A]/50 resize-none placeholder:text-[#6B8A7A]"
            />
          </div>

          {/* Custom Title Prefix / Suffix */}
          <div id="sidebar-custom-title-affixes">
            <div className="mono text-[10px] mb-2" style={{ color: "#6B8A7A" }}>
              Custom Title Prefix / Suffix
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="mono text-[9px] mb-1 text-[#8CA99A]">Prefix</div>
                <input
                  id="custom-title-prefix-input"
                  type="text"
                  value={titlePrefix}
                  onChange={(e) => onChangeTitlePrefix(e.target.value)}
                  placeholder="e.g. Minimalist"
                  className="w-full h-[32px] rounded-[8px] bg-[#0E1510] border border-[#2B4432] px-2.5 mono text-[11px] text-[#E6EFE8] outline-none focus:border-[#8FBF5A]/50 placeholder:text-[#6B8A7A]"
                />
              </div>
              <div>
                <div className="mono text-[9px] mb-1 text-[#8CA99A]">Suffix</div>
                <input
                  id="custom-title-suffix-input"
                  type="text"
                  value={titleSuffix}
                  onChange={(e) => onChangeTitleSuffix(e.target.value)}
                  placeholder="e.g. Vector Design"
                  className="w-full h-[32px] rounded-[8px] bg-[#0E1510] border border-[#2B4432] px-2.5 mono text-[11px] text-[#E6EFE8] outline-none focus:border-[#8FBF5A]/50 placeholder:text-[#6B8A7A]"
                />
              </div>
            </div>
          </div>

          {/* Buyer Search SEO Notice */}
          <div className="p-3 rounded-[10px] bg-[#0E1510] border border-[#2B4432]/80 flex items-start gap-2.5">
            <Target size={15} className="text-[#8FBF5A] shrink-0 mt-0.5" />
            <div className="text-[10px] mono leading-relaxed text-[#8CA99A]">
              Titles & tags auto-optimized for buyer search across stock marketplaces.
            </div>
          </div>
        </div>
      </div>

      {/* Advance Settings Card (collapsible, hidden by default) */}
      <div
        id="sidebar-advance-settings-card"
        className="rounded-[14px] p-4"
        style={{ background: "#1A2A1E", border: "1px solid #2B4432" }}
      >
        <button
          id="advance-settings-toggle"
          type="button"
          onClick={() => setShowAdvanced((v) => !v)}
          className="w-full flex items-center justify-between cursor-pointer"
          aria-expanded={showAdvanced}
        >
          <div
            className="mono text-[11px] tracking-[0.14em] flex items-center gap-2"
            style={{ color: "#8FBF5A" }}
          >
            <SlidersHorizontal size={14} />
            <span>ADVANCE SETTINGS</span>
          </div>
          <ChevronDown
            size={16}
            className={`text-[#8CA99A] transition-transform duration-200 ${showAdvanced ? "rotate-180" : ""}`}
          />
        </button>

        {showAdvanced && (
          <div className="space-y-4 mt-4">
            <div>
              <div className="mono text-[10px] mb-2" style={{ color: "#6B8A7A" }}>
                TITLE CASE
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {[["title", "Title Case"], ["sentence", "Sentence case"], ["upper", "UPPERCASE"], ["lower", "lowercase"]].map(([v, l]) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => onChangeTitleCase(v)}
                    className={`h-[30px] rounded-[8px] mono text-[10px] cursor-pointer transition-all ${titleCase === v ? "bg-[#8FBF5A] text-[#0E1510] font-bold" : "bg-[#0E1510] border border-[#2B4432] text-[#8CA99A] hover:border-[#8FBF5A]/40"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mono text-[10px] mb-2 flex justify-between" style={{ color: "#6B8A7A" }}>
                <span>MAX TITLE LENGTH</span>
                <span className="text-[#8CA99A]">{maxTitleLength} chars</span>
              </div>
              <input
                id="max-title-length-input"
                type="number"
                min={50}
                max={500}
                value={maxTitleLength}
                onChange={(e) => onChangeMaxTitleLength(Math.max(50, Math.min(500, Number(e.target.value) || 200)))}
                className="w-full h-[32px] rounded-[8px] bg-[#0E1510] border border-[#2B4432] px-3 mono text-[12px] text-[#E6EFE8] outline-none focus:border-[#8FBF5A]/50"
              />
            </div>

            <div>
              <div className="mono text-[10px] mb-2" style={{ color: "#6B8A7A" }}>
                BANNED WORDS
              </div>
              <input
                id="banned-words-input"
                type="text"
                value={bannedWords}
                onChange={(e) => onChangeBannedWords(e.target.value)}
                placeholder="e.g. beautiful, amazing, nice"
                className="w-full h-[32px] rounded-[8px] bg-[#0E1510] border border-[#2B4432] px-3 mono text-[11px] text-[#E6EFE8] outline-none focus:border-[#8FBF5A]/50 placeholder:text-[#6B8A7A]"
              />
            </div>

            <div>
              <div className="mono text-[10px] mb-2" style={{ color: "#6B8A7A" }}>
                AI CREATIVITY
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {[[0.2, "PRECISE"], [0.4, "BALANCED"], [0.7, "CREATIVE"]].map(([v, l]) => (
                  <button
                    key={l as string}
                    type="button"
                    onClick={() => onChangeTemperature(v as number)}
                    className={`h-[30px] rounded-[8px] mono text-[10px] cursor-pointer transition-all ${temperature === v ? "bg-[#8FBF5A] text-[#0E1510] font-bold" : "bg-[#0E1510] border border-[#2B4432] text-[#8CA99A] hover:border-[#8FBF5A]/40"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mono text-[10px] mb-2" style={{ color: "#6B8A7A" }}>
                PROMPT DETAIL
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {[["concise", "CONCISE"], ["detailed", "DETAILED"], ["ultra", "ULTRA"]].map(([v, l]) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => onChangePromptDetail(v)}
                    className={`h-[30px] rounded-[8px] mono text-[10px] cursor-pointer transition-all ${promptDetail === v ? "bg-[#8FBF5A] text-[#0E1510] font-bold" : "bg-[#0E1510] border border-[#2B4432] text-[#8CA99A] hover:border-[#8FBF5A]/40"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Single-Word Keywords Card */}
      <div
        id="sidebar-single-word-card"
        className="rounded-[14px] p-4 flex items-center justify-between"
        style={{ background: "#1A2A1E", border: "1px solid #2B4432" }}
      >
        <div>
          <div className="mono text-[11px] tracking-wide text-[#E6EFE8]">
            Single-Word Keywords
          </div>
          <div className="mono text-[10px] mt-1" style={{ color: "#6B8A7A" }}>
            AdobeStock compliant
          </div>
        </div>

        <button
          id="single-word-toggle-btn"
          onClick={onToggleSingleWord}
          className={`w-[44px] h-[24px] rounded-full p-[2px] transition-all cursor-pointer ${
            singleWordOnly ? "bg-[#8FBF5A]" : "bg-[#1F3324] border border-[#2B4432]"
          }`}
          aria-label="Toggle single-word keywords"
        >
          <div
            className={`w-[20px] h-[20px] rounded-full bg-[#0E1510] transition-transform duration-200 ${
              singleWordOnly ? "translate-x-[20px] shadow" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </aside>
  );
};
