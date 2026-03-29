import Image from "next/image";
import { bookings } from "@/data/trip";
import { StatusBadge, PaymentBadge } from "@/components/Badge";
import PageHeader from "@/components/PageHeader";
import StickerIcon, { stickerMap, type StickerKey } from "@/components/StickerIcon";
import type { Booking } from "@/data/types";

const typeOrder = ["flight", "accommodation", "transport", "experience"] as const;
const typeLabels: Record<string, { label: string; sticker: StickerKey }> = {
  flight: { label: "Flights", sticker: "flight" },
  accommodation: { label: "Accommodation", sticker: "accommodation" },
  transport: { label: "Transport", sticker: "transport" },
  experience: { label: "Experiences", sticker: "experience" },
};

function BookingCard({ booking }: { booking: Booking }) {
  return (
    <div className="bg-white border border-border rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <Image
            src={stickerMap[booking.type as StickerKey] || stickerMap.experience}
            alt=""
            width={32}
            height={32}
            className="flex-shrink-0"
          />
          <div>
            <h3 className="text-sm font-semibold text-stone-800">{booking.title}</h3>
            {booking.provider && (
              <p className="text-xs text-stone-400 mt-0.5">via {booking.provider}</p>
            )}
          </div>
        </div>
        <StatusBadge status={booking.status} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {booking.confirmationNumber && (
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-stone-400">Confirmation</p>
            <p className="text-xs font-mono text-stone-700 mt-0.5">{booking.confirmationNumber}</p>
          </div>
        )}
        {booking.checkIn && (
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-stone-400">Check-in</p>
            <p className="text-xs text-stone-700 mt-0.5">
              {new Date(booking.checkIn).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}
              {booking.checkOut && ` → ${new Date(booking.checkOut).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}`}
            </p>
          </div>
        )}
        {booking.from && (
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-stone-400">Route</p>
            <p className="text-xs text-stone-700 mt-0.5">{booking.from} → {booking.to}</p>
          </div>
        )}
        {booking.location && (
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-stone-400">Location</p>
            <p className="text-xs text-stone-700 mt-0.5">{booking.location}</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border-subtle">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-stone-700">
            {booking.cost.toLocaleString()} {booking.currency}
          </span>
          <PaymentBadge status={booking.paymentStatus} />
        </div>
        {booking.mapUrl && (
          <a
            href={booking.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ocean-500 font-medium hover:underline"
          >
            {booking.mapProvider === "naver" ? "Naver Maps" : "Google Maps"} →
          </a>
        )}
      </div>

      {booking.notes && (
        <div className="flex items-start gap-1.5 mt-3 bg-stone-50 rounded-[var(--radius-sm)] px-2.5 py-1.5">
          <StickerIcon name="tip" size={14} className="mt-0.5" />
          <p className="text-xs text-stone-500">{booking.notes}</p>
        </div>
      )}
    </div>
  );
}

export default function BookingsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <PageHeader
        label="Bookings"
        title="All Reservations"
        description="Flights, hotels, transport, and experiences — every confirmation in one place."
      />

      {typeOrder.map((type) => {
        const items = bookings.filter((b) => b.type === type);
        if (items.length === 0) return null;
        const config = typeLabels[type];
        return (
          <div key={type} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <StickerIcon name={config.sticker} size={24} />
              <h2 className="text-lg font-semibold text-stone-700">{config.label}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {items.map((b) => (
                <BookingCard key={b.id} booking={b} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
