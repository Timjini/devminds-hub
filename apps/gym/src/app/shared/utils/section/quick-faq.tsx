"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

export const QuickFAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Faut-il apporter son propre équipement ?",
      a: "Pour la première séance, nous fournissons le matériel de base. Par la suite, les gants et protège-tibias personnels sont requis.",
    },
    {
      q: "Les débutants sont-ils acceptés ?",
      a: "Absolument. Nos cours 'Fundamentals' sont conçus pour vous apprendre la technique en toute sécurité à votre rythme.",
    },
    {
      q: "Quelles sont les pièces requises pour l'inscription ?",
      a: "Un certificat médical de moins de 3 mois, une copie de CIN (ou autorisation tuteur pour mineur) et le paiement de la cotisation.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-mono text-red-500 uppercase tracking-widest flex items-center justify-center gap-1.5">
          <HelpCircle className="w-4 h-4" /> Questions Fréquentes
        </span>
        <h2 className="text-3xl font-black font-aldrich uppercase italic text-stone-100">
          Besoin d'aide avant d'adhérer ?
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-stone-900/70 border border-stone-800 overflow-hidden"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-4 text-left flex items-center justify-between font-aldrich text-stone-200 text-sm font-bold uppercase"
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`w-4 h-4 text-red-500 transition-transform duration-300 ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIdx === idx && (
              <div className="px-4 pb-4 text-xs font-mono text-stone-400 border-t border-stone-800/50 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
