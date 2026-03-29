import type { Category, BookingStatus, PaymentStatus } from "@/data/types";

const categoryColors: Record<Category, string> = {
  accommodation: "bg-ocean-50 text-ocean-600",
  flight: "bg-sakura-50 text-sakura-500",
  transport: "bg-matcha-50 text-matcha-600",
  food: "bg-hanok-50 text-[#b45309]",
  culture: "bg-ink-50 text-ink-600",
  experience: "bg-sakura-50 text-[#be185d]",
  shopping: "bg-hanok-50 text-hanok-500",
  documentation: "bg-stone-100 text-stone-600",
};

const statusColors: Record<BookingStatus, string> = {
  confirmed: "bg-matcha-50 text-matcha-600",
  pending: "bg-hanok-50 text-[#b45309]",
  cancelled: "bg-red-50 text-error",
};

const paymentColors: Record<PaymentStatus, string> = {
  paid: "bg-matcha-50 text-matcha-600",
  unpaid: "bg-hanok-50 text-[#b45309]",
  partial: "bg-ink-50 text-ink-600",
};

export function CategoryBadge({ category }: { category: Category }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[0.7rem] font-semibold capitalize ${categoryColors[category]}`}>
      {category}
    </span>
  );
}

export function StatusBadge({ status }: { status: BookingStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.7rem] font-semibold capitalize ${statusColors[status]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
      {status}
    </span>
  );
}

export function PaymentBadge({ status }: { status: PaymentStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.7rem] font-semibold capitalize ${paymentColors[status]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
      {status}
    </span>
  );
}
