import Link from "next/link";
import { trip, itinerary, expenses, bookings } from "@/data/trip";
import StickerIcon, { stickerMap, type StickerKey } from "@/components/StickerIcon";
import Image from "next/image";

function getDaysUntil(dateStr: string) {
  const now = new Date();
  const target = new Date(dateStr);
  const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

export default function Home() {
  const daysUntil = getDaysUntil(trip.departureDate);
  const totalSpent = expenses.filter((e) => e.paid).reduce((sum, e) => sum + e.amountAUD, 0);
  const totalUnpaid = expenses.filter((e) => !e.paid).reduce((sum, e) => sum + e.amountAUD, 0);
  const firstDay = itinerary[0];
  const unpaidBookings = bookings.filter((b) => b.paymentStatus === "unpaid");

  return (
    <div className="flex flex-col flex-1 bg-gradient-to-br from-ocean-50 via-sakura-50 to-hanok-50 min-h-screen">
      {/* ─── Hero ─── */}
      <header className="relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="text-sm font-semibold tracking-widest uppercase text-ocean-500 mb-3">
            {daysUntil > 0 ? `${daysUntil} days until departure` : "Your trip is here!"}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-800 tracking-tight leading-tight">
            {trip.title.split("×")[0]}
            <span className="text-ocean-500">×</span>
            {trip.title.split("×")[1]}
          </h1>
          <p className="mt-3 text-stone-500 font-light max-w-xl leading-relaxed">
            Everything you need for your trip — itineraries, bookings, budgets,
            and maps — all in one calm, organised space.
          </p>
          <p className="mt-2 text-sm text-stone-400 tracking-wider">
            旅の計画 · 여행 플래너
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/itinerary"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-[var(--radius-md)] shadow-[0_2px_8px_rgba(20,184,166,0.25)] hover:bg-accent-hover hover:shadow-[0_4px_16px_rgba(20,184,166,0.3)] transition-all active:scale-[0.97]"
            >
              View Itinerary
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/maps"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-ocean-600 text-sm font-medium rounded-[var(--radius-md)] border-[1.5px] border-ocean-300 hover:bg-ocean-50 hover:border-ocean-400 transition-all active:scale-[0.97]"
            >
              Open Maps
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Quick Stats ─── */}
      <section className="max-w-6xl mx-auto px-6 -mt-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {([
            { sticker: "duration" as StickerKey, label: "Duration", value: `${itinerary.length} days`, href: "/itinerary" },
            { sticker: "bookingsTotal" as StickerKey, label: "Bookings", value: `${bookings.length} total`, href: "/bookings" },
            { sticker: "spent" as StickerKey, label: "Spent", value: `$${totalSpent.toLocaleString()}`, href: "/budget" },
            { sticker: "toPay" as StickerKey, label: "To Pay", value: `$${totalUnpaid.toLocaleString()}`, href: "/budget" },
          ]).map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white border border-border rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3">
                <StickerIcon name={stat.sticker} size={32} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">{stat.label}</p>
                  <p className="text-lg font-semibold text-stone-800">{stat.value}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Next Up ─── */}
      {firstDay && (
        <section className="max-w-6xl mx-auto px-6 pt-12">
          <div className="bg-gradient-to-br from-ocean-50 to-sakura-50 rounded-[var(--radius-lg)] p-6 relative overflow-hidden">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">Next Up</p>
            <h3 className="font-display text-xl text-stone-800">
              Day {firstDay.dayNumber} — {firstDay.city}
            </h3>
            <p className="text-sm text-stone-400 mt-1">
              {new Date(firstDay.date).toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </p>
            <div className="mt-4 space-y-3">
              {firstDay.events.slice(0, 3).map((event) => (
                <div key={event.id} className="flex items-center gap-3">
                  <Image
                    src={stickerMap[event.category as StickerKey] || stickerMap.experience}
                    alt=""
                    width={24}
                    height={24}
                    className="flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-stone-700">{event.title}</p>
                    <p className="text-xs text-stone-400">{event.time}{event.location ? ` · ${event.location}` : ""}</p>
                  </div>
                </div>
              ))}
              {firstDay.events.length > 3 && (
                <p className="text-xs text-ocean-500 font-medium">+ {firstDay.events.length - 3} more</p>
              )}
            </div>
            <Image
              src={stickerMap.hero}
              alt=""
              width={80}
              height={80}
              className="absolute bottom-4 right-4 opacity-30"
            />
          </div>
        </section>
      )}

      {/* ─── Budget Summary ─── */}
      <section className="max-w-6xl mx-auto px-6 pt-12">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="font-display text-xl text-stone-800">Budget</h2>
          <Link href="/budget" className="text-sm text-ocean-500 font-medium hover:underline">View all →</Link>
        </div>
        <div className="bg-white border border-border rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)]">
          <div className="flex justify-between items-baseline mb-4">
            <span className="text-sm text-stone-500">Total spent</span>
            <div>
              <span className="text-xl font-bold text-ocean-600">${totalSpent.toLocaleString()}</span>
              <span className="text-sm text-stone-400 ml-1">/ ${trip.totalBudget.toLocaleString()}</span>
            </div>
          </div>
          <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-ocean-400 to-ocean-500 transition-all"
              style={{ width: `${Math.min((totalSpent / trip.totalBudget) * 100, 100)}%` }}
            />
          </div>
        </div>
      </section>

      {/* ─── Still to Pay ─── */}
      {unpaidBookings.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
          <h2 className="font-display text-xl text-stone-800 mb-4">Still to Pay</h2>
          <div className="bg-white border border-border rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-sm)] divide-y divide-border-subtle">
            {unpaidBookings.map((b) => (
              <div key={b.id} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={stickerMap[b.type as StickerKey] || stickerMap.experience}
                    alt=""
                    width={28}
                    height={28}
                    className="flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-stone-800">{b.title}</p>
                    <p className="text-xs text-stone-400">
                      {b.cost.toLocaleString()} {b.currency}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-hanok-50 text-[#b45309]">
                  Unpaid
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Footer ─── */}
      <footer className="border-t border-border-subtle/50 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <span className="font-display text-lg text-stone-300">
            trippi<span className="text-ocean-300">.</span>
          </span>
          <p className="text-xs text-stone-400 mt-2">
            Japan × South Korea — Your trip, beautifully organised
          </p>
        </div>
      </footer>
    </div>
  );
}
