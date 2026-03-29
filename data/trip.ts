import type {
  TripInfo,
  ItineraryDay,
  Booking,
  Expense,
  TravelDocument,
  EmergencyContact,
  MapPin,
  Phrase,
  TravelTip,
  PackingItem,
} from "./types";

/* ═══════════════════════════════════════════════════
   Trip Overview
   ═══════════════════════════════════════════════════ */
export const trip: TripInfo = {
  title: "Japan × South Korea",
  subtitle: "旅の計画 · 여행 플래너",
  departureDate: "2026-03-29",
  returnDate: "2026-04-19",
  travellers: ["Elisha", "Husband"],
  totalBudget: 15000,
  budgetCurrency: "AUD",
};

/* ═══════════════════════════════════════════════════
   Itinerary — Day by Day
   ═══════════════════════════════════════════════════ */
export const itinerary: ItineraryDay[] = [
  /* ──── Departure ──── */
  {
    date: "2026-03-29",
    dayNumber: 0,
    city: "Perth → Tokyo",
    country: "Japan",
    events: [
      { id: "e0-1", time: "19:00", title: "Head to Perth Airport", emoji: "🚗", category: "transport", location: "Perth Airport T1", mapUrl: "https://maps.google.com/?q=Perth+Airport+T1", mapProvider: "google", notes: "Allow extra time for international check-in" },
      { id: "e0-2", time: "21:35", title: "Fly Perth → Narita (ANA)", emoji: "✈️", category: "flight", location: "Perth Airport T1", mapUrl: "https://maps.google.com/?q=Perth+Airport+T1", mapProvider: "google", bookingRef: "ANA", cost: 1688.60, currency: "AUD", notes: "Seats 28H & 28J · 9h 40m flight · Arrive 08:15+1" },
    ],
  },

  /* ──── Day 1 — Tokyo ──── */
  {
    date: "2026-03-30",
    dayNumber: 1,
    city: "Tokyo",
    country: "Japan",
    events: [
      { id: "e1-1", time: "08:15", title: "Arrive at Narita Airport", emoji: "✈️", category: "flight", location: "Narita International Airport T1", mapUrl: "https://maps.google.com/?q=Narita+Airport+Terminal+1", mapProvider: "google", notes: "Clear immigration & customs, pick up pocket WiFi" },
      { id: "e1-2", time: "09:25", title: "Limousine Bus → TCAT Station", emoji: "🚌", category: "transport", location: "Narita Airport Platform 10", mapUrl: "https://maps.google.com/?q=Narita+Airport+Limousine+Bus", mapProvider: "google", bookingRef: "BNH891344", cost: 57.10, currency: "AUD", notes: "Seats 2A & 2B · Klook booking · Arrives 10:45" },
      { id: "e1-3", time: "10:55", title: "Drop bags at Hamacho Hotel", emoji: "🧳", category: "accommodation", location: "Hamacho Hotel Tokyo", mapUrl: "https://maps.google.com/?q=Hamacho+Hotel+Tokyo", mapProvider: "google", bookingRef: "5190.398.601", notes: "Check-in from 15:00, but luggage storage available" },
      { id: "e1-4", time: "11:30", title: "Ueno Park & Shinobazu Pond", emoji: "🌸", category: "culture", location: "Ueno Park", mapUrl: "https://maps.google.com/?q=Ueno+Park+Tokyo", mapProvider: "google", notes: "Cherry blossom season — Shinobazu Pond & temple walk" },
      { id: "e1-5", time: "12:30", title: "Lunch at Ameyoko Market", emoji: "🍜", category: "food", location: "Ameyoko Market, Ueno", mapUrl: "https://maps.google.com/?q=Ameyoko+Market+Ueno", mapProvider: "google", notes: "Street food — fresh seafood, tamagoyaki, grilled skewers" },
      { id: "e1-6", time: "13:30", title: "Yanaka Old Town stroll", emoji: "🏘️", category: "culture", location: "Yanaka, Tokyo", mapUrl: "https://maps.google.com/?q=Yanaka+Ginza+Tokyo", mapProvider: "google", notes: "Traditional shitamachi neighbourhood — Yanaka Ginza shopping street, Yanaka Cemetery cherry blossoms" },
      { id: "e1-7", time: "14:30", title: "Coffee break at Kayaba Coffee", emoji: "☕", category: "food", location: "Kayaba Coffee, Yanaka", mapUrl: "https://maps.google.com/?q=Kayaba+Coffee+Yanaka", mapProvider: "google", notes: "Historic 1938 coffee house" },
      { id: "e1-8", time: "15:00", title: "Check in to Hamacho Hotel", emoji: "🏨", category: "accommodation", location: "Hamacho Hotel Tokyo", mapUrl: "https://maps.google.com/?q=Hamacho+Hotel+Tokyo", mapProvider: "google", bookingRef: "5190.398.601", notes: "PIN 2905 · Semi-Double room" },
      { id: "e1-9", time: "17:45", title: "Head to Marunouchi", emoji: "🚇", category: "transport", location: "Marunouchi, Tokyo", mapUrl: "https://maps.google.com/?q=Marunouchi+Tokyo+Station", mapProvider: "google", notes: "Tokyo Station's brick facade is beautiful at twilight" },
      { id: "e1-10", time: "18:30", title: "Dinner at THE UPPER", emoji: "🍽️", category: "food", location: "THE UPPER, Marunouchi", mapUrl: "https://maps.google.com/?q=THE+UPPER+Marunouchi+Tokyo", mapProvider: "google", bookingRef: "ETEZ69", cost: 13600, currency: "JPY", notes: "DINNER COURSE · 4 courses · ¥6,800 × 2" },
      { id: "e1-11", time: "20:30", title: "Evening stroll — Tokyo Station illumination", emoji: "🌃", category: "culture", location: "Tokyo Station, Marunouchi", mapUrl: "https://maps.google.com/?q=Tokyo+Station+Marunouchi", mapProvider: "google" },
      { id: "e1-12", time: "21:00", title: "Return to hotel", emoji: "🏨", category: "accommodation", location: "Hamacho Hotel Tokyo", mapUrl: "https://maps.google.com/?q=Hamacho+Hotel+Tokyo", mapProvider: "google" },
    ],
  },

  /* ──── Day 2 — Tokyo (Chiikawa Day!) ──── */
  {
    date: "2026-03-31",
    dayNumber: 2,
    city: "Tokyo",
    country: "Japan",
    events: [
      { id: "e2-1", time: "08:00", title: "Breakfast at Ningyocho", emoji: "☕", category: "food", location: "Ningyocho, Tokyo", mapUrl: "https://maps.google.com/?q=Ningyocho+Tokyo", mapProvider: "google", notes: "10-min walk from hotel — try a kissaten morning set at Morishita or grab taiyaki from Ningyocho's famous street stalls" },
      { id: "e2-2", time: "09:15", title: "Head to Ikebukuro", emoji: "🚇", category: "transport", location: "Hamacho → Ikebukuro", mapUrl: "https://maps.google.com/?q=Ikebukuro+Station", mapProvider: "google", notes: "~30 min via Metro" },
      { id: "e2-3", time: "10:00", title: "Chiikawa Park", emoji: "🧸", category: "experience", location: "Sunshine City Annex B1F–1F, Ikebukuro", mapUrl: "https://maps.google.com/maps?q=35.729924,139.717445", mapProvider: "google", bookingRef: "162804RT5786", notes: "Klook voucher · Must arrive by 10:20 · Cashless only (no cash accepted) · No lockers — travel light!" },
      { id: "e2-4", time: "11:30", title: "Explore Sunshine City & Ikebukuro", emoji: "🛍️", category: "shopping", location: "Sunshine City, Ikebukuro", mapUrl: "https://maps.google.com/?q=Sunshine+City+Ikebukuro", mapProvider: "google", notes: "Pokémon Center Mega Tokyo, Gachapon machines, and character shops are all in Sunshine City" },
      { id: "e2-5", time: "12:30", title: "Lunch in Ikebukuro", emoji: "🍜", category: "food", location: "Ikebukuro", mapUrl: "https://maps.google.com/?q=Ikebukuro+Ramen+Street", mapProvider: "google", notes: "Ikebukuro has amazing ramen — try Fuunji (tsukemen) near the station, or explore the department store food halls" },
      { id: "e2-6", time: "13:30", title: "Head to Harajuku", emoji: "🚇", category: "transport", location: "Ikebukuro → Harajuku", mapUrl: "https://maps.google.com/?q=Harajuku+Station", mapProvider: "google", notes: "~20 min via JR Yamanote Line" },
      { id: "e2-7", time: "14:00", title: "Explore Takeshita Street & Omotesando", emoji: "🛍️", category: "culture", location: "Harajuku", mapUrl: "https://maps.google.com/?q=Takeshita+Street+Harajuku", mapProvider: "google", notes: "Browse before your bakery slot — Takeshita Street for pop culture, Omotesando for upscale boutiques" },
      { id: "e2-8", time: "14:30", title: "Chiikawa Bakery", emoji: "🍞", category: "experience", location: "Tokyu Plaza Omotesando Harajuku 3F", mapUrl: "https://maps.google.com/?q=Tokyu+Plaza+Omotesando+Harajuku", mapProvider: "google", bookingRef: "CKM695900", notes: "Klook voucher 271747 · 1 hour self-guided · Includes ¥1,000 shopping voucher each · Bread & merchandise" },
      { id: "e2-9", time: "16:00", title: "Meiji Shrine afternoon walk", emoji: "⛩️", category: "culture", location: "Meiji Shrine, Harajuku", mapUrl: "https://maps.google.com/?q=Meiji+Shrine+Tokyo", mapProvider: "google", notes: "5-min walk from Tokyu Plaza — peaceful forested shrine grounds, beautiful in late afternoon light" },
      { id: "e2-10", time: "17:30", title: "Head to Shibuya", emoji: "🚶", category: "transport", location: "Harajuku → Shibuya", mapUrl: "https://maps.google.com/?q=Shibuya+Crossing", mapProvider: "google", notes: "15-min walk through Cat Street to Shibuya" },
      { id: "e2-11", time: "18:00", title: "Dinner in Shibuya", emoji: "🍱", category: "food", location: "Shibuya", mapUrl: "https://maps.google.com/?q=Shibuya+Nonbei+Yokocho", mapProvider: "google", notes: "Try Nonbei Yokocho (Drunkard's Alley) for tiny atmospheric izakayas, or Shibuya Yokocho food hall for a mix of regional cuisines" },
      { id: "e2-12", time: "20:00", title: "Karaoke at Karaoke Kan Shibuya", emoji: "🎤", category: "experience", location: "Karaoke Kan, Shibuya", mapUrl: "https://maps.google.com/?q=Karaoke+Kan+Shibuya", mapProvider: "google", notes: "Famous from Lost in Translation — private rooms with city views · English song selection available · No booking needed, walk in" },
      { id: "e2-13", time: "22:00", title: "Return to hotel", emoji: "🏨", category: "accommodation", location: "Hamacho Hotel Tokyo", mapUrl: "https://maps.google.com/?q=Hamacho+Hotel+Tokyo", mapProvider: "google" },
    ],
  },

  /* ──── Day 3 — Tokyo (Tsukishima · Kiyosumi · Ghost in the Shell) ──── */
  {
    date: "2026-04-01",
    dayNumber: 3,
    city: "Tokyo",
    country: "Japan",
    events: [
      { id: "e3-1", time: "08:30", title: "Walk to Tsukishima", emoji: "🚶", category: "transport", location: "Hamacho → Tsukishima", mapUrl: "https://maps.google.com/?q=Tsukishima+Monja+Street+Tokyo", mapProvider: "google", notes: "10-min walk across the Sumida River — enjoy the riverside path and bridge views" },
      { id: "e3-2", time: "09:00", title: "Monjayaki brunch on Monja Street", emoji: "🥘", category: "food", location: "Tsukishima Monja Street", mapUrl: "https://maps.google.com/?q=Tsukishima+Monja+Street", mapProvider: "google", notes: "Tokyo's local speciality — a runnier, gooier cousin of okonomiyaki. Over 70 monjayaki shops on this one street. Try Moheji or Tsukishima Komachi for first-timers — staff will cook it for you" },
      { id: "e3-3", time: "10:15", title: "Walk to Kiyosumi-Shirakawa", emoji: "🚶", category: "transport", location: "Tsukishima → Kiyosumi", mapUrl: "https://maps.google.com/?q=Kiyosumi+Shirakawa+Tokyo", mapProvider: "google", notes: "15-min walk north through quiet residential streets" },
      { id: "e3-4", time: "10:30", title: "Coffee at Iki Espresso", emoji: "☕", category: "food", location: "Iki Espresso, Kiyosumi-Shirakawa", mapUrl: "https://maps.google.com/?q=iki+ESPRESSO+Kiyosumi", mapProvider: "google", notes: "Kiyosumi is Tokyo's 'Coffee Town' — Iki is a beloved Aussie-Japanese roaster in a converted warehouse. Flat whites done right" },
      { id: "e3-5", time: "11:00", title: "Kiyosumi Garden", emoji: "🌿", category: "culture", location: "Kiyosumi Garden, Koto-ku", mapUrl: "https://maps.google.com/?q=Kiyosumi+Garden+Tokyo", mapProvider: "google", cost: 300, currency: "JPY", notes: "Meiji-era strolling garden — stepping stones across the pond, turtles, a teahouse, and gorgeous spring foliage. Far fewer visitors than the big-name parks" },
      { id: "e3-6", time: "11:45", title: "Browse Kiyosumi gallery streets", emoji: "🎨", category: "culture", location: "Kiyosumi-Shirakawa", mapUrl: "https://maps.google.com/?q=Kiyosumi+Shirakawa+galleries", mapProvider: "google", notes: "Small independent galleries and craft shops dot the backstreets — very local art scene" },
      { id: "e3-7", time: "12:15", title: "Head to Toranomon Hills", emoji: "🚇", category: "transport", location: "Kiyosumi-Shirakawa → Toranomon", mapUrl: "https://maps.google.com/?q=Toranomon+Hills+Station+Tower", mapProvider: "google", notes: "~20 min via Oedo Line to Daimon, then Hibiya Line one stop to Toranomon Hills" },
      { id: "e3-8", time: "13:00", title: "Ghost in the Shell Exhibition", emoji: "🤖", category: "experience", location: "Tokyo Node Gallery A/B/C, 45F Toranomon Hills", mapUrl: "https://maps.google.com/?q=TOKYO+NODE+Toranomon+Hills", mapProvider: "google", cost: 5600, currency: "JPY", bookingRef: "LivePocket 1008057501", notes: "2× Merchandise Tickets with 1995 film replica bonus · Collect film replicas at venue · No re-entry · 1,600+ items inc. original drawings, storyboards & immersive installations · Allow 2–3 hours · Wed hours: 12:00–21:00, last entry 20:30" },
      { id: "e3-9", time: "16:00", title: "Toranomon Hills Sky Garden & views", emoji: "🌆", category: "culture", location: "Toranomon Hills, Minato-ku", mapUrl: "https://maps.google.com/?q=Toranomon+Hills", mapProvider: "google", notes: "Explore the building's upper floors — great views over Tokyo" },
      { id: "e3-10", time: "17:00", title: "Walk to Shimbashi for dinner", emoji: "🚶", category: "transport", location: "Toranomon → Shimbashi", mapUrl: "https://maps.google.com/?q=Shimbashi+Station+Tokyo", mapProvider: "google", notes: "10-min walk — Shimbashi is the salaryman district, packed with no-frills izakayas under the train tracks" },
      { id: "e3-11", time: "17:30", title: "Dinner at Shimbashi Yokocho", emoji: "🍢", category: "food", location: "Shimbashi, Tokyo", mapUrl: "https://maps.google.com/?q=Shimbashi+Yokocho+Tokyo", mapProvider: "google", notes: "Smoky yakitori alleys under the railway arches — pick a busy spot with locals and grab a beer and some skewers. Very authentic, zero tourists" },
      { id: "e3-12", time: "19:30", title: "Return to hotel", emoji: "🏨", category: "accommodation", location: "Hamacho Hotel Tokyo", mapUrl: "https://maps.google.com/?q=Hamacho+Hotel+Tokyo", mapProvider: "google", notes: "Early night to rest up — you've been going non-stop since Day 1!" },
    ],
  },

  /* ──── Day 4 — Yokohama ──── */
  {
    date: "2026-04-02",
    dayNumber: 4,
    city: "Yokohama",
    country: "Japan",
    events: [
      { id: "e4-1", time: "08:00", title: "Check out of Hamacho Hotel", emoji: "🧳", category: "accommodation", location: "Hamacho Hotel Tokyo", mapUrl: "https://maps.google.com/?q=Hamacho+Hotel+Tokyo", mapProvider: "google" },
      { id: "e4-2", time: "09:00", title: "Train Tokyo → Yokohama", emoji: "🚅", category: "transport", location: "Tokyo Station", mapUrl: "https://maps.google.com/?q=Tokyo+Station", mapProvider: "google", cost: 12, currency: "AUD", notes: "~30 min to Yokohama" },
      { id: "e4-3", time: "09:45", title: "Drop bags at The Gate Hotel Yokohama", emoji: "🏨", category: "accommodation", location: "Naka-ku Yamashitacho 11-3, Yokohama", mapUrl: "https://maps.google.com/?q=The+Gate+Hotel+Yokohama+by+Hulic", mapProvider: "google", bookingRef: "6448.033.688", notes: "Early luggage drop · Check-in from 14:00 · Hotel is steps from Chinatown" },
      { id: "e4-4", time: "10:15", title: "Yokohama Red Brick Warehouse", emoji: "🧱", category: "culture", location: "Yokohama Red Brick Warehouse, Shinko", mapUrl: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse", mapProvider: "google", notes: "Bldg 1: cultural events · Bldg 2: shops & restaurants · 15 min walk from hotel along the waterfront" },
      { id: "e4-5", time: "11:30", title: "Chiikawa Yaki", emoji: "🍡", category: "experience", location: "Yokohama World Porters 1F, Minato Mirai", mapUrl: "https://maps.google.com/?q=Yokohama+World+Porters", mapProvider: "google", notes: "Advance reservation required (lottery/first-come-first-served) · Right next to Red Brick Warehouse" },
      { id: "e4-6", time: "12:30", title: "Lunch at Yokohama Chinatown", emoji: "🥟", category: "food", location: "Yokohama Chinatown", mapUrl: "https://maps.google.com/?q=Yokohama+Chinatown", mapProvider: "google", notes: "Try yaki shoronpo (pan-fried soup dumplings) · Wangfujing is famous for dumplings · Toki for noodles (cash only)" },
      { id: "e4-7", time: "14:00", title: "Check in & freshen up", emoji: "🏨", category: "accommodation", location: "The Gate Hotel Yokohama", mapUrl: "https://maps.google.com/?q=The+Gate+Hotel+Yokohama+by+Hulic", mapProvider: "google", notes: "Standard Double · Non-smoking · PIN 0967" },
      { id: "e4-8", time: "14:45", title: "Bus to Sankeien Garden", emoji: "🌸", category: "culture", location: "58-1 Honmokusannotani, Naka-ku, Yokohama", mapUrl: "https://maps.google.com/?q=Sankeien+Garden+Yokohama", mapProvider: "google", cost: 700, currency: "JPY", notes: "Cherry blossoms at peak early April · 250 trees, 9 varieties · Bus #8 from Yokohama Stn (~20 min) · Golden hour light is perfect for photos" },
      { id: "e4-9", time: "17:00", title: "Bus back to central Yokohama", emoji: "🚌", category: "transport", location: "Sankeien Garden bus stop", mapUrl: "https://maps.google.com/?q=Sankeien+Garden+Yokohama", mapProvider: "google", notes: "~20 min back to waterfront area" },
      { id: "e4-10", time: "17:30", title: "Yamashita Park sunset stroll", emoji: "🌅", category: "experience", location: "Yamashita Park, Yokohama", mapUrl: "https://maps.google.com/?q=Yamashita+Park+Yokohama", mapProvider: "google", notes: "Seaside park right next to the hotel · Views of Yokohama Bay Bridge · Hikawa Maru ship" },
      { id: "e4-11", time: "18:30", title: "Chinatown evening & dinner", emoji: "🥡", category: "food", location: "Yokohama Chinatown", mapUrl: "https://maps.google.com/?q=Yokohama+Chinatown", mapProvider: "google", notes: "Chinatown is gorgeous lit up at night · Jukeihanten for Peking duck (English menu) or Keitokuchin for Sichuan · 5 min walk back to hotel" },
    ],
  },

  /* ──── Day 5 — Yokohama ──── */
  {
    date: "2026-04-03",
    dayNumber: 5,
    city: "Yokohama",
    country: "Japan",
    events: [
      { id: "e5-1", time: "08:30", title: "Breakfast & morning walk", emoji: "☕", category: "food", location: "Yokohama Chinatown / Yamashita Park area", mapUrl: "https://maps.google.com/?q=Yamashita+Park+Yokohama", mapProvider: "google", notes: "Grab breakfast nearby · Relaxed morning before heading to Shin-Yokohama" },
      { id: "e5-2", time: "10:15", title: "Train to Shin-Yokohama", emoji: "🚅", category: "transport", location: "Motomachi-Chukagai Station", mapUrl: "https://maps.google.com/?q=Motomachi-Chukagai+Station", mapProvider: "google", notes: "~25 min via Minatomirai Line → Shin-Yokohama" },
      { id: "e5-3", time: "11:00", title: "Shin-Yokohama Ramen Museum", emoji: "🍜", category: "food", location: "2-14-21 Shin-Yokohama, Kohoku-ku", mapUrl: "https://maps.google.com/?q=Shin-Yokohama+Ramen+Museum", mapProvider: "google", cost: 380, currency: "JPY", notes: "Opens 11:00 weekdays · Entry ¥380 · Recreated 1958 Tokyo streetscape with ramen shops from across Japan · 3 min walk from station" },
      { id: "e5-4", time: "13:00", title: "Train back to central Yokohama", emoji: "🚅", category: "transport", location: "Shin-Yokohama Station", mapUrl: "https://maps.google.com/?q=Shin-Yokohama+Station", mapProvider: "google", notes: "~25 min back to hotel area" },
      { id: "e5-5", time: "13:30", title: "Free time / rest at hotel", emoji: "☕", category: "accommodation", location: "The Gate Hotel Yokohama", mapUrl: "https://maps.google.com/?q=The+Gate+Hotel+Yokohama+by+Hulic", mapProvider: "google", notes: "Freshen up before the game · Explore any Chinatown shops you missed" },
      { id: "e5-6", time: "15:00", title: "Train to Tokyo Dome", emoji: "🚅", category: "transport", location: "Yokohama Station → Suidobashi Station", mapUrl: "https://maps.google.com/?q=Tokyo+Dome", mapProvider: "google", notes: "~50 min · JR Keihin-Tohoku line to Suidobashi, then 5 min walk" },
      { id: "e5-7", time: "16:00", title: "Gates open — Giants vs DeNA", emoji: "⚾", category: "experience", location: "Tokyo Dome, Bunkyo-ku, Tokyo", mapUrl: "https://maps.google.com/?q=Tokyo+Dome", mapProvider: "google", cost: 9000, currency: "JPY", bookingRef: "580 088 8490", notes: "Designated Seat B · 3rd base side 1F · Gate 24, Aisle 45, Block B47 · Row 43, Seats 443-444 · Grab stadium food & a beer!" },
      { id: "e5-8", time: "18:00", title: "First pitch!", emoji: "⚾", category: "experience", location: "Tokyo Dome", mapUrl: "https://maps.google.com/?q=Tokyo+Dome", mapProvider: "google", notes: "Giants vs DeNA BayStars · JERA Central League · Game ~3 hours" },
      { id: "e5-9", time: "21:30", title: "Train back to Yokohama", emoji: "🚅", category: "transport", location: "Suidobashi Station → Yokohama", mapUrl: "https://maps.google.com/?q=Suidobashi+Station", mapProvider: "google", notes: "~50 min · Last trains run until ~midnight · Back at hotel by 22:30" },
    ],
  },

  /* ──── Day 6 — Osaka ──── */
  {
    date: "2026-04-04",
    dayNumber: 6,
    city: "Osaka",
    country: "Japan",
    events: [
      { id: "e6-1", time: "07:30", title: "Check out of Gate Hotel Yokohama", emoji: "🧳", category: "accommodation", location: "The Gate Hotel Yokohama by Hulic", mapUrl: "https://maps.google.com/?q=The+Gate+Hotel+Yokohama+by+Hulic", mapProvider: "google", notes: "Check-out by 11:00 · Head to Shin-Yokohama for Shinkansen" },
      { id: "e6-2", time: "09:05", title: "Shinkansen Shin-Yokohama → Shin-Osaka", emoji: "🚅", category: "transport", location: "Shin-Yokohama Station", mapUrl: "https://maps.google.com/?q=Shin-Yokohama+Station", mapProvider: "google", cost: 288, currency: "AUD", notes: "~2h 7m · Arrive ~11:12" },
      { id: "e6-3", time: "11:30", title: "Drop bags at Hotel Keihan Tenmabashi", emoji: "🏨", category: "accommodation", location: "Chuo-ku Tenmabashikyomatchi 2-13, Osaka", mapUrl: "https://maps.google.com/?q=Hotel+Keihan+Tenmabashi+Ekimae+Osaka", mapProvider: "google", bookingRef: "5487.876.335", notes: "Early luggage drop · Check-in from 15:00 · Double Room Non-Smoking · PIN 1468 · 5 min walk from Osaka Castle" },
      { id: "e6-4", time: "12:00", title: "Osaka Castle Park & gardens", emoji: "🏯", category: "culture", location: "Osaka Castle Park, Chuo-ku", mapUrl: "https://maps.google.com/?q=Osaka+Castle+Park", mapProvider: "google", notes: "Cherry blossoms in Nishinomaru Garden (¥200 entry) · Castle tower ¥600 · Beautiful moats and stone walls · Hotel is a 5 min walk from the park" },
      { id: "e6-5", time: "14:30", title: "Train to Osaka Bay / Tempozan", emoji: "🚅", category: "transport", location: "Tanimachi 4-Chome → Osakako Station", mapUrl: "https://maps.google.com/?q=Osakako+Station+Osaka", mapProvider: "google", notes: "~25 min via Chuo Line · Direct line, no transfers" },
      { id: "e6-6", time: "16:00", title: "Osaka Aquarium Kaiyukan", emoji: "🐠", category: "experience", location: "1-1-10 Kaigandori, Minato-ku, Osaka", mapUrl: "https://maps.google.com/?q=Osaka+Aquarium+Kaiyukan", mapProvider: "google", cost: 5800, currency: "JPY", bookingRef: "00290-2026-0329-8100-2030-0004", notes: "E-tickets · Entry window 16:00–16:15 · 2× adult tickets · Show QR codes at entry · Allow ~2.5 hrs · World's largest aquarium with whale sharks" },
      { id: "e6-7", time: "18:30", title: "Dinner at Naniwa Kuishinbo Yokocho", emoji: "🍢", category: "food", location: "Tempozan Marketplace 2F, 1-1-10 Kaigandori", mapUrl: "https://maps.google.com/?q=Naniwa+Kuishinbo+Yokocho+Tempozan", mapProvider: "google", notes: "Retro food hall styled like 1960s Osaka · ~20 stalls with all the Osaka classics: takoyaki, okonomiyaki, kushikatsu · Right next to the aquarium" },
      { id: "e6-8", time: "20:00", title: "Train back to Tenmabashi & check in", emoji: "🚅", category: "transport", location: "Osakako → Tanimachi 4-Chome", mapUrl: "https://maps.google.com/?q=Hotel+Keihan+Tenmabashi+Ekimae+Osaka", mapProvider: "google", notes: "~25 min back · Settle into the hotel for the evening" },
    ],
  },

  /* ──── Day 7 — Osaka ──── */
  {
    date: "2026-04-05",
    dayNumber: 7,
    city: "Osaka",
    country: "Japan",
    events: [
      { id: "e7-1", time: "08:30", title: "Train to Namaze Station", emoji: "🚅", category: "transport", location: "Tenmabashi → Osaka Station → Namaze", mapUrl: "https://maps.google.com/?q=Namaze+Station+Hyogo", mapProvider: "google", notes: "Tanimachi Line to Higashi-Umeda (~5 min) · Walk to Osaka Station · JR Fukuchiyama Line to Namaze (~35 min) · No transfers on JR leg" },
      { id: "e7-2", time: "09:30", title: "Takedao Abandoned Railway Hike", emoji: "🥾", category: "experience", location: "Namaze Station → Takedao Station, Hyogo", mapUrl: "https://maps.google.com/?q=Namaze+Station+Hyogo+Japan", mapProvider: "google", notes: "5 km along old JR Fukuchiyama Line · ~3 hrs at easy pace · Bring a torch for the tunnels (some are pitch black) · Mostly flat · Cherry blossoms along the river · Ends at Takedao Station" },
      { id: "e7-3", time: "12:30", title: "Train back to Osaka", emoji: "🚅", category: "transport", location: "Takedao Station → Osaka Station", mapUrl: "https://maps.google.com/?q=Takedao+Station+Hyogo", mapProvider: "google", notes: "JR Fukuchiyama Line back · ~40 min" },
      { id: "e7-4", time: "13:30", title: "Lunch & free afternoon", emoji: "☕", category: "food", location: "Tenmabashi / Osaka area", mapUrl: "https://maps.google.com/?q=Hotel+Keihan+Tenmabashi+Ekimae+Osaka", mapProvider: "google", notes: "Rest up after the hike · Explore Tenmabashi area · Kemutaiya does great charcoal-grilled wagyu from ¥390 a plate" },
      { id: "e7-5", time: "18:00", title: "Train to Nagai Station", emoji: "🚅", category: "transport", location: "Tanimachi 4-Chome → Nagai (Midosuji Line)", mapUrl: "https://maps.google.com/?q=Nagai+Station+Osaka", mapProvider: "google", notes: "~20 min via Midosuji Subway Line · 800m walk east from Exit 3 to the garden" },
      { id: "e7-6", time: "19:00", title: "teamLab Botanical Garden Osaka", emoji: "🎨", category: "experience", location: "1-23 Nagai Koen, Higashisumiyoshi-ku, Osaka", mapUrl: "https://maps.google.com/?q=teamLab+Botanical+Garden+Osaka", mapProvider: "google", cost: 36.50, currency: "AUD", bookingRef: "RUM240973", notes: "Klook e-voucher · 2× adult · Entry from 19:00 · Open 18:45–21:30, last admission 20:30 · No re-entry · No flash photography or tripods · Dark & uneven surfaces — wear good shoes" },
      { id: "e7-7", time: "21:00", title: "Train back to Tenmabashi", emoji: "🚅", category: "transport", location: "Nagai → Tanimachi 4-Chome", mapUrl: "https://maps.google.com/?q=Hotel+Keihan+Tenmabashi+Ekimae+Osaka", mapProvider: "google", notes: "~20 min back to hotel" },
    ],
  },

  /* ──── Day 8 — Kobe ──── */
  {
    date: "2026-04-06",
    dayNumber: 8,
    city: "Kobe",
    country: "Japan",
    events: [
      { id: "e8-1", time: "07:00", title: "Check out of Hotel Keihan", emoji: "🧳", category: "accommodation", location: "Hotel Keihan Tenmabashi Ekimae", mapUrl: "https://maps.google.com/?q=Hotel+Keihan+Tenmabashi+Ekimae+Osaka", mapProvider: "google", notes: "Early start for Himeji" },
      { id: "e8-2", time: "07:30", title: "JR Special Rapid Osaka → Himeji", emoji: "🚅", category: "transport", location: "Osaka Station", mapUrl: "https://maps.google.com/?q=Osaka+Station", mapProvider: "google", notes: "JR Special Rapid (Shinkaisoku) · ~1 hr direct · Store bags in coin lockers at Himeji Station" },
      { id: "e8-3", time: "09:00", title: "Himeji Castle", emoji: "🏯", category: "culture", location: "68 Honmachi, Himeji, Hyogo", mapUrl: "https://maps.google.com/?q=Himeji+Castle", mapProvider: "google", cost: 5200, currency: "JPY", bookingRef: "Y24Q2JTT", notes: "Combo ticket with Kokoen Garden · 2× adult · Show QR/e-ticket · ~15 min walk from station along Otemae-dori · Allow 1.5–2 hrs for the castle" },
      { id: "e8-4", time: "11:00", title: "Kokoen Garden", emoji: "🌿", category: "culture", location: "Kokoen Garden, Himeji", mapUrl: "https://maps.google.com/?q=Kokoen+Garden+Himeji", mapProvider: "google", notes: "Included in combo ticket · 9 themed gardens · Koi ponds, tea house · 45–60 min · Right next to the castle" },
      { id: "e8-5", time: "12:00", title: "Lunch on Miyuki-dori", emoji: "🍢", category: "food", location: "Miyuki-dori Shopping Street, Himeji", mapUrl: "https://maps.google.com/?q=Miyuki-dori+Himeji", mapProvider: "google", notes: "Main street between station and castle · Try Himeji oden (simmered in ginger soy broth) — local specialty" },
      { id: "e8-6", time: "13:00", title: "Train Himeji → Kobe", emoji: "🚅", category: "transport", location: "Himeji Station", mapUrl: "https://maps.google.com/?q=Himeji+Station", mapProvider: "google", notes: "JR Special Rapid · ~40 min to Sannomiya · Collect bags from lockers before boarding" },
      { id: "e8-7", time: "14:00", title: "Arrive Kobe & explore Sannomiya", emoji: "🚶", category: "experience", location: "Sannomiya Station, Kobe", mapUrl: "https://maps.google.com/?q=Sannomiya+Station+Kobe", mapProvider: "google", notes: "Browse the area around the hotel · Kobe Chinatown (Nankinmachi) is a 5 min walk" },
      { id: "e8-8", time: "15:00", title: "Check in at Candeo Hotels Kobe", emoji: "🏨", category: "accommodation", location: "Chuo-ku Sannomiya-cho 3-8-8, Kobe", mapUrl: "https://maps.google.com/?q=Candeo+Hotels+Kobe+Tor+Road", mapProvider: "google", bookingRef: "5457.357.265", notes: "Queen Room Non-Smoking · PIN 7334 · Freshen up before brewery tour" },
      { id: "e8-9", time: "16:15", title: "Train to Mikage (for brewery)", emoji: "🚅", category: "transport", location: "Sannomiya → Mikage Station", mapUrl: "https://maps.google.com/?q=Mikage+Station+Kobe", mapProvider: "google", notes: "~15 min by JR · Brewery is 10 min walk south from station" },
      { id: "e8-10", time: "17:00", title: "Fukuju Brewery Tour — Toumyougura", emoji: "🍶", category: "experience", location: "1-8-17 Mikagetsukamachi, Higashinada-ku, Kobe", mapUrl: "https://maps.google.com/?q=Fukuju+Brewery+Toumyougura+Kobe", mapProvider: "google", cost: 9000, currency: "JPY", notes: "Guided Tour (English) · 2 guests · ¥4,500/person pay at shop · Go to the shop (building on right after wooden gate) · Premium sake tasting + traditional souvenir · Tax-free for purchases over ¥5,500 (bring passport)" },
      { id: "e8-11", time: "19:00", title: "Dinner in Kobe", emoji: "🥩", category: "food", location: "Kobe", mapUrl: "https://maps.google.com/?q=Sannomiya+Kobe+restaurants", mapProvider: "google", notes: "Perfect night for Kobe beef! Tor Road area has great options within walking distance of the hotel" },
    ],
  },

  /* ──── Day 9 — Fukuyama ──── */
  {
    date: "2026-04-07",
    dayNumber: 9,
    city: "Fukuyama",
    country: "Japan",
    events: [
      { id: "e9-1", time: "10:00", title: "Check out of Candeo Hotels Kobe", emoji: "🧳", category: "accommodation", location: "Candeo Hotels Kobe Tor Road", mapUrl: "https://maps.google.com/?q=Candeo+Hotels+Kobe+Tor+Road", mapProvider: "google", notes: "Relaxed morning in Kobe · Head to Shin-Kobe Station" },
      { id: "e9-2", time: "11:15", title: "Shinkansen Shin-Kobe → Fukuyama", emoji: "🚅", category: "transport", location: "Shin-Kobe Station", mapUrl: "https://maps.google.com/?q=Shin-Kobe+Station", mapProvider: "google", cost: 154, currency: "AUD", notes: "Nozomi 17 · Car 5, Seats 18-A & 18-B · Oversized baggage area · 48 min · Arrive 12:03 · JR-WEST Res #40241 · Receipt ADL0489M · Collect tickets at station with credit card + PIN" },
      { id: "e9-3", time: "12:15", title: "Bus to Tomonoura", emoji: "🚌", category: "transport", location: "Fukuyama Station (South Exit, Bus Stop 11)", mapUrl: "https://maps.google.com/?q=Fukuyama+Station", mapProvider: "google", notes: "Tomotetsu Bus bound for Tomonoura · ~30 min · ¥530" },
      { id: "e9-4", time: "13:00", title: "Check in at Tomonoura Shiomachi Hotel", emoji: "🏨", category: "accommodation", location: "Tomonoura Shiomachi Hotel", mapUrl: "https://maps.google.com/?q=Tomonoura+Shiomachi+Hotel+Fukuyama", mapProvider: "google", notes: "Courtyard room · 2 nights · Beautiful boutique hotel in the historic port" },
      { id: "e9-5", time: "12:30", title: "Lunch — sea bream at Tai-tei", emoji: "🐟", category: "food", location: "Tai-tei, west coast of Tomonoura", mapUrl: "https://maps.google.com/?q=Tai-tei+Tomonoura", mapProvider: "google", notes: "Famous for tai-meshi (sea bream rice) · Tomonoura's signature dish · Often in guidebooks" },
      { id: "e9-6", time: "14:00", title: "Harbour walk & Ponyo spots", emoji: "⛵", category: "culture", location: "Tomonoura Harbour", mapUrl: "https://maps.google.com/?q=Tomonoura+Harbour", mapProvider: "google", notes: "Joyato stone lighthouse (Edo period, gorgeous at golden hour) · Stone gangi steps and hato landing platforms · Sandy cove where Sosuke meets Ponyo · The harbour feels like an open-air museum" },
      { id: "e9-7", time: "15:30", title: "Onfunayado Iroha", emoji: "🏡", category: "culture", location: "Onfunayado Iroha, Tomonoura", mapUrl: "https://maps.google.com/?q=Onfunayado+Iroha+Tomonoura", mapProvider: "google", notes: "220-year-old traditional house renovated with design by Miyazaki himself · Stained glass windows designed by the director · A must-see Ponyo connection" },
      { id: "e9-8", time: "16:30", title: "Golden hour at the harbour", emoji: "🌅", category: "experience", location: "Tomonoura Harbour", mapUrl: "https://maps.google.com/?q=Tomonoura+Harbour", mapProvider: "google", notes: "The Joyato lighthouse and harbour are at their most photogenic in late afternoon light · Views of Bentenjima island across the water" },
      { id: "e9-9", time: "18:30", title: "Dinner — Chitose sea bream", emoji: "🍣", category: "food", location: "Chitose, Tomonoura", mapUrl: "https://maps.google.com/?q=Chitose+Tomonoura", mapProvider: "google", notes: "Sea bream prepared four ways: tempura, sashimi, nitsuke (simmered in soy sauce), shioyaki (salt-grilled) · A local institution" },
    ],
  },

  /* ──── Day 10 — Fukuyama ──── */
  {
    date: "2026-04-08",
    dayNumber: 10,
    city: "Fukuyama",
    country: "Japan",
    events: [
      { id: "e10-1", time: "08:30", title: "Breakfast & morning at the hotel", emoji: "☕", category: "food", location: "Tomonoura Shiomachi Hotel", mapUrl: "https://maps.google.com/?q=Tomonoura+Shiomachi+Hotel+Fukuyama", mapProvider: "google", notes: "Enjoy the courtyard and the slow pace of Tomonoura mornings" },
      { id: "e10-2", time: "09:30", title: "Temple trail — Ioji Temple", emoji: "⛩️", category: "culture", location: "Ioji Temple, Tomonoura", mapUrl: "https://maps.google.com/?q=Ioji+Temple+Tomonoura", mapProvider: "google", notes: "Shingon Buddhist temple perched on a steep hillside · Beautiful stone and earthen walls with tiled roofs · 15 min climb up to Taishiden hall for the best panoramic views of the bay" },
      { id: "e10-3", time: "10:30", title: "Fukuzenji Temple & Taichoro view", emoji: "⛩️", category: "culture", location: "Fukuzenji Temple, Tomonoura", mapUrl: "https://maps.google.com/?q=Fukuzenji+Temple+Tomonoura", mapProvider: "google", notes: "Founded 950 AD · Perched on stone castle-like foundations overlooking the sea · The Taichoro hall has the most famous view in Tomonoura — Korean diplomats called it the most beautiful in Japan · Resembles the old people's home from Ponyo" },
      { id: "e10-4", time: "11:15", title: "Wander the backstreets", emoji: "🚶", category: "culture", location: "Tomonoura old town", mapUrl: "https://maps.google.com/?q=Tomonoura+old+town", mapProvider: "google", notes: "Narrow lanes lined with wooden buildings 100+ years old · Cobblestone roads · Cafes in converted old Japanese houses · Preserved Edo-era buildings at every turn · Spot the red-roofed house that inspired Sosuke's home" },
      { id: "e10-5", time: "12:30", title: "Lunch — Kinugasa kappo", emoji: "🐟", category: "food", location: "Kinugasa, Tomonoura", mapUrl: "https://maps.google.com/?q=Kinugasa+Tomonoura", mapProvider: "google", notes: "Kappo-style restaurant run by a fish wholesaler family since 1989 · Fresh seafood purchased directly from Tomonoura fishermen · Set meals and donburi" },
      { id: "e10-6", time: "14:00", title: "Ferry to Sensuijima Island", emoji: "⛴️", category: "experience", location: "Tomonoura ferry terminal → Sensuijima", mapUrl: "https://maps.google.com/?q=Sensuijima+Island+Tomonoura", mapProvider: "google", notes: "5 min ferry ride · Crystal clear water, dramatic rock formations · Lush vegetation · The landscape is considered legendary · Peaceful walks along the shore" },
      { id: "e10-7", time: "16:00", title: "Ferry back & Nunakuma Shrine", emoji: "⛩️", category: "culture", location: "Nunakuma Shrine, Tomonoura", mapUrl: "https://maps.google.com/?q=Nunakuma+Shrine+Tomonoura", mapProvider: "google", notes: "Two shrines dedicated to sea deities · Features an old noh stage · Peaceful spot near the harbour" },
      { id: "e10-8", time: "17:00", title: "Last light at the harbour", emoji: "🌅", category: "experience", location: "Tomonoura Harbour", mapUrl: "https://maps.google.com/?q=Tomonoura+Harbour", mapProvider: "google", notes: "Final evening in this magical port town · The Seto Inland Sea sunset is unforgettable" },
      { id: "e10-9", time: "18:30", title: "Dinner — hotel neighbourhood spot", emoji: "🍽️", category: "food", location: "Tomonoura", mapUrl: "https://maps.google.com/?q=Tomonoura+Shiomachi+Hotel+Fukuyama", mapProvider: "google", notes: "The hotel recommends several neighbourhood restaurants · Try local Setouchi specialties: buttu (flathead), nebuto (cardinalfish), or dried debera (flounder)" },
    ],
  },

  /* ──── Day 11 — Seoul ──── */
  {
    date: "2026-04-09",
    dayNumber: 11,
    city: "Seoul",
    country: "South Korea",
    events: [
      { id: "e11-1", time: "08:30", title: "Check out of Tomonoura Shiomachi", emoji: "🧳", category: "accommodation", location: "Tomonoura Shiomachi Hotel", mapUrl: "https://maps.google.com/?q=Tomonoura+Shiomachi+Hotel+Fukuyama", mapProvider: "google", notes: "Last morning in Tomonoura · Bus back to Fukuyama Station (~30 min)" },
      { id: "e11-2", time: "09:30", title: "Bus to Fukuyama Station", emoji: "🚌", category: "transport", location: "Tomonoura → Fukuyama Station", mapUrl: "https://maps.google.com/?q=Fukuyama+Station", mapProvider: "google", notes: "Tomotetsu Bus · ~30 min · Arrive with time to collect JR-WEST tickets" },
      { id: "e11-3", time: "10:30", title: "Collect JR-WEST tickets at Fukuyama", emoji: "🎫", category: "transport", location: "Fukuyama Station ticket office", mapUrl: "https://maps.google.com/?q=Fukuyama+Station", mapProvider: "google", notes: "Use credit card (****5919) + 4-digit PIN at ticket machine · Reservation #43318 · Receipt ADL0513M · Need physical card, not virtual" },
      { id: "e11-4", time: "11:41", title: "Nozomi 20 Fukuyama → Shin-Osaka", emoji: "🚅", category: "transport", location: "Fukuyama Station", mapUrl: "https://maps.google.com/?q=Fukuyama+Station", mapProvider: "google", notes: "Car 14, Seats 1-D & 1-E · Oversized baggage area · Arrive 12:43" },
      { id: "e11-5", time: "12:58", title: "Haruka 27 Shin-Osaka → Kansai Airport", emoji: "🚅", category: "transport", location: "Shin-Osaka Station", mapUrl: "https://maps.google.com/?q=Shin-Osaka+Station", mapProvider: "google", cost: 224, currency: "AUD", notes: "15 min transfer at Shin-Osaka · Car 4, Seats 1-C & 1-D · Arrive Kansai Airport 13:50" },
      { id: "e11-6", time: "14:00", title: "Kansai Airport — check in & airside", emoji: "✈️", category: "flight", location: "Kansai International Airport T2", mapUrl: "https://maps.google.com/?q=Kansai+International+Airport", mapProvider: "google", notes: "Jeju Air check-in at T2 · Checked baggage 20kg each · Carry-on + personal item max 10kg combined" },
      { id: "e11-7", time: "16:30", title: "Fly Kansai → Seoul (Gimpo)", emoji: "✈️", category: "flight", location: "Kansai International Airport T2", mapUrl: "https://maps.google.com/?q=Kansai+International+Airport", mapProvider: "google", cost: 505, currency: "AUD", notes: "Jeju Air 7C1328 · Ref VH9VXX · 1h 55m · Arrive Gimpo Airport 18:25 · E-tickets: 180-7464683929 & 180-7464683928" },
      { id: "e11-8", time: "18:25", title: "Arrive Gimpo Airport, Seoul", emoji: "🛬", category: "flight", location: "Gimpo International Airport", mapUrl: "https://map.naver.com/v5/search/Gimpo+Airport", mapProvider: "naver", notes: "Gimpo is much closer to central Seoul than Incheon · Immigration + baggage ~30 min" },
      { id: "e11-9", time: "19:00", title: "Subway to Myeongdong", emoji: "🚇", category: "transport", location: "Gimpo Airport Station → Chungmuro Station", mapUrl: "https://map.naver.com/v5/search/Chungmuro+Station+Seoul", mapProvider: "naver", notes: "~40 min · Airport Railroad (AREX) to Hongdae, transfer to Line 4 to Chungmuro · Or taxi ~30 min" },
      { id: "e11-10", time: "20:00", title: "Check in to Homes Stay Myeongdong", emoji: "🏨", category: "accommodation", location: "3 Chungmu-ro, Jung-gu, Seoul", mapUrl: "https://map.naver.com/v5/search/Homes+Stay+Myeongdong", mapProvider: "naver", bookingRef: "5891.883.973", notes: "Kiosk self-check-in (1F) · PIN 2172 · Standard Double Non-Smoking · Luggage storage at B2F · Washing machine in room · Netflix available · 3 nights" },
    ],
  },

  /* ──── Day 12 — Seoul ──── */
  {
    date: "2026-04-10",
    dayNumber: 12,
    city: "Seoul",
    country: "South Korea",
    events: [
      { id: "e12-1", time: "09:00", title: "Explore Seoul", emoji: "🏙️", category: "culture", location: "Seoul", mapUrl: "https://map.naver.com/v5/search/Seoul", mapProvider: "naver", notes: "Free day — details TBC" },
    ],
  },

  /* ──── Day 13 — Seoul ──── */
  {
    date: "2026-04-11",
    dayNumber: 13,
    city: "Seoul",
    country: "South Korea",
    events: [
      { id: "e13-1", time: "08:00", title: "DMZ Tour (half day)", emoji: "🔭", category: "experience", location: "DMZ", mapUrl: "https://map.naver.com/v5/search/DMZ+Tour", mapProvider: "naver", notes: "Bring passport — required for entry" },
    ],
  },

  /* ──── Day 14 — Jeonju ──── */
  {
    date: "2026-04-12",
    dayNumber: 14,
    city: "Jeonju",
    country: "South Korea",
    events: [
      { id: "e14-1", time: "08:30", title: "Check out of Homes Stay Myeongdong", emoji: "🧳", category: "accommodation", location: "Homes Stay Myeongdong, Seoul", mapUrl: "https://map.naver.com/v5/search/Homes+Stay+Myeongdong", mapProvider: "naver" },
      { id: "e14-2", time: "12:08", title: "Train Seoul → Jeonju", emoji: "🚅", category: "transport", location: "Seoul Station", mapUrl: "https://map.naver.com/v5/search/Seoul+Station", mapProvider: "naver", cost: 122, currency: "AUD", notes: "1h 53m · Arrive 14:01" },
      { id: "e14-3", time: "15:00", title: "Check in to Present Stay", emoji: "🏨", category: "accommodation", location: "Present Stay, Jeonju", mapUrl: "https://map.naver.com/v5/search/Present+Stay+Jeonju", mapProvider: "naver", notes: "One-Bedroom Villa · 2 nights" },
    ],
  },

  /* ──── Day 15 — Jeonju ──── */
  {
    date: "2026-04-13",
    dayNumber: 15,
    city: "Jeonju",
    country: "South Korea",
    events: [
      { id: "e15-1", time: "09:00", title: "Explore Jeonju Hanok Village", emoji: "🏘️", category: "culture", location: "Jeonju Hanok Village", mapUrl: "https://map.naver.com/v5/search/Jeonju+Hanok+Village", mapProvider: "naver", notes: "Free day — details TBC" },
    ],
  },

  /* ──── Day 16 — Gyeongju ──── */
  {
    date: "2026-04-14",
    dayNumber: 16,
    city: "Gyeongju",
    country: "South Korea",
    events: [
      { id: "e16-1", time: "08:30", title: "Check out of Present Stay", emoji: "🧳", category: "accommodation", location: "Present Stay, Jeonju", mapUrl: "https://map.naver.com/v5/search/Present+Stay+Jeonju", mapProvider: "naver" },
      { id: "e16-2", time: "09:11", title: "Train Jeonju → Osong", emoji: "🚅", category: "transport", location: "Jeonju Station", mapUrl: "https://map.naver.com/v5/search/Jeonju+Station", mapProvider: "naver", cost: 41.50, currency: "AUD", notes: "49 min · Arrive 10:01" },
      { id: "e16-3", time: "10:16", title: "Train Osong → Gyeongju", emoji: "🚅", category: "transport", location: "Osong Station", mapUrl: "https://map.naver.com/v5/search/Osong+Station", mapProvider: "naver", cost: 41.50, currency: "AUD", notes: "1h 24m · Arrive 11:40" },
      { id: "e16-4", time: "12:00", title: "Check in to Gyeongju City Hotel", emoji: "🏨", category: "accommodation", location: "Gyeongju City Hotel", mapUrl: "https://map.naver.com/v5/search/Gyeongju+City+Hotel", mapProvider: "naver", notes: "Standard Double · 2 nights" },
    ],
  },

  /* ──── Day 17 — Gyeongju ──── */
  {
    date: "2026-04-15",
    dayNumber: 17,
    city: "Gyeongju",
    country: "South Korea",
    events: [
      { id: "e17-1", time: "09:00", title: "Explore Gyeongju historic sites", emoji: "🏛️", category: "culture", location: "Gyeongju", mapUrl: "https://map.naver.com/v5/search/Gyeongju", mapProvider: "naver", notes: "Free day — details TBC" },
    ],
  },

  /* ──── Day 18 — Busan ──── */
  {
    date: "2026-04-16",
    dayNumber: 18,
    city: "Busan",
    country: "South Korea",
    events: [
      { id: "e18-1", time: "08:30", title: "Check out of Gyeongju City Hotel", emoji: "🧳", category: "accommodation", location: "Gyeongju City Hotel", mapUrl: "https://map.naver.com/v5/search/Gyeongju+City+Hotel", mapProvider: "naver" },
      { id: "e18-2", time: "09:52", title: "Train Gyeongju → Busan", emoji: "🚅", category: "transport", location: "Gyeongju Station", mapUrl: "https://map.naver.com/v5/search/Gyeongju+Station", mapProvider: "naver", cost: 52, currency: "AUD", notes: "34 min · Arrive 10:26" },
      { id: "e18-3", time: "17:00", title: "Check in to Cozy Tree Hotel", emoji: "🏨", category: "accommodation", location: "Cozy Tree Hotel Seomyeon, Busan", mapUrl: "https://map.naver.com/v5/search/Cozy+Tree+Hotel+Seomyeon+Busan", mapProvider: "naver", notes: "Check-in from 17:00 · Premier Suite · 2 nights" },
    ],
  },

  /* ──── Day 19 — Busan ──── */
  {
    date: "2026-04-17",
    dayNumber: 19,
    city: "Busan",
    country: "South Korea",
    events: [
      { id: "e19-1", time: "09:00", title: "Explore Busan", emoji: "🏖️", category: "culture", location: "Busan", mapUrl: "https://map.naver.com/v5/search/Busan", mapProvider: "naver", notes: "Free day — details TBC" },
    ],
  },

  /* ──── Day 20 — Narita ──── */
  {
    date: "2026-04-18",
    dayNumber: 20,
    city: "Narita",
    country: "Japan",
    events: [
      { id: "e20-1", time: "08:30", title: "Check out of Cozy Tree Hotel", emoji: "🧳", category: "accommodation", location: "Cozy Tree Hotel Seomyeon, Busan", mapUrl: "https://map.naver.com/v5/search/Cozy+Tree+Hotel+Seomyeon+Busan", mapProvider: "naver" },
      { id: "e20-2", time: "16:00", title: "Fly Busan → Narita", emoji: "✈️", category: "flight", location: "Busan Airport T1", mapUrl: "https://map.naver.com/v5/search/Gimhae+Airport+Busan", mapProvider: "naver", cost: 505, currency: "AUD", notes: "2h 15m · Seats 40B & 40C · Arrive 18:15" },
      { id: "e20-3", time: "19:00", title: "Check in to MYSTAYS Premier Narita", emoji: "🏨", category: "accommodation", location: "Hotel MYSTAYS Premier Narita", mapUrl: "https://maps.google.com/?q=Hotel+MYSTAYS+Premier+Narita", mapProvider: "google", notes: "Comfort Double · 1 night" },
    ],
  },

  /* ──── Day 21 — Home ──── */
  {
    date: "2026-04-19",
    dayNumber: 21,
    city: "Narita → Perth",
    country: "Japan",
    events: [
      { id: "e21-1", time: "08:00", title: "Check out & head to Narita Airport", emoji: "🧳", category: "transport", location: "Hotel MYSTAYS Premier Narita", mapUrl: "https://maps.google.com/?q=Hotel+MYSTAYS+Premier+Narita", mapProvider: "google" },
      { id: "e21-2", time: "10:55", title: "Fly Narita → Perth (ANA)", emoji: "✈️", category: "flight", location: "Narita Airport T1", mapUrl: "https://maps.google.com/?q=Narita+Airport+Terminal+1", mapProvider: "google", cost: 1527.75, currency: "AUD", notes: "Seats 34F & 34G · 10h 5m · Arrive 20:00" },
      { id: "e21-3", time: "20:00", title: "Arrive Perth — Welcome home!", emoji: "🏠", category: "flight", location: "Perth Airport T1", mapUrl: "https://maps.google.com/?q=Perth+Airport+T1", mapProvider: "google" },
    ],
  },
];

/* ═══════════════════════════════════════════════════
   Bookings
   ═══════════════════════════════════════════════════ */
export const bookings: Booking[] = [
  /* ── Flights ── */
  { id: "b1", type: "flight", title: "Perth → Narita (ANA)", emoji: "✈️", provider: "ANA", status: "confirmed", paymentStatus: "paid", departureTime: "2026-03-29T21:35", arrivalTime: "2026-03-30T08:15", from: "Perth (PER) T1", to: "Narita (NRT) T1", city: "Tokyo", country: "Japan", cost: 1688.60, currency: "AUD", notes: "Seats 28H & 28J · 9h 40m" },
  { id: "b2", type: "flight", title: "Kansai → Seoul (Gimpo)", emoji: "✈️", provider: "Jeju Air", confirmationNumber: "VH9VXX", status: "confirmed", paymentStatus: "paid", departureTime: "2026-04-09T16:30", arrivalTime: "2026-04-09T18:25", from: "Kansai (KIX) T2", to: "Seoul (GMP)", city: "Seoul", country: "South Korea", cost: 505, currency: "AUD", notes: "Jeju Air 7C1328 · 1h 55m · E-tickets: 180-7464683929 & 180-7464683928" },
  { id: "b3", type: "flight", title: "Busan → Narita (Korean Air)", emoji: "✈️", provider: "Korean Air", confirmationNumber: "VH9VXX", status: "confirmed", paymentStatus: "paid", departureTime: "2026-04-18T16:00", arrivalTime: "2026-04-18T18:15", from: "Busan (PUS) T1", to: "Narita (NRT) T1", city: "Narita", country: "Japan", cost: 505, currency: "AUD", notes: "Korean Air KE2131 · 2h 15m · Seats 40B & 40C" },
  { id: "b4", type: "flight", title: "Narita → Perth (ANA)", emoji: "✈️", provider: "ANA", status: "confirmed", paymentStatus: "paid", departureTime: "2026-04-19T10:55", arrivalTime: "2026-04-19T20:00", from: "Narita (NRT) T1", to: "Perth (PER) T1", city: "Perth", country: "Japan", cost: 1527.75, currency: "AUD", notes: "Seats 34F & 34G · 10h 5m" },

  /* ── Accommodation — Japan ── */
  { id: "b5", type: "accommodation", title: "Hamacho Hotel Tokyo", emoji: "🏨", provider: "Booking.com", confirmationNumber: "5190.398.601", status: "confirmed", paymentStatus: "unpaid", checkIn: "2026-03-30", checkOut: "2026-04-02", location: "Nihonbashi-Hamacho, Tokyo", city: "Tokyo", country: "Japan", cost: 940, currency: "AUD", mapUrl: "https://maps.google.com/?q=Hamacho+Hotel+Tokyo", mapProvider: "google", notes: "Semi-Double · PIN 2905 · 3 nights" },
  { id: "b6", type: "accommodation", title: "The Gate Hotel Yokohama by Hulic", emoji: "🏨", provider: "Booking.com", confirmationNumber: "6448.033.688", status: "confirmed", paymentStatus: "unpaid", checkIn: "2026-04-02", checkOut: "2026-04-04", location: "Naka-ku Yamashitacho 11-3, Yokohama", city: "Yokohama", country: "Japan", cost: 392, currency: "AUD", mapUrl: "https://maps.google.com/?q=The+Gate+Hotel+Yokohama+by+Hulic", mapProvider: "google", notes: "Standard Double Non-Smoking · PIN 0967 · 2 nights" },
  { id: "b7", type: "accommodation", title: "Hotel Keihan Tenmabashi Ekimae", emoji: "🏨", provider: "Booking.com", confirmationNumber: "5487.876.335", status: "confirmed", paymentStatus: "unpaid", checkIn: "2026-04-04", checkOut: "2026-04-06", location: "Chuo-ku Tenmabashikyomatchi 2-13, Osaka", city: "Osaka", country: "Japan", cost: 433, currency: "AUD", mapUrl: "https://maps.google.com/?q=Hotel+Keihan+Tenmabashi+Ekimae+Osaka", mapProvider: "google", notes: "Double Room Non-Smoking · PIN 1468 · 2 nights · 5 min walk from Osaka Castle" },
  { id: "b8", type: "accommodation", title: "Candeo Hotels Kobe Tor Road", emoji: "🏨", provider: "Booking.com", confirmationNumber: "5457.357.265", status: "confirmed", paymentStatus: "unpaid", checkIn: "2026-04-06", checkOut: "2026-04-07", location: "Chuo-ku Sannomiya-cho 3-8-8, Kobe", city: "Kobe", country: "Japan", cost: 141, currency: "AUD", mapUrl: "https://maps.google.com/?q=Candeo+Hotels+Kobe+Tor+Road", mapProvider: "google", notes: "Queen Room Non-Smoking · PIN 7334 · 1 night" },
  { id: "b9", type: "accommodation", title: "Tomonoura Shiomachi Hotel", emoji: "🏨", provider: "Booking.com", status: "confirmed", paymentStatus: "unpaid", checkIn: "2026-04-07", checkOut: "2026-04-09", location: "Tomonoura, Fukuyama", city: "Fukuyama", country: "Japan", cost: 900, currency: "AUD", mapUrl: "https://maps.google.com/?q=Tomonoura+Shiomachi+Hotel+Fukuyama", mapProvider: "google", notes: "Courtyard room · 2 nights" },
  { id: "b10", type: "accommodation", title: "Hotel MYSTAYS Premier Narita", emoji: "🏨", provider: "Booking.com", status: "confirmed", paymentStatus: "unpaid", checkIn: "2026-04-18", checkOut: "2026-04-19", location: "Narita", city: "Narita", country: "Japan", cost: 132, currency: "AUD", mapUrl: "https://maps.google.com/?q=Hotel+MYSTAYS+Premier+Narita", mapProvider: "google", notes: "Comfort Double · 1 night" },

  /* ── Accommodation — South Korea ── */
  { id: "b11", type: "accommodation", title: "Homes Stay Myeongdong", emoji: "🏨", provider: "Booking.com", confirmationNumber: "5891.883.973", status: "confirmed", paymentStatus: "unpaid", checkIn: "2026-04-09", checkOut: "2026-04-12", location: "3 Chungmu-ro, Jung-gu, Seoul", city: "Seoul", country: "South Korea", cost: 588, currency: "AUD", mapUrl: "https://map.naver.com/v5/search/Homes+Stay+Myeongdong", mapProvider: "naver", notes: "Standard Double Non-Smoking · PIN 2172 · 3 nights · Kiosk self-check-in (1F) · Luggage storage B2F · Washing machine in room" },
  { id: "b12", type: "accommodation", title: "Present Stay", emoji: "🏡", provider: "Booking.com", status: "confirmed", paymentStatus: "unpaid", checkIn: "2026-04-12", checkOut: "2026-04-14", location: "Jeonju", city: "Jeonju", country: "South Korea", cost: 880, currency: "AUD", mapUrl: "https://map.naver.com/v5/search/Present+Stay+Jeonju", mapProvider: "naver", notes: "One-Bedroom Villa · 2 nights" },
  { id: "b13", type: "accommodation", title: "Gyeongju City Hotel", emoji: "🏨", provider: "Booking.com", status: "confirmed", paymentStatus: "unpaid", checkIn: "2026-04-14", checkOut: "2026-04-16", location: "Gyeongju", city: "Gyeongju", country: "South Korea", cost: 240, currency: "AUD", mapUrl: "https://map.naver.com/v5/search/Gyeongju+City+Hotel", mapProvider: "naver", notes: "Standard Double · 2 nights" },
  { id: "b14", type: "accommodation", title: "Cozy Tree Hotel Seomyeon", emoji: "🏨", provider: "Booking.com", status: "confirmed", paymentStatus: "unpaid", checkIn: "2026-04-16", checkOut: "2026-04-18", location: "Seomyeon, Busan", city: "Busan", country: "South Korea", cost: 270, currency: "AUD", mapUrl: "https://map.naver.com/v5/search/Cozy+Tree+Hotel+Seomyeon+Busan", mapProvider: "naver", notes: "Premier Suite · 2 nights · Check-in 17:00" },

  /* ── Transport ── */
  { id: "b15", type: "transport", title: "Limousine Bus: Narita → TCAT", emoji: "🚌", provider: "Klook", confirmationNumber: "BNH891344", status: "confirmed", paymentStatus: "paid", departureTime: "2026-03-30T09:25", arrivalTime: "2026-03-30T10:45", from: "Narita Airport Platform 10", to: "TCAT Station", city: "Tokyo", country: "Japan", cost: 57.10, currency: "AUD", notes: "Seats 2A & 2B" },
  { id: "b16", type: "transport", title: "Train: Tokyo → Yokohama", emoji: "🚅", status: "confirmed", paymentStatus: "unpaid", departureTime: "2026-04-02T09:06", arrivalTime: "2026-04-02T09:32", from: "Tokyo", to: "Yokohama", city: "Yokohama", country: "Japan", cost: 12, currency: "AUD", notes: "26 min" },
  { id: "b17", type: "transport", title: "Train: Yokohama → Osaka", emoji: "🚅", status: "confirmed", paymentStatus: "unpaid", departureTime: "2026-04-04T09:05", arrivalTime: "2026-04-04T11:12", from: "Yokohama", to: "Osaka", city: "Osaka", country: "Japan", cost: 288, currency: "AUD", notes: "2h 7m" },
  { id: "b18", type: "transport", title: "Train: Osaka → Himeji", emoji: "🚅", status: "confirmed", paymentStatus: "unpaid", departureTime: "2026-04-06T07:30", arrivalTime: "2026-04-06T08:30", from: "Osaka", to: "Himeji", city: "Himeji", country: "Japan", cost: 22, currency: "AUD", notes: "JR Special Rapid · ~1 hr" },
  { id: "b18b", type: "transport", title: "Train: Himeji → Kobe", emoji: "🚅", status: "pending", paymentStatus: "unpaid", departureTime: "2026-04-06T13:00", arrivalTime: "2026-04-06T13:40", from: "Himeji", to: "Kobe (Sannomiya)", city: "Kobe", country: "Japan", cost: 15, currency: "AUD", notes: "JR Special Rapid · ~40 min · Not yet booked" },
  { id: "b19", type: "transport", title: "Train: Shin-Kobe → Fukuyama", emoji: "🚅", provider: "JR-WEST", confirmationNumber: "40241", status: "confirmed", paymentStatus: "paid", departureTime: "2026-04-07T11:15", arrivalTime: "2026-04-07T12:03", from: "Shin-Kobe", to: "Fukuyama", city: "Fukuyama", country: "Japan", cost: 16000, currency: "JPY", notes: "Nozomi 17 · Car 5, Seats 18-A & 18-B · 48 min · Receipt ADL0489M · ¥8,000 × 2 adults" },
  { id: "b20", type: "transport", title: "Train: Fukuyama → Kansai Airport", emoji: "🚅", provider: "JR-WEST", confirmationNumber: "43318", status: "confirmed", paymentStatus: "paid", departureTime: "2026-04-09T11:41", arrivalTime: "2026-04-09T13:50", from: "Fukuyama", to: "Kansai Airport", city: "Osaka", country: "Japan", cost: 22360, currency: "JPY", notes: "Nozomi 20 Fukuyama→Shin-Osaka (Car 14, 1-D & 1-E) + Haruka 27 Shin-Osaka→Kansai (Car 4, 1-C & 1-D) · Receipt ADL0513M · ¥11,180 × 2 adults" },
  { id: "b21", type: "transport", title: "Train: Seoul → Jeonju", emoji: "🚅", status: "confirmed", paymentStatus: "unpaid", departureTime: "2026-04-12T12:08", arrivalTime: "2026-04-12T14:01", from: "Seoul", to: "Jeonju", city: "Jeonju", country: "South Korea", cost: 122, currency: "AUD", notes: "1h 53m" },
  { id: "b22", type: "transport", title: "Train: Jeonju → Osong", emoji: "🚅", status: "confirmed", paymentStatus: "unpaid", departureTime: "2026-04-14T09:11", arrivalTime: "2026-04-14T10:01", from: "Jeonju", to: "Osong", city: "Gyeongju", country: "South Korea", cost: 41.50, currency: "AUD", notes: "49 min · First leg of transfer" },
  { id: "b23", type: "transport", title: "Train: Osong → Gyeongju", emoji: "🚅", status: "confirmed", paymentStatus: "unpaid", departureTime: "2026-04-14T10:16", arrivalTime: "2026-04-14T11:40", from: "Osong", to: "Gyeongju", city: "Gyeongju", country: "South Korea", cost: 41.50, currency: "AUD", notes: "1h 24m · Second leg of transfer" },
  { id: "b24", type: "transport", title: "Train: Gyeongju → Busan", emoji: "🚅", status: "confirmed", paymentStatus: "unpaid", departureTime: "2026-04-16T09:52", arrivalTime: "2026-04-16T10:26", from: "Gyeongju", to: "Busan", city: "Busan", country: "South Korea", cost: 52, currency: "AUD", notes: "34 min" },

  /* ── Experiences ── */
  { id: "b25", type: "experience", title: "THE UPPER Dinner", emoji: "🍽️", provider: "THE UPPER", confirmationNumber: "ETEZ69", status: "confirmed", paymentStatus: "unpaid", city: "Tokyo", country: "Japan", cost: 13600, currency: "JPY", location: "Marunouchi, Tokyo", notes: "DINNER COURSE · 4 courses · ¥6,800 × 2" },
  { id: "b26", type: "experience", title: "Chiikawa Park", emoji: "🧸", provider: "Klook", confirmationNumber: "162804RT5786", status: "confirmed", paymentStatus: "paid", city: "Tokyo", country: "Japan", cost: 0, currency: "JPY", location: "Sunshine City Annex, Ikebukuro", notes: "Order HYW733379 · 10:00 entry · Must arrive by 10:20 · Cashless only" },
  { id: "b27", type: "experience", title: "Chiikawa Bakery", emoji: "🍞", provider: "Klook", confirmationNumber: "CKM695900", status: "confirmed", paymentStatus: "paid", city: "Tokyo", country: "Japan", cost: 0, currency: "JPY", location: "Tokyu Plaza Omotesando Harajuku 3F", notes: "Voucher 271747 · 14:30 · 1hr self-guided · Includes ¥1,000 shopping voucher each" },
  { id: "b28", type: "experience", title: "Ghost in the Shell Exhibition", emoji: "🤖", provider: "LivePocket", confirmationNumber: "1008057501", status: "confirmed", paymentStatus: "paid", city: "Tokyo", country: "Japan", cost: 5600, currency: "JPY", location: "Tokyo Node Gallery A/B/C, 45F Toranomon Hills", notes: "2× Merchandise Tickets with 1995 film replica · Tickets: INMTERMWLIQUQAOFAPGM & INMTERMWBDSYH3MJZ8CL · Wed hours 12:00–21:00" },
  { id: "b29", type: "experience", title: "Osaka Aquarium Kaiyukan", emoji: "🐠", provider: "Webket", confirmationNumber: "00290-2026-0329-8100-2030-0004", status: "confirmed", paymentStatus: "paid", city: "Osaka", country: "Japan", cost: 5800, currency: "JPY", location: "1-1-10 Kaigandori, Minato-ku, Osaka", notes: "2× adult e-tickets · Entry window 16:00–16:15 · Show QR codes at gate" },
  { id: "b30", type: "experience", title: "teamLab Botanical Garden Osaka", emoji: "🎨", provider: "Klook", confirmationNumber: "RUM240973", status: "confirmed", paymentStatus: "paid", city: "Osaka", country: "Japan", cost: 36.50, currency: "AUD", location: "1-23 Nagai Koen, Higashisumiyoshi-ku, Osaka", notes: "2× adult admission · 5 Apr 19:00 · Voucher: KLb973f3c64e4b4f3383975d62925ea259edaed28ccfb8e40a83527ced4bc5686f · No cancellation/refund" },
  { id: "b31", type: "experience", title: "Himeji Castle + Kokoen Garden", emoji: "🏯", provider: "Shirasagi Ticket", confirmationNumber: "Y24Q2JTT", status: "confirmed", paymentStatus: "paid", city: "Himeji", country: "Japan", cost: 5200, currency: "JPY", location: "68 Honmachi, Himeji, Hyogo", notes: "2× adult combo ticket · Apr 6 09:00 entry · Show QR/e-ticket" },
  { id: "b32", type: "experience", title: "Fukuju Brewery Tour — Toumyougura", emoji: "🍶", status: "confirmed", paymentStatus: "unpaid", city: "Kobe", country: "Japan", cost: 9000, currency: "JPY", location: "1-8-17 Mikagetsukamachi, Higashinada-ku, Kobe", notes: "Guided Tour (English) · Apr 6 17:00 · 2 guests · ¥4,500/person pay at shop · Premium tasting + souvenir" },
  { id: "b33", type: "experience", title: "Giants vs DeNA — Tokyo Dome", emoji: "⚾", provider: "Etix", status: "confirmed", paymentStatus: "paid", city: "Tokyo", country: "Japan", cost: 9000, currency: "JPY", location: "Tokyo Dome, Bunkyo-ku", notes: "Designated Seat B 3rd base 1F · Gate 24 Aisle 45 Block B47 · Row 43 Seats 443–444 · 18:00 first pitch · 16:00 gates open · Serials 580 088 8490 & 580 088 8560" },
];

/* ═══════════════════════════════════════════════════
   Expenses
   ═══════════════════════════════════════════════════ */
export const expenses: Expense[] = [
  /* ── Flights ── */
  { id: "x1", date: "2026-03-29", title: "Flights — Perth → Narita (ANA)", category: "flight", amount: 1688.60, currency: "AUD", amountAUD: 1688.60, paid: true, bookingId: "b1" },
  { id: "x2", date: "2026-04-09", title: "Flights — Kansai → Seoul", category: "flight", amount: 505, currency: "AUD", amountAUD: 505, paid: true, bookingId: "b2" },
  { id: "x3", date: "2026-04-18", title: "Flights — Busan → Narita", category: "flight", amount: 505, currency: "AUD", amountAUD: 505, paid: true, bookingId: "b3" },
  { id: "x4", date: "2026-04-19", title: "Flights — Narita → Perth (ANA)", category: "flight", amount: 1527.75, currency: "AUD", amountAUD: 1527.75, paid: true, bookingId: "b4" },

  /* ── Accommodation — Japan ── */
  { id: "x5", date: "2026-03-30", title: "Hamacho Hotel Tokyo (3 nights)", category: "accommodation", amount: 940, currency: "AUD", amountAUD: 940, paid: false, bookingId: "b5" },
  { id: "x6", date: "2026-04-02", title: "Gate Hotel Yokohama (2 nights)", category: "accommodation", amount: 392, currency: "AUD", amountAUD: 392, paid: false, bookingId: "b6" },
  { id: "x7", date: "2026-04-04", title: "Hotel Keihan Osaka (2 nights)", category: "accommodation", amount: 433, currency: "AUD", amountAUD: 433, paid: false, bookingId: "b7" },
  { id: "x8", date: "2026-04-06", title: "Candeo Hotels Kobe (1 night)", category: "accommodation", amount: 141, currency: "AUD", amountAUD: 141, paid: false, bookingId: "b8" },
  { id: "x9", date: "2026-04-07", title: "Tomonoura Shiomachi Hotel (2 nights)", category: "accommodation", amount: 900, currency: "AUD", amountAUD: 900, paid: false, bookingId: "b9" },
  { id: "x10", date: "2026-04-18", title: "MYSTAYS Premier Narita (1 night)", category: "accommodation", amount: 132, currency: "AUD", amountAUD: 132, paid: false, bookingId: "b10" },

  /* ── Accommodation — South Korea ── */
  { id: "x11", date: "2026-04-09", title: "Homes Stay Myeongdong (3 nights)", category: "accommodation", amount: 588, currency: "AUD", amountAUD: 588, paid: false, bookingId: "b11" },
  { id: "x12", date: "2026-04-12", title: "Present Stay Jeonju (2 nights)", category: "accommodation", amount: 880, currency: "AUD", amountAUD: 880, paid: false, bookingId: "b12" },
  { id: "x13", date: "2026-04-14", title: "Gyeongju City Hotel (2 nights)", category: "accommodation", amount: 240, currency: "AUD", amountAUD: 240, paid: false, bookingId: "b13" },
  { id: "x14", date: "2026-04-16", title: "Cozy Tree Hotel Busan (2 nights)", category: "accommodation", amount: 270, currency: "AUD", amountAUD: 270, paid: false, bookingId: "b14" },

  /* ── Transport ── */
  { id: "x15", date: "2026-03-30", title: "Limousine Bus: Narita → TCAT", category: "transport", amount: 57.10, currency: "AUD", amountAUD: 57.10, paid: true, bookingId: "b15" },
  { id: "x16", date: "2026-04-02", title: "Train: Tokyo → Yokohama", category: "transport", amount: 12, currency: "AUD", amountAUD: 12, paid: false, bookingId: "b16" },
  { id: "x17", date: "2026-04-04", title: "Train: Yokohama → Osaka", category: "transport", amount: 288, currency: "AUD", amountAUD: 288, paid: false, bookingId: "b17" },
  { id: "x18", date: "2026-04-06", title: "Train: Osaka → Himeji", category: "transport", amount: 22, currency: "AUD", amountAUD: 22, paid: false, bookingId: "b18" },
  { id: "x18b", date: "2026-04-06", title: "Train: Himeji → Kobe", category: "transport", amount: 15, currency: "AUD", amountAUD: 15, paid: false, bookingId: "b18b" },
  { id: "x19", date: "2026-04-07", title: "Train: Shin-Kobe → Fukuyama", category: "transport", amount: 16000, currency: "JPY", amountAUD: 154, paid: true, bookingId: "b19" },
  { id: "x20", date: "2026-04-09", title: "Train: Fukuyama → Kansai Airport", category: "transport", amount: 22360, currency: "JPY", amountAUD: 215, paid: true, bookingId: "b20" },
  { id: "x21", date: "2026-04-12", title: "Train: Seoul → Jeonju", category: "transport", amount: 122, currency: "AUD", amountAUD: 122, paid: false, bookingId: "b21" },
  { id: "x22", date: "2026-04-14", title: "Train: Jeonju → Osong", category: "transport", amount: 41.50, currency: "AUD", amountAUD: 41.50, paid: false, bookingId: "b22" },
  { id: "x23", date: "2026-04-14", title: "Train: Osong → Gyeongju", category: "transport", amount: 41.50, currency: "AUD", amountAUD: 41.50, paid: false, bookingId: "b23" },
  { id: "x24", date: "2026-04-16", title: "Train: Gyeongju → Busan", category: "transport", amount: 52, currency: "AUD", amountAUD: 52, paid: false, bookingId: "b24" },

  /* ── Experiences ── */
  { id: "x25", date: "2026-03-30", title: "THE UPPER Dinner (2 pax)", category: "food", amount: 13600, currency: "JPY", amountAUD: 130, paid: false, bookingId: "b25" },
  { id: "x26", date: "2026-04-01", title: "Ghost in the Shell Exhibition (2 pax)", category: "experience", amount: 5600, currency: "JPY", amountAUD: 54, paid: true, bookingId: "b28" },

  /* ── Osaka Experiences ── */
  { id: "x27", date: "2026-04-04", title: "Osaka Aquarium Kaiyukan (2 pax)", category: "experience", amount: 5800, currency: "JPY", amountAUD: 56, paid: true, bookingId: "b29" },
  { id: "x28a", date: "2026-04-04", title: "Osaka Castle Nishinomaru Garden (2 pax)", category: "experience", amount: 400, currency: "JPY", amountAUD: 4, paid: false },

  /* ── Yokohama Experiences ── */
  { id: "x30", date: "2026-04-05", title: "teamLab Botanical Garden Osaka (2 pax)", category: "experience", amount: 36.50, currency: "AUD", amountAUD: 36.50, paid: true, bookingId: "b30" },
  { id: "x31", date: "2026-04-03", title: "Baseball — Giants vs DeNA (2 pax)", category: "experience", amount: 9000, currency: "JPY", amountAUD: 87, paid: true, bookingId: "b33" },
  { id: "x28", date: "2026-04-02", title: "Sankeien Garden (2 pax)", category: "experience", amount: 1400, currency: "JPY", amountAUD: 14, paid: false },
  { id: "x29", date: "2026-04-03", title: "Ramen Museum entry (2 pax)", category: "experience", amount: 760, currency: "JPY", amountAUD: 8, paid: false },

  /* ── Himeji & Kobe Experiences ── */
  { id: "x32", date: "2026-04-06", title: "Himeji Castle + Kokoen Garden (2 pax)", category: "experience", amount: 5200, currency: "JPY", amountAUD: 50, paid: true, bookingId: "b31" },
  { id: "x33", date: "2026-04-06", title: "Fukuju Brewery Tour (2 pax)", category: "experience", amount: 9000, currency: "JPY", amountAUD: 87, paid: false, bookingId: "b32" },
];

/* ═══════════════════════════════════════════════════
   Documents & Emergency Contacts
   ═══════════════════════════════════════════════════ */
export const documents: TravelDocument[] = [
  { id: "d1", type: "passport", title: "Elisha's Passport", emoji: "🛂", details: { "Full Name": "Elisha Newell", "Passport No.": "••••••••", "Expiry": "—", "Nationality": "Australian" } },
  { id: "d2", type: "passport", title: "Husband's Passport", emoji: "🛂", details: { "Full Name": "—", "Passport No.": "••••••••", "Expiry": "—", "Nationality": "Australian" } },
  { id: "d3", type: "insurance", title: "Travel Insurance", emoji: "🛡️", details: { "Provider": "—", "Policy No.": "—", "Emergency Line": "—", "Coverage": "Medical, baggage, cancellation" }, notes: "Keep a printed copy" },
  { id: "d4", type: "visa", title: "Japan Visa Waiver", emoji: "📄", details: { "Type": "Visa-free (90 days)", "Valid for": "Tourism", "Note": "Australian passport holders — no visa needed" } },
  { id: "d5", type: "visa", title: "South Korea Visa (K-ETA)", emoji: "📄", details: { "Type": "K-ETA", "Application": "—", "Status": "—", "Note": "Apply online before departure" } },
];

export const emergencyContacts: EmergencyContact[] = [
  { id: "ec1", name: "Australian Embassy Tokyo", relationship: "Embassy", phone: "+81-3-5232-4111", notes: "2-1-14 Mita, Minato-ku, Tokyo" },
  { id: "ec2", name: "Australian Embassy Seoul", relationship: "Embassy", phone: "+82-2-2003-0100", notes: "19th Floor, Kyobo Building, Jongno-gu" },
  { id: "ec3", name: "Japan Emergency", relationship: "Emergency", phone: "110 (Police) / 119 (Ambulance)", notes: "English may be limited — use Translation app" },
  { id: "ec4", name: "South Korea Emergency", relationship: "Emergency", phone: "112 (Police) / 119 (Ambulance)", notes: "1330 for Tourism helpline (English)" },
];

/* ═══════════════════════════════════════════════════
   Map Pins
   ═══════════════════════════════════════════════════ */
export const mapPins: MapPin[] = [
  /* Japan */
  { id: "m1", label: "Hamacho Hotel Tokyo", emoji: "🏨", city: "Tokyo", country: "Japan", lat: 35.6842, lng: 139.7862, mapUrl: "https://maps.google.com/?q=Hamacho+Hotel+Tokyo", mapProvider: "google", category: "accommodation" },
  { id: "m2", label: "Ueno Park", emoji: "🌸", city: "Tokyo", country: "Japan", lat: 35.7146, lng: 139.7734, mapUrl: "https://maps.google.com/?q=Ueno+Park+Tokyo", mapProvider: "google", category: "culture", dayNumber: 1 },
  { id: "m3", label: "THE UPPER", emoji: "🍽️", city: "Tokyo", country: "Japan", lat: 35.6812, lng: 139.7671, mapUrl: "https://maps.google.com/?q=THE+UPPER+Marunouchi+Tokyo", mapProvider: "google", category: "food", dayNumber: 1 },
  { id: "m4", label: "Gate Hotel Yokohama", emoji: "🏨", city: "Yokohama", country: "Japan", lat: 35.4437, lng: 139.6500, mapUrl: "https://maps.google.com/?q=The+Gate+Hotel+Yokohama+by+Hulic", mapProvider: "google", category: "accommodation" },
  { id: "m14", label: "Sankeien Garden", emoji: "🌸", city: "Yokohama", country: "Japan", lat: 35.4155, lng: 139.6617, mapUrl: "https://maps.google.com/?q=Sankeien+Garden+Yokohama", mapProvider: "google", category: "culture", dayNumber: 4 },
  { id: "m15", label: "Yokohama Chinatown", emoji: "🏮", city: "Yokohama", country: "Japan", lat: 35.4421, lng: 139.6453, mapUrl: "https://maps.google.com/?q=Yokohama+Chinatown", mapProvider: "google", category: "food", dayNumber: 4 },
  { id: "m16", label: "Red Brick Warehouse", emoji: "🧱", city: "Yokohama", country: "Japan", lat: 35.4533, lng: 139.6430, mapUrl: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse", mapProvider: "google", category: "shopping", dayNumber: 4 },
  { id: "m17", label: "Chiikawa Yaki (World Porters)", emoji: "🧸", city: "Yokohama", country: "Japan", lat: 35.4545, lng: 139.6396, mapUrl: "https://maps.google.com/?q=Yokohama+World+Porters", mapProvider: "google", category: "experience", dayNumber: 4 },
  { id: "m18", label: "Ramen Museum", emoji: "🍜", city: "Yokohama", country: "Japan", lat: 35.4747, lng: 139.6178, mapUrl: "https://maps.google.com/?q=Shin-Yokohama+Ramen+Museum", mapProvider: "google", category: "food", dayNumber: 5 },
  { id: "m19", label: "Yamashita Park", emoji: "🌳", city: "Yokohama", country: "Japan", lat: 35.4432, lng: 139.6520, mapUrl: "https://maps.google.com/?q=Yamashita+Park+Yokohama", mapProvider: "google", category: "culture", dayNumber: 5 },
  { id: "m20", label: "Tokyo Dome", emoji: "⚾", city: "Tokyo", country: "Japan", lat: 35.7056, lng: 139.7519, mapUrl: "https://maps.google.com/?q=Tokyo+Dome", mapProvider: "google", category: "experience", dayNumber: 5 },
  { id: "m5", label: "Hotel Keihan Osaka", emoji: "🏨", city: "Osaka", country: "Japan", lat: 34.6937, lng: 135.5148, mapUrl: "https://maps.google.com/?q=Hotel+Keihan+Tenmabashi+Ekimae+Osaka", mapProvider: "google", category: "accommodation" },
  { id: "m6", label: "Osaka Aquarium Kaiyukan", emoji: "🐠", city: "Osaka", country: "Japan", lat: 34.6545, lng: 135.4290, mapUrl: "https://maps.google.com/?q=Osaka+Aquarium+Kaiyukan", mapProvider: "google", category: "experience", dayNumber: 6 },
  { id: "m21", label: "Osaka Castle Park", emoji: "🏯", city: "Osaka", country: "Japan", lat: 34.6873, lng: 135.5262, mapUrl: "https://maps.google.com/?q=Osaka+Castle+Park", mapProvider: "google", category: "culture", dayNumber: 6 },
  { id: "m22", label: "Naniwa Kuishinbo Yokocho", emoji: "🍢", city: "Osaka", country: "Japan", lat: 34.6548, lng: 135.4285, mapUrl: "https://maps.google.com/?q=Naniwa+Kuishinbo+Yokocho+Tempozan", mapProvider: "google", category: "food", dayNumber: 6 },
  { id: "m23", label: "Namaze Station (Hike start)", emoji: "🥾", city: "Takarazuka", country: "Japan", lat: 34.8585, lng: 135.2893, mapUrl: "https://maps.google.com/?q=Namaze+Station+Hyogo", mapProvider: "google", category: "experience", dayNumber: 7 },
  { id: "m24", label: "Takedao Station (Hike end)", emoji: "🥾", city: "Takarazuka", country: "Japan", lat: 34.8778, lng: 135.2758, mapUrl: "https://maps.google.com/?q=Takedao+Station+Hyogo", mapProvider: "google", category: "experience", dayNumber: 7 },
  { id: "m25", label: "teamLab Botanical Garden", emoji: "🎨", city: "Osaka", country: "Japan", lat: 34.6132, lng: 135.5210, mapUrl: "https://maps.google.com/?q=teamLab+Botanical+Garden+Osaka", mapProvider: "google", category: "experience", dayNumber: 7 },
  { id: "m26", label: "Himeji Castle", emoji: "🏯", city: "Himeji", country: "Japan", lat: 34.8394, lng: 134.6939, mapUrl: "https://maps.google.com/?q=Himeji+Castle", mapProvider: "google", category: "culture", dayNumber: 8 },
  { id: "m27", label: "Kokoen Garden", emoji: "🌿", city: "Himeji", country: "Japan", lat: 34.8375, lng: 134.6900, mapUrl: "https://maps.google.com/?q=Kokoen+Garden+Himeji", mapProvider: "google", category: "culture", dayNumber: 8 },
  { id: "m28", label: "Fukuju Brewery Toumyougura", emoji: "🍶", city: "Kobe", country: "Japan", lat: 34.7152, lng: 135.2612, mapUrl: "https://maps.google.com/?q=Fukuju+Brewery+Toumyougura+Kobe", mapProvider: "google", category: "experience", dayNumber: 8 },
  { id: "m7", label: "Candeo Hotels Kobe", emoji: "🏨", city: "Kobe", country: "Japan", lat: 34.6914, lng: 135.1876, mapUrl: "https://maps.google.com/?q=Candeo+Hotels+Kobe+Tor+Road", mapProvider: "google", category: "accommodation" },
  { id: "m8", label: "Tomonoura Shiomachi Hotel", emoji: "🏨", city: "Fukuyama", country: "Japan", lat: 34.3833, lng: 133.3833, mapUrl: "https://maps.google.com/?q=Tomonoura+Shiomachi+Hotel+Fukuyama", mapProvider: "google", category: "accommodation" },
  { id: "m29", label: "Tomonoura Harbour & Joyato", emoji: "⛵", city: "Fukuyama", country: "Japan", lat: 34.3832, lng: 133.3852, mapUrl: "https://maps.google.com/?q=Tomonoura+Harbour", mapProvider: "google", category: "culture", dayNumber: 9 },
  { id: "m30", label: "Onfunayado Iroha (Miyazaki)", emoji: "🏡", city: "Fukuyama", country: "Japan", lat: 34.3827, lng: 133.3845, mapUrl: "https://maps.google.com/?q=Onfunayado+Iroha+Tomonoura", mapProvider: "google", category: "culture", dayNumber: 9 },
  { id: "m31", label: "Ioji Temple (viewpoint)", emoji: "⛩️", city: "Fukuyama", country: "Japan", lat: 34.3810, lng: 133.3820, mapUrl: "https://maps.google.com/?q=Ioji+Temple+Tomonoura", mapProvider: "google", category: "culture", dayNumber: 10 },
  { id: "m32", label: "Fukuzenji Temple (Taichoro)", emoji: "⛩️", city: "Fukuyama", country: "Japan", lat: 34.3830, lng: 133.3865, mapUrl: "https://maps.google.com/?q=Fukuzenji+Temple+Tomonoura", mapProvider: "google", category: "culture", dayNumber: 10 },
  { id: "m33", label: "Sensuijima Island", emoji: "🏝️", city: "Fukuyama", country: "Japan", lat: 34.3778, lng: 133.3870, mapUrl: "https://maps.google.com/?q=Sensuijima+Island+Tomonoura", mapProvider: "google", category: "experience", dayNumber: 10 },
  { id: "m9", label: "MYSTAYS Premier Narita", emoji: "🏨", city: "Narita", country: "Japan", lat: 35.7719, lng: 140.3187, mapUrl: "https://maps.google.com/?q=Hotel+MYSTAYS+Premier+Narita", mapProvider: "google", category: "accommodation" },

  /* South Korea */
  { id: "m10", label: "Homes Stay Myeongdong", emoji: "🏨", city: "Seoul", country: "South Korea", lat: 37.5636, lng: 126.9869, mapUrl: "https://map.naver.com/v5/search/Homes+Stay+Myeongdong", mapProvider: "naver", category: "accommodation" },
  { id: "m11", label: "Present Stay Jeonju", emoji: "🏡", city: "Jeonju", country: "South Korea", lat: 35.8175, lng: 127.1530, mapUrl: "https://map.naver.com/v5/search/Present+Stay+Jeonju", mapProvider: "naver", category: "accommodation" },
  { id: "m12", label: "Gyeongju City Hotel", emoji: "🏨", city: "Gyeongju", country: "South Korea", lat: 35.8562, lng: 129.2247, mapUrl: "https://map.naver.com/v5/search/Gyeongju+City+Hotel", mapProvider: "naver", category: "accommodation" },
  { id: "m13", label: "Cozy Tree Hotel Busan", emoji: "🏨", city: "Busan", country: "South Korea", lat: 35.1580, lng: 129.0581, mapUrl: "https://map.naver.com/v5/search/Cozy+Tree+Hotel+Seomyeon+Busan", mapProvider: "naver", category: "accommodation" },
];

/* ═══════════════════════════════════════════════════
   Phrasebook
   ═══════════════════════════════════════════════════ */
export const phrases: Phrase[] = [
  { id: "p1", english: "Hello", japanese: "こんにちは", romanjiJP: "Konnichiwa", korean: "안녕하세요", romanjiKR: "Annyeonghaseyo", category: "greeting" },
  { id: "p2", english: "Thank you", japanese: "ありがとうございます", romanjiJP: "Arigatō gozaimasu", korean: "감사합니다", romanjiKR: "Gamsahamnida", category: "greeting" },
  { id: "p3", english: "Excuse me / Sorry", japanese: "すみません", romanjiJP: "Sumimasen", korean: "저기요 / 죄송합니다", romanjiKR: "Jeogiyo / Joesonghamnida", category: "greeting" },
  { id: "p4", english: "Yes / No", japanese: "はい / いいえ", romanjiJP: "Hai / Iie", korean: "네 / 아니요", romanjiKR: "Ne / Aniyo", category: "general" },
  { id: "p5", english: "How much is this?", japanese: "いくらですか？", romanjiJP: "Ikura desu ka?", korean: "이거 얼마예요?", romanjiKR: "Igeo eolmayeyo?", category: "shopping" },
  { id: "p6", english: "Where is…?", japanese: "…はどこですか？", romanjiJP: "...wa doko desu ka?", korean: "…이/가 어디에 있어요?", romanjiKR: "...i/ga eodie isseoyo?", category: "transport" },
  { id: "p7", english: "One ticket please", japanese: "切符を一枚ください", romanjiJP: "Kippu wo ichimai kudasai", korean: "표 한 장 주세요", romanjiKR: "Pyo han jang juseyo", category: "transport" },
  { id: "p8", english: "This is delicious", japanese: "美味しいです", romanjiJP: "Oishii desu", korean: "맛있어요", romanjiKR: "Masisseoyo", category: "dining" },
  { id: "p9", english: "Bill / Check please", japanese: "お会計お願いします", romanjiJP: "Okaikei onegaishimasu", korean: "계산해 주세요", romanjiKR: "Gyesanhae juseyo", category: "dining" },
  { id: "p10", english: "Help!", japanese: "助けて！", romanjiJP: "Tasukete!", korean: "도와주세요!", romanjiKR: "Dowajuseyo!", category: "emergency" },
  { id: "p11", english: "I don't understand", japanese: "わかりません", romanjiJP: "Wakarimasen", korean: "모르겠어요", romanjiKR: "Moreugesseoyo", category: "general" },
  { id: "p12", english: "Do you speak English?", japanese: "英語を話せますか？", romanjiJP: "Eigo wo hanasemasu ka?", korean: "영어 하세요?", romanjiKR: "Yeongeo haseyo?", category: "general" },
];

/* ═══════════════════════════════════════════════════
   Travel Tips
   ═══════════════════════════════════════════════════ */
export const travelTips: TravelTip[] = [
  { id: "t1", title: "Suica Card (IC Card)", emoji: "💳", content: "Buy at any JR station. Tap on/off for trains, buses, and convenience store payments. Refundable at the end of your trip.", country: "Japan" },
  { id: "t2", title: "T-money Card", emoji: "💳", content: "Buy at any convenience store or subway station. Works on all Seoul metro, buses, and many taxis. Can pay at convenience stores too.", country: "South Korea" },
  { id: "t3", title: "Tipping", emoji: "💴", content: "Tipping is not customary and can even be considered rude. Service charges are included.", country: "both" },
  { id: "t4", title: "Shoes Off", emoji: "👟", content: "Remove shoes when entering homes, ryokans, some restaurants (look for raised floors), and temple areas.", country: "both" },
  { id: "t5", title: "Convenience Stores", emoji: "🏪", content: "7-Eleven, Lawson, and FamilyMart are lifesavers. ATMs, hot meals, toiletries — open 24/7. In Korea, look for CU and GS25.", country: "both" },
  { id: "t6", title: "Power Adaptors", emoji: "🔌", content: "Japan uses Type A (US-style flat prongs, 100V). South Korea uses Type C/F (European round prongs, 220V). Bring a universal adaptor.", country: "both" },
  { id: "t7", title: "Useful Apps", emoji: "📱", content: "Japan: Google Maps, Suica app, Tabelog (restaurants). Korea: Naver Maps (essential!), KakaoTalk, Papago (translator).", country: "both" },
  { id: "t8", title: "Pocket WiFi / eSIM", emoji: "📶", content: "Reserve a pocket WiFi or buy an eSIM before departure. Essential for navigation and translation on the go.", country: "both" },
  { id: "t9", title: "Trash Bins", emoji: "🗑️", content: "Public bins are rare in Japan. Carry a small bag for rubbish or use convenience store bins after buying something.", country: "Japan" },
  { id: "t10", title: "Subway Etiquette", emoji: "🚇", content: "Keep quiet on trains, don't eat, give up priority seats. In Japan, set your phone to silent (manner mode). In Korea, avoid talking on the phone.", country: "both" },
];

/* ═══════════════════════════════════════════════════
   Packing List
   ═══════════════════════════════════════════════════ */
export const packingList: PackingItem[] = [
  { id: "pk1", item: "Passport", category: "documents", packed: false },
  { id: "pk2", item: "Travel insurance printout", category: "documents", packed: false },
  { id: "pk3", item: "Flight confirmations", category: "documents", packed: false },
  { id: "pk4", item: "Hotel booking confirmations", category: "documents", packed: false },
  { id: "pk5", item: "K-ETA confirmation", category: "documents", packed: false },
  { id: "pk6", item: "Walking shoes", category: "clothes", packed: false },
  { id: "pk7", item: "Light jacket / layers", category: "clothes", packed: false },
  { id: "pk8", item: "Rain jacket / umbrella", category: "clothes", packed: false },
  { id: "pk9", item: "Comfortable day clothes (7 sets)", category: "clothes", packed: false },
  { id: "pk10", item: "Sleepwear", category: "clothes", packed: false },
  { id: "pk11", item: "Underwear & socks", category: "clothes", packed: false },
  { id: "pk12", item: "Nice outfit for dinners", category: "clothes", packed: false },
  { id: "pk13", item: "Phone charger & cable", category: "electronics", packed: false },
  { id: "pk14", item: "Universal power adaptor", category: "electronics", packed: false },
  { id: "pk15", item: "Portable battery pack", category: "electronics", packed: false },
  { id: "pk16", item: "Camera + charger", category: "electronics", packed: false },
  { id: "pk17", item: "Headphones", category: "electronics", packed: false },
  { id: "pk18", item: "Pocket WiFi / eSIM", category: "electronics", packed: false },
  { id: "pk19", item: "Toiletry bag", category: "toiletries", packed: false },
  { id: "pk20", item: "Sunscreen", category: "toiletries", packed: false },
  { id: "pk21", item: "Medications", category: "toiletries", packed: false },
  { id: "pk22", item: "Hand sanitiser", category: "toiletries", packed: false },
  { id: "pk23", item: "Day backpack", category: "misc", packed: false },
  { id: "pk24", item: "Reusable water bottle", category: "misc", packed: false },
  { id: "pk25", item: "Small rubbish bag (for Japan)", category: "misc", packed: false },
  { id: "pk26", item: "Travel pillow", category: "misc", packed: false },
  { id: "pk27", item: "Luggage locks", category: "misc", packed: false },
];
