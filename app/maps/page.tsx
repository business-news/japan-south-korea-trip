"use client";

import { useState } from "react";
import Image from "next/image";
import { mapPins, itinerary } from "@/data/trip";
import { CategoryBadge } from "@/components/Badge";
import PageHeader from "@/components/PageHeader";
import StickerIcon, { stickerMap, type StickerKey } from "@/components/StickerIcon";

const cities = ["All", ...Array.from(new Set(mapPins.map((p) => p.city)))];

export default function MapsPage() {
  const [cityFilter, setCityFilter] = useState("All");

  const filtered = cityFilter === "All" ? mapPins : mapPins.filter((p) => p.city === cityFilter);

  // Group itinerary days by city for quick-link sections
  const japanDays = itinerary.filter((d) => d.country === "Japan");
  const koreaDays = itinerary.filter((d) => d.country === "South Korea");

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <PageHeader
        label="Navigation"
        title="Maps & Locations"
        description="All your destinations with direct links to Google Maps (Japan) and Naver Maps (South Korea)."
      />

      {/* ─── Quick Map Links ─── */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white border border-border rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all"
        >
          <StickerIcon name="japan" size={36} />
          <div>
            <h3 className="text-sm font-semibold text-stone-800">Google Maps</h3>
            <p className="text-xs text-stone-400">Best for navigating Japan</p>
          </div>
          <span className="ml-auto text-ocean-500 text-sm font-medium">Open →</span>
        </a>
        <a
          href="https://map.naver.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white border border-border rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all"
        >
          <StickerIcon name="korea" size={36} />
          <div>
            <h3 className="text-sm font-semibold text-stone-800">Naver Maps</h3>
            <p className="text-xs text-stone-400">Essential for South Korea</p>
          </div>
          <span className="ml-auto text-ocean-500 text-sm font-medium">Open →</span>
        </a>
      </div>

      {/* ─── City Filter ─── */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setCityFilter(city)}
            className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              cityFilter === city
                ? "bg-accent text-white"
                : "bg-white border border-border text-stone-500 hover:bg-stone-50"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* ─── Pinned Locations ─── */}
      <div className="flex items-center gap-2 mb-4">
        <StickerIcon name="pin" size={24} />
        <h2 className="text-lg font-semibold text-stone-700">Pinned Locations</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {filtered.map((pin) => (
          <a
            key={pin.id}
            href={pin.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-border rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all flex items-start gap-3"
          >
            <Image
              src={stickerMap[pin.category as StickerKey] || stickerMap.experience}
              alt=""
              width={28}
              height={28}
              className="flex-shrink-0 mt-0.5"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-stone-800 truncate">{pin.label}</h3>
              <p className="text-xs text-stone-400 mt-0.5">
                {pin.city}, {pin.country}
                {pin.dayNumber && ` · Day ${pin.dayNumber}`}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <CategoryBadge category={pin.category} />
                <span className="text-xs text-ocean-500 font-medium ml-auto">
                  {pin.mapProvider === "naver" ? "Naver" : "Google"} →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* ─── Daily Routes ─── */}
      <div className="flex items-center gap-2 mb-4">
        <StickerIcon name="japan" size={24} />
        <h2 className="text-lg font-semibold text-stone-700">Daily Routes — Japan</h2>
      </div>
      <div className="space-y-3 mb-10">
        {japanDays.map((day) => (
          <div key={day.date} className="bg-white border border-border rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-sm)]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-stone-800">
                  Day {day.dayNumber} — {day.city}
                </h3>
                <p className="text-xs text-stone-400">{day.events.length} stops</p>
              </div>
              <div className="flex gap-1">
                {day.events.filter((e) => e.mapUrl).slice(0, 5).map((e) => (
                  <a
                    key={e.id}
                    href={e.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-[var(--radius-sm)] bg-stone-50 hover:bg-ocean-50 transition-colors"
                    title={e.title}
                  >
                    <Image
                      src={stickerMap[e.category as StickerKey] || stickerMap.experience}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <StickerIcon name="korea" size={24} />
        <h2 className="text-lg font-semibold text-stone-700">Daily Routes — South Korea</h2>
      </div>
      <div className="space-y-3">
        {koreaDays.map((day) => (
          <div key={day.date} className="bg-white border border-border rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-sm)]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-stone-800">
                  Day {day.dayNumber} — {day.city}
                </h3>
                <p className="text-xs text-stone-400">{day.events.length} stops</p>
              </div>
              <div className="flex gap-1">
                {day.events.filter((e) => e.mapUrl).slice(0, 5).map((e) => (
                  <a
                    key={e.id}
                    href={e.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-[var(--radius-sm)] bg-stone-50 hover:bg-ocean-50 transition-colors"
                    title={e.title}
                  >
                    <Image
                      src={stickerMap[e.category as StickerKey] || stickerMap.experience}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
