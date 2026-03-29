import { documents, emergencyContacts } from "@/data/trip";
import PageHeader from "@/components/PageHeader";
import StickerIcon from "@/components/StickerIcon";

export default function DocumentsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <PageHeader
        label="Documents"
        title="Travel Docs Hub"
        description="Passports, visas, insurance, and emergency contacts — everything you need at immigration or in an emergency."
      />

      {/* ─── Documents ─── */}
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-white border border-border rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)]"
          >
            <div className="flex items-start gap-3 mb-4">
              <StickerIcon name="docs" size={32} />
              <div>
                <h3 className="text-sm font-semibold text-stone-800">{doc.title}</h3>
                <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-stone-400 capitalize">
                  {doc.type.replace("_", " ")}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              {Object.entries(doc.details).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-xs text-stone-400">{key}</span>
                  <span className="text-xs font-medium text-stone-700">{value}</span>
                </div>
              ))}
            </div>
            {doc.notes && (
              <div className="flex items-start gap-1.5 mt-3 bg-stone-50 rounded-[var(--radius-sm)] px-2.5 py-1.5">
                <StickerIcon name="tip" size={14} className="mt-0.5" />
                <p className="text-xs text-stone-500">{doc.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ─── Emergency Contacts ─── */}
      <div className="flex items-center gap-2 mb-4">
        <StickerIcon name="emergency" size={24} />
        <h2 className="text-lg font-semibold text-stone-700">Emergency Contacts</h2>
      </div>
      <div className="bg-white border border-border rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-sm)] divide-y divide-border-subtle">
        {emergencyContacts.map((contact) => (
          <div key={contact.id} className="px-6 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-stone-800">{contact.name}</h3>
                <p className="text-xs text-stone-400 mt-0.5">{contact.relationship}</p>
                {contact.notes && (
                  <p className="text-xs text-stone-500 mt-1">{contact.notes}</p>
                )}
              </div>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex-shrink-0 text-sm font-mono text-ocean-600 hover:underline"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Quick Tips ─── */}
      <div className="mt-10 bg-gradient-to-br from-ocean-50 to-sakura-50 rounded-[var(--radius-lg)] p-6">
        <h3 className="font-display text-lg text-stone-800 mb-3">Before You Go</h3>
        <ul className="space-y-2 text-sm text-stone-600">
          <li className="flex items-start gap-2">
            <span className="text-ocean-500 mt-0.5">✓</span>
            Print a copy of travel insurance details
          </li>
          <li className="flex items-start gap-2">
            <span className="text-ocean-500 mt-0.5">✓</span>
            Save emergency numbers to your phone contacts
          </li>
          <li className="flex items-start gap-2">
            <span className="text-ocean-500 mt-0.5">✓</span>
            Take photos of passport info pages as backup
          </li>
          <li className="flex items-start gap-2">
            <span className="text-ocean-500 mt-0.5">✓</span>
            Check K-ETA application status for South Korea
          </li>
          <li className="flex items-start gap-2">
            <span className="text-ocean-500 mt-0.5">✓</span>
            Share itinerary with someone at home
          </li>
        </ul>
      </div>
    </div>
  );
}
