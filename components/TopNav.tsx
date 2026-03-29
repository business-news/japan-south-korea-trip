"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import StickerIcon, { type StickerKey } from "@/components/StickerIcon";

const links: { href: string; label: string; sticker: StickerKey }[] = [
  { href: "/", label: "Home", sticker: "home" },
  { href: "/itinerary", label: "Itinerary", sticker: "itinerary" },
  { href: "/bookings", label: "Bookings", sticker: "bookings" },
  { href: "/budget", label: "Budget", sticker: "budget" },
  { href: "/maps", label: "Maps", sticker: "maps" },
  { href: "/documents", label: "Docs", sticker: "docs" },
  { href: "/travel-info", label: "Info", sticker: "info" },
  { href: "/packing", label: "Packing", sticker: "packing" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex border-b border-border bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 w-full">
        <Link href="/" className="font-display text-xl text-stone-800 hover:opacity-80 transition-opacity">
          trippi<span className="text-accent">.</span>
        </Link>
        <div className="flex gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-[var(--radius-sm)] transition-colors ${
                  isActive
                    ? "bg-accent-light text-ocean-600"
                    : "text-stone-500 hover:bg-stone-100 hover:text-stone-800"
                }`}
              >
                <StickerIcon name={link.sticker} size={18} />
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ocean-200 to-sakura-200 flex-shrink-0" />
      </div>
    </nav>
  );
}
