import Image from "next/image";

/** Centralized sticker mapping — one place to swap any icon */
export const stickerMap = {
  // ─── Navigation ───
  home: "/stickers/accommodation.png",
  itinerary: "/stickers/celebration.png",
  bookings: "/stickers/sleeping.png",
  budget: "/stickers/budget.png",
  maps: "/stickers/maps.png",
  docs: "/stickers/certificate.png",
  info: "/stickers/travel-info.png",
  packing: "/stickers/packing.png",

  // ─── Event / Booking Categories ───
  accommodation: "/stickers/sleeping.png",
  flight: "/stickers/transport.png",
  transport: "/stickers/taxi.png",
  food: "/stickers/snacks.png",
  culture: "/stickers/activities.png",
  experience: "/stickers/activities.png",
  shopping: "/stickers/shopping.png",
  documentation: "/stickers/certificate.png",

  // ─── Quick Stats (Home) ───
  duration: "/stickers/celebration.png",
  bookingsTotal: "/stickers/sleeping.png",
  spent: "/stickers/shopping.png",
  toPay: "/stickers/budget.png",

  // ─── Misc ───
  tip: "/stickers/surprised.png",
  japan: "/stickers/japan.png",
  korea: "/stickers/south-korea.png",
  hero: "/stickers/cherry-blossom.png",
  emergency: "/stickers/surprised.png",
  pin: "/stickers/maps.png",
  phrasebook: "/stickers/phrases.png",
  practical: "/stickers/travel-info.png",
  clothes: "/stickers/packing.png",
  electronics: "/stickers/activities.png",
  toiletries: "/stickers/packing.png",
  misc: "/stickers/packing.png",
} as const;

export type StickerKey = keyof typeof stickerMap;

interface StickerIconProps {
  name: StickerKey;
  size?: number;
  className?: string;
}

export default function StickerIcon({ name, size = 28, className = "" }: StickerIconProps) {
  return (
    <Image
      src={stickerMap[name]}
      alt=""
      width={size}
      height={size}
      className={`inline-block flex-shrink-0 pointer-events-none ${className}`}
      draggable={false}
    />
  );
}
