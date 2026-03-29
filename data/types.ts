/* ═══════════════════════════════════════════════════
   Japan × South Korea — Data Types
   ═══════════════════════════════════════════════════ */

export type Category =
  | "accommodation"
  | "flight"
  | "transport"
  | "food"
  | "culture"
  | "experience"
  | "shopping"
  | "documentation";

export type BookingStatus = "confirmed" | "pending" | "cancelled";
export type PaymentStatus = "paid" | "unpaid" | "partial";
export type Currency = "AUD" | "JPY" | "KRW" | "USD";

/* ─── Trip ─── */
export interface TripInfo {
  title: string;
  subtitle: string;
  departureDate: string; // ISO date
  returnDate: string;
  travellers: string[];
  totalBudget: number;
  budgetCurrency: Currency;
}

/* ─── Itinerary ─── */
export interface ItineraryDay {
  date: string; // ISO date
  dayNumber: number;
  city: string;
  country: "Japan" | "South Korea";
  events: ItineraryEvent[];
}

export interface ItineraryEvent {
  id: string;
  time: string; // e.g. "09:00"
  endTime?: string;
  title: string;
  location?: string;
  category: Category;
  emoji: string;
  notes?: string;
  mapUrl?: string;
  mapProvider?: "google" | "naver";
  bookingRef?: string;
  cost?: number;
  currency?: Currency;
}

/* ─── Bookings ─── */
export interface Booking {
  id: string;
  type: "flight" | "accommodation" | "transport" | "experience";
  title: string;
  emoji: string;
  provider?: string;
  confirmationNumber?: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  checkIn?: string;
  checkOut?: string;
  departureTime?: string;
  arrivalTime?: string;
  from?: string;
  to?: string;
  location?: string;
  city: string;
  country: "Japan" | "South Korea";
  cost: number;
  currency: Currency;
  notes?: string;
  mapUrl?: string;
  mapProvider?: "google" | "naver";
}

/* ─── Budget ─── */
export interface Expense {
  id: string;
  date: string;
  title: string;
  category: Category;
  amount: number;
  currency: Currency;
  amountAUD: number;
  paid: boolean;
  bookingId?: string;
  notes?: string;
}

export interface BudgetSummary {
  totalBudget: number;
  spent: number;
  remaining: number;
  byCategory: { category: Category; amount: number; color: string }[];
}

/* ─── Documents ─── */
export interface TravelDocument {
  id: string;
  type: "passport" | "visa" | "insurance" | "booking_confirmation" | "other";
  title: string;
  emoji: string;
  details: Record<string, string>;
  notes?: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email?: string;
  notes?: string;
}

/* ─── Maps ─── */
export interface MapPin {
  id: string;
  label: string;
  emoji: string;
  city: string;
  country: "Japan" | "South Korea";
  lat: number;
  lng: number;
  mapUrl: string;
  mapProvider: "google" | "naver";
  dayNumber?: number;
  category: Category;
}

/* ─── Travel Info ─── */
export interface Phrase {
  id: string;
  english: string;
  japanese?: string;
  romanjiJP?: string;
  korean?: string;
  romanjiKR?: string;
  category: "greeting" | "dining" | "transport" | "emergency" | "shopping" | "general";
}

export interface TravelTip {
  id: string;
  title: string;
  emoji: string;
  content: string;
  country: "Japan" | "South Korea" | "both";
}

/* ─── Packing ─── */
export interface PackingItem {
  id: string;
  item: string;
  category: "clothes" | "toiletries" | "electronics" | "documents" | "misc";
  packed: boolean;
  packedBy?: string;
}
