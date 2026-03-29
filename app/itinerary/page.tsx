"use client";

import { useState } from "react";
import Image from "next/image";
import { itinerary } from "@/data/trip";
import { CategoryBadge } from "@/components/Badge";
import PageHeader from "@/components/PageHeader";
import StickerIcon, { stickerMap, type StickerKey } from "@/components/StickerIcon";

export default function ItineraryPage() {
  const [selectedDay, setSelectedDay] = useState(0);
  const day = itinerary[selectedDay];

  // Track touch start position to distinguish taps from swipes
  const touchStartRef = { x: 0, y: 0 };

  function handleTouchStart(e: React.TouchEvent) {
    touchStartRef.x = e.touches[0].clientX;
    touchStartRef.y = e.touches[0].clientY;
  }

  function handleTouchEnd(e: React.TouchEvent, index: number) {
    const dx = Math.abs(e.changedTouches[0].clientX - touchStartRef.x);
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartRef.y);
    // Only treat as tap if finger didn't move more than 10px
    if (dx < 10 && dy < 10) {
      e.preventDefault();
      setSelectedDay(index);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <PageHeader
        label="Itinerary"
        title="Day-by-Day Plan"
        description="Your complete journey through Japan and South Korea, one day at a time."
      />

      {/* ─── Day Picker ─── */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-6 px-6 scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
        {itinerary.map((d, i) => {
          const isActive = i === selectedDay;
          return (
            <div
              role="button"
              tabIndex={0}
              key={d.date}
              onClick={() => setSelectedDay(i)}
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, i)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedDay(i); }}
              className={`flex-shrink-0 flex flex-col items-center gap-1 px-4 py-3 rounded-[var(--radius-lg)] border text-center min-w-[80px] cursor-pointer select-none ${
                isActive
                  ? "bg-accent text-white border-accent shadow-[0_2px_8px_rgba(20,184,166,0.25)]"
                  : "bg-white border-border text-stone-600 hover:border-ocean-300"
              }`}
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-wider opacity-75 pointer-events-none">
                Day {d.dayNumber}
              </span>
              <span className="text-sm font-semibold pointer-events-none">{d.city}</span>
              <StickerIcon name={d.country === "Japan" ? "japan" : "korea"} size={22} />
            </div>
          );
        })}
      </div>

      {/* ─── Day Header ─── */}
      <div className="mb-6">
        <h2 className="font-display text-2xl text-stone-800">
          Day {day.dayNumber} — {day.city}
        </h2>
        <div className="flex items-center gap-1.5 mt-1">
          <p className="text-sm text-stone-400">
            {new Date(day.date).toLocaleDateString("en-AU", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {" · "}
          </p>
          <StickerIcon name={day.country === "Japan" ? "japan" : "korea"} size={16} />
          <p className="text-sm text-stone-400">
            {day.country === "Japan" ? "Japan" : "South Korea"}
          </p>
        </div>
      </div>

      {/* ─── Timeline ─── */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[23px] top-4 bottom-4 w-px bg-stone-200 hidden md:block" />

        <div className="space-y-4">
          {day.events.map((event) => (
            <div key={event.id} className="flex gap-4 group">
              {/* Time column */}
              <div className="flex-shrink-0 w-[48px] pt-4 text-right">
                <span className="text-xs font-semibold text-stone-400 tabular-nums">
                  {event.time}
                </span>
              </div>

              {/* Dot */}
              <div className="hidden md:flex flex-shrink-0 w-[14px] items-start pt-[18px]">
                <div className="w-2.5 h-2.5 rounded-full bg-ocean-400 border-2 border-white shadow-sm relative z-10" />
              </div>

              {/* Card */}
              <div className="flex-1 bg-white border border-border rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)] group-hover:shadow-[var(--shadow-md)] group-hover:-translate-y-0.5 transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <Image
                      src={stickerMap[event.category as StickerKey] || stickerMap.experience}
                      alt=""
                      width={32}
                      height={32}
                      className="flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-stone-800">{event.title}</h3>
                      {event.location && (
                        <p className="text-xs text-stone-400 mt-0.5">{event.location}</p>
                      )}
                      {event.notes && (
                        <div className="flex items-start gap-1.5 mt-2 bg-stone-50 rounded-[var(--radius-sm)] px-2.5 py-1.5">
                          <StickerIcon name="tip" size={14} className="mt-0.5" />
                          <p className="text-xs text-stone-500">{event.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <CategoryBadge category={event.category} />
                </div>

                {/* Footer row */}
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border-subtle">
                  {event.cost && (
                    <span className="text-xs text-stone-400">
                      {event.cost.toLocaleString()} {event.currency}
                    </span>
                  )}
                  {event.bookingRef && (
                    <span className="text-xs text-stone-400 font-mono">
                      Ref: {event.bookingRef}
                    </span>
                  )}
                  {event.mapUrl && (
                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-ocean-500 font-medium hover:underline ml-auto"
                    >
                      {event.mapProvider === "naver" ? "Naver Maps" : "Google Maps"} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
