"use client";

import { useState } from "react";
import { phrases, travelTips } from "@/data/trip";
import PageHeader from "@/components/PageHeader";
import StickerIcon from "@/components/StickerIcon";

const phraseCategories = ["all", "greeting", "dining", "transport", "shopping", "emergency", "general"] as const;
const tipCountries = ["all", "Japan", "South Korea", "both"] as const;

export default function TravelInfoPage() {
  const [phraseFilter, setPhraseFilter] = useState<string>("all");
  const [tipFilter, setTipFilter] = useState<string>("all");

  const filteredPhrases = phraseFilter === "all" ? phrases : phrases.filter((p) => p.category === phraseFilter);
  const filteredTips = tipFilter === "all" ? travelTips : travelTips.filter((t) => t.country === tipFilter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <PageHeader
        label="Travel Info"
        title="Phrasebook & Tips"
        description="Essential phrases in Japanese and Korean, plus practical travel tips for both countries."
      />

      {/* ═══ Phrasebook ═══ */}
      <section className="mb-14">
        <div className="flex items-center gap-2 mb-4">
          <StickerIcon name="phrasebook" size={24} />
          <h2 className="text-lg font-semibold text-stone-700">Phrasebook</h2>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {phraseCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setPhraseFilter(cat)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors capitalize ${
                phraseFilter === cat
                  ? "bg-accent text-white"
                  : "bg-white border border-border text-stone-500 hover:bg-stone-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="bg-white border border-border rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-sm)]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-stone-50">
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-400">English</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
                    <span className="inline-flex items-center gap-1">
                      <StickerIcon name="japan" size={14} /> Japanese
                    </span>
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-400">Romanji</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
                    <span className="inline-flex items-center gap-1">
                      <StickerIcon name="korea" size={14} /> Korean
                    </span>
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-400">Romanji</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {filteredPhrases.map((phrase) => (
                  <tr key={phrase.id} className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-3 font-medium text-stone-800">{phrase.english}</td>
                    <td className="px-5 py-3 text-stone-700" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                      {phrase.japanese || "—"}
                    </td>
                    <td className="px-5 py-3 text-xs text-stone-400 italic">{phrase.romanjiJP || "—"}</td>
                    <td className="px-5 py-3 text-stone-700" style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}>
                      {phrase.korean || "—"}
                    </td>
                    <td className="px-5 py-3 text-xs text-stone-400 italic">{phrase.romanjiKR || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ Travel Tips ═══ */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <StickerIcon name="practical" size={24} />
          <h2 className="text-lg font-semibold text-stone-700">Practical Tips</h2>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {tipCountries.map((country) => (
            <button
              key={country}
              onClick={() => setTipFilter(country)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                tipFilter === country
                  ? "bg-accent text-white"
                  : "bg-white border border-border text-stone-500 hover:bg-stone-50"
              }`}
            >
              {country === "all" ? "All" : country === "both" ? "Both Countries" : country}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filteredTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white border border-border rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)]"
            >
              <div className="flex items-start gap-3">
                <StickerIcon name="tip" size={28} />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-stone-800">{tip.title}</h3>
                    <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                      {tip.country === "both" ? "JP + KR" : tip.country === "Japan" ? "JP" : "KR"}
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 font-light leading-relaxed mt-1.5">
                    {tip.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
