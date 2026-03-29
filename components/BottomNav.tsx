"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import StickerIcon, { type StickerKey } from "@/components/StickerIcon";

const tabs: { href: string; label: string; sticker: StickerKey }[] = [
  { href: "/", label: "Home", sticker: "home" },
  { href: "/itinerary", label: "Plan", sticker: "itinerary" },
  { href: "/bookings", label: "Bookings", sticker: "bookings" },
  { href: "/budget", label: "Budget", sticker: "budget" },
  { href: "/maps", label: "Maps", sticker: "maps" },
  { href: "/documents", label: "Docs", sticker: "docs" },
  { href: "/travel-info", label: "Info", sticker: "info" },
  { href: "/packing", label: "Pack", sticker: "packing" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 safe-area-bottom">
      <div className="flex justify-around px-1 pt-2 pb-5">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-0.5 text-[0.6rem] font-medium transition-colors min-w-0 ${
                isActive ? "text-ocean-500" : "text-stone-400"
              }`}
            >
              <StickerIcon name={tab.sticker} size={24} />
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
