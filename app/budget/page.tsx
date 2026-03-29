"use client";

import { useState } from "react";
import { trip, expenses } from "@/data/trip";
import PageHeader from "@/components/PageHeader";
import type { Category } from "@/data/types";

const categoryConfig: { category: Category; label: string; color: string; bgColor: string }[] = [
  { category: "accommodation", label: "Accommodation", color: "bg-ocean-400", bgColor: "bg-ocean-50 text-ocean-600" },
  { category: "flight", label: "Flights", color: "bg-sakura-300", bgColor: "bg-sakura-50 text-sakura-500" },
  { category: "transport", label: "Transport", color: "bg-matcha-400", bgColor: "bg-matcha-50 text-matcha-600" },
  { category: "food", label: "Food & Drink", color: "bg-hanok-300", bgColor: "bg-hanok-50 text-[#b45309]" },
  { category: "experience", label: "Activities", color: "bg-ink-300", bgColor: "bg-ink-50 text-ink-600" },
  { category: "culture", label: "Culture", color: "bg-stone-400", bgColor: "bg-stone-100 text-stone-600" },
  { category: "shopping", label: "Shopping", color: "bg-hanok-400", bgColor: "bg-hanok-50 text-hanok-500" },
];

export default function BudgetPage() {
  const [view, setView] = useState<"summary" | "detail">("summary");

  const totalSpent = expenses.filter((e) => e.paid).reduce((sum, e) => sum + e.amountAUD, 0);
  const totalUnpaid = expenses.filter((e) => !e.paid).reduce((sum, e) => sum + e.amountAUD, 0);
  const remaining = trip.totalBudget - totalSpent - totalUnpaid;

  const byCategory = categoryConfig.map((c) => ({
    ...c,
    amount: expenses.filter((e) => e.category === c.category).reduce((sum, e) => sum + e.amountAUD, 0),
  })).filter((c) => c.amount > 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <PageHeader
        label="Finances"
        title="Budget Overview"
        description="Track spending across your trip with category breakdowns and individual line items."
      />

      {/* ─── View Toggle ─── */}
      <div className="flex gap-2 mb-8">
        {(["summary", "detail"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors capitalize ${
              view === v
                ? "bg-accent text-white"
                : "bg-white border border-border text-stone-500 hover:bg-stone-50"
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      {view === "summary" ? (
        <>
          {/* ─── Budget Bar ─── */}
          <div className="bg-white border border-border rounded-[var(--radius-lg)] p-7 shadow-[var(--shadow-sm)] max-w-2xl mb-8">
            <div className="flex justify-between items-baseline mb-5">
              <h3 className="font-display text-lg">Trip Budget</h3>
              <div>
                <span className="text-2xl font-bold text-ocean-600">
                  ${(totalSpent + totalUnpaid).toLocaleString()}
                </span>
                <span className="text-sm text-stone-400 ml-1">/ ${trip.totalBudget.toLocaleString()}</span>
              </div>
            </div>
            <div className="h-3 bg-stone-100 rounded-full overflow-hidden flex gap-0.5">
              {byCategory.map((c) => (
                <div
                  key={c.category}
                  className={`h-full rounded-full ${c.color}`}
                  style={{ width: `${(c.amount / trip.totalBudget) * 100}%` }}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
              {byCategory.map((c) => (
                <div key={c.category} className="flex items-center gap-1.5 text-xs text-stone-500">
                  <span className={`w-2 h-2 rounded-full ${c.color}`} />
                  {c.label} · ${c.amount.toLocaleString()}
                </div>
              ))}
              <div className="flex items-center gap-1.5 text-xs text-stone-500">
                <span className="w-2 h-2 rounded-full bg-stone-200" />
                Remaining · ${remaining.toLocaleString()}
              </div>
            </div>
          </div>

          {/* ─── Summary Cards ─── */}
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-white border border-border rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Paid</p>
              <p className="text-2xl font-bold text-matcha-600 mt-1">${totalSpent.toLocaleString()}</p>
            </div>
            <div className="bg-white border border-border rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Unpaid</p>
              <p className="text-2xl font-bold text-hanok-500 mt-1">${totalUnpaid.toLocaleString()}</p>
            </div>
            <div className="bg-white border border-border rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Remaining</p>
              <p className="text-2xl font-bold text-ocean-600 mt-1">${remaining.toLocaleString()}</p>
            </div>
          </div>
        </>
      ) : (
        /* ─── Detail Table ─── */
        <div className="bg-white border border-border rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-sm)]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-stone-50">
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-400">Date</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-400">Item</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-400">Category</th>
                  <th className="text-right px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-400">Amount</th>
                  <th className="text-right px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-400">AUD</th>
                  <th className="text-center px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {expenses.map((exp) => {
                  const catCfg = categoryConfig.find((c) => c.category === exp.category);
                  return (
                    <tr key={exp.id} className="hover:bg-stone-50 transition-colors">
                      <td className="px-5 py-3 text-xs text-stone-400 tabular-nums whitespace-nowrap">
                        {new Date(exp.date).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}
                      </td>
                      <td className="px-5 py-3 text-sm font-medium text-stone-700">{exp.title}</td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-[0.65rem] font-semibold capitalize ${catCfg?.bgColor || "bg-stone-100 text-stone-600"}`}>
                          {exp.category}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-right text-xs text-stone-500 tabular-nums whitespace-nowrap">
                        {exp.amount.toLocaleString()} {exp.currency}
                      </td>
                      <td className="px-5 py-3 text-right text-sm font-semibold text-stone-700 tabular-nums">
                        ${exp.amountAUD.toLocaleString()}
                      </td>
                      <td className="px-5 py-3 text-center">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.65rem] font-semibold ${
                          exp.paid ? "bg-matcha-50 text-matcha-600" : "bg-hanok-50 text-[#b45309]"
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                          {exp.paid ? "Paid" : "Unpaid"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-border bg-stone-50">
                  <td colSpan={4} className="px-5 py-3 text-sm font-semibold text-stone-600">Total</td>
                  <td className="px-5 py-3 text-right text-sm font-bold text-ocean-600 tabular-nums">
                    ${expenses.reduce((sum, e) => sum + e.amountAUD, 0).toLocaleString()}
                  </td>
                  <td />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
