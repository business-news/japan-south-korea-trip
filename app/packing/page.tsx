"use client";

import { useState } from "react";
import { packingList as initialList } from "@/data/trip";
import PageHeader from "@/components/PageHeader";
import StickerIcon, { type StickerKey } from "@/components/StickerIcon";
import type { PackingItem } from "@/data/types";

const categories = ["all", "documents", "clothes", "electronics", "toiletries", "misc"] as const;
const categoryStickers: Record<string, StickerKey> = {
  documents: "docs",
  clothes: "clothes",
  electronics: "electronics",
  toiletries: "toiletries",
  misc: "misc",
};

export default function PackingPage() {
  const [items, setItems] = useState<PackingItem[]>(initialList);
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? items : items.filter((i) => i.category === filter);
  const totalPacked = items.filter((i) => i.packed).length;
  const totalItems = items.length;
  const progress = totalItems > 0 ? (totalPacked / totalItems) * 100 : 0;

  function toggleItem(id: string) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <PageHeader
        label="Packing"
        title="Packing List"
        description="Tick things off as you pack. Shared between you and your husband."
      />

      {/* ─── Progress ─── */}
      <div className="bg-white border border-border rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)] max-w-xl mb-8">
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-sm text-stone-500">Packing progress</span>
          <span className="text-sm font-semibold text-stone-700">
            {totalPacked} / {totalItems} items
          </span>
        </div>
        <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-matcha-400 to-matcha-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        {progress === 100 && (
          <p className="text-sm text-matcha-600 font-medium mt-2">All packed! Ready to go!</p>
        )}
      </div>

      {/* ─── Category Filter ─── */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {categories.map((cat) => {
          const count = cat === "all" ? items.length : items.filter((i) => i.category === cat).length;
          const packed = cat === "all" ? totalPacked : items.filter((i) => i.category === cat && i.packed).length;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-colors capitalize ${
                filter === cat
                  ? "bg-accent text-white"
                  : "bg-white border border-border text-stone-500 hover:bg-stone-50"
              }`}
            >
              {cat !== "all" && <StickerIcon name={categoryStickers[cat]} size={16} />}
              {cat === "all" ? "All" : cat}
              <span className="opacity-75">
                {packed}/{count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ─── Checklist ─── */}
      <div className="bg-white border border-border rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-sm)] max-w-xl divide-y divide-border-subtle">
        {filtered.map((item) => (
          <label
            key={item.id}
            className="flex items-center gap-4 px-5 py-3.5 cursor-pointer hover:bg-stone-50 transition-colors"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={`w-5 h-5 rounded-[4px] border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                item.packed
                  ? "bg-matcha-500 border-matcha-500 text-white"
                  : "border-stone-300 hover:border-ocean-400"
              }`}
            >
              {item.packed && (
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <span
              className={`text-sm transition-all ${
                item.packed ? "line-through text-stone-400" : "text-stone-700"
              }`}
            >
              {item.item}
            </span>
            <span className="ml-auto text-[0.65rem] font-semibold uppercase tracking-wider text-stone-300 capitalize">
              {item.category}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
