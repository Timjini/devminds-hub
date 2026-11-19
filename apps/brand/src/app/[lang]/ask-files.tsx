'use client';

import { useDictionary, useLanguage } from '@/contexts';
import React, { useState } from 'react';


export default function AskFiles() {
  const lang = useLanguage();
  const dict = useDictionary();
  const [activeExampleIdx, setActiveExampleIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    note: '',
  });

  const activeExample = dict.example.samples[activeExampleIdx];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      company: '',
      contact: '',
      note: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#F9F7F1] text-[#22201D] font-sans selection:bg-[#1E4D3B] selection:text-[#F9F7F1]">
      {/* Navigation */}
      <header className="border-b border-[#E2DDD0] bg-[#F9F7F1]">
        <nav
          aria-label={dict.navbar.ariaLabel}
          className="max-w-4xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-baseline gap-2.5">
            <a
              href="#"
              className="font-serif text-xl font-bold tracking-tight text-[#1E4D3B]"
            >
              {dict.navbar.brand}
            </a>
            {dict.navbar.tagline && (
              <span className="text-xs text-[#5C574E] hidden sm:inline">
                — {dict.navbar.tagline}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#4A463F]">
            <a href="#capabilities" className="hover:text-[#1E4D3B] underline-offset-4 hover:underline">
              {dict.navbar.links.capabilities}
            </a>
            <a href="#example" className="hover:text-[#1E4D3B] underline-offset-4 hover:underline">
              {dict.navbar.links.example}
            </a>
            <a href="#privacy" className="hover:text-[#1E4D3B] underline-offset-4 hover:underline">
              {dict.navbar.links.privacy}
            </a>
            <a href="#steps" className="hover:text-[#1E4D3B] underline-offset-4 hover:underline">
              {dict.navbar.links.pricing}
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span
              aria-label={dict.navbar.languageSwitcher.ariaLabel}
              className="px-2 py-0.5 border border-[#CFC8B8] bg-[#FFFFFF] text-[#5C574E] uppercase text-xs tracking-wider"
            >
              {lang}
            </span>
            <a
              href="#contact"
              className="px-3.5 py-1.5 bg-[#1E4D3B] text-[#FFFFFF] font-medium hover:bg-[#163A2C] transition-colors"
            >
              {dict.navbar.cta}
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <section className="py-16 md:py-20 border-b border-[#E2DDD0]">
          <p className="text-xs uppercase tracking-[0.15em] text-[#5C574E] mb-4">
            {dict.hero.eyebrow}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-[#1C1B18] max-w-2xl mb-6">
            {dict.hero.headline}
          </h1>
          <p className="text-lg text-[#4A463F] leading-relaxed max-w-2xl mb-8">
            {dict.hero.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#1E4D3B] text-[#FFFFFF] text-sm font-medium hover:bg-[#163A2C] transition-colors"
            >
              {dict.hero.primaryCta}
            </a>
            <a
              href="#example"
              className="px-6 py-3 bg-[#FFFFFF] border border-[#CFC8B8] text-[#22201D] text-sm font-medium hover:border-[#1E4D3B] transition-colors"
            >
              {dict.hero.secondaryCta}
            </a>
          </div>

          <div className="pt-6 border-t border-[#E2DDD0] text-sm text-[#4A463F] flex items-start gap-2">
            <ul className="pt-6 border-t border-[#E2DDD0] space-y-2.5 text-sm text-[#4A463F]">
                        {dict.hero.reassurance.map((line, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#1E4D3B] font-bold">—</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
          </div>
        </section>

        {/* Capabilities Index */}
        <section id="capabilities" className="py-16 border-b border-[#E2DDD0]">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.15em] text-[#5C574E] mb-2">
              {dict.capabilities.sectionLabel}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1C1B18] mb-3">
              {dict.capabilities.title}
            </h2>
            <p className="text-[#4A463F] max-w-2xl">
              {dict.capabilities.subtitle}
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E2DDD0] divide-y divide-[#E2DDD0]">
            {dict.capabilities.items.map((item) => (
              <div
                key={item.id}
                className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
              >
                <div className="md:col-span-1 font-serif text-sm text-[#5C574E]">
                  {item.number}
                </div>
                <div className="md:col-span-4 font-serif text-lg font-medium text-[#1C1B18]">
                  {item.title}
                </div>
                <div className="md:col-span-7 space-y-2">
                  <p className="text-sm text-[#3A3731] leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-xs text-[#5C574E] italic">
                    {item.examplePrompt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Paper Example */}
        <section id="example" className="py-16 border-b border-[#E2DDD0]">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.15em] text-[#5C574E] mb-2">
              {dict.example.sectionLabel}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1C1B18] mb-3">
              {dict.example.title}
            </h2>
            <p className="text-[#4A463F] max-w-2xl">
              {dict.example.subtitle}
            </p>
          </div>

          <div
            role="tablist"
            aria-label={dict.example.selectorLabel}
            className="flex flex-wrap gap-2 mb-6"
          >
            {dict.example.samples.map((sample, idx) => {
              const isSelected = idx === activeExampleIdx;
              return (
                <button
                  key={sample.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveExampleIdx(idx)}
                  className={`px-4 py-2 text-sm border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#1E4D3B] text-[#FFFFFF] border-[#1E4D3B]'
                      : 'bg-[#FFFFFF] text-[#3A3731] border-[#CFC8B8] hover:border-[#1E4D3B]'
                  }`}
                >
                  {sample.tabLabel}
                </button>
              );
            })}
          </div>

          {activeExample && (
            <div className="bg-[#FFFFFF] border border-[#CFC8B8] p-6 md:p-10 space-y-6">
              <div className="pb-5 border-b border-[#E2DDD0]">
                <span className="block text-xs uppercase tracking-wider text-[#5C574E] mb-1.5">
                  {dict.example.questionLabel}
                </span>
                <p className="font-serif text-lg text-[#1C1B18]">
                  “{activeExample.question}”
                </p>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-[#1E4D3B] mb-2">
                  {dict.example.answerLabel}
                </span>
                <div className="text-sm md:text-base text-[#22201D] leading-relaxed whitespace-pre-line">
                  {activeExample.answer}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2DDD0] text-xs text-[#5C574E]">
                <strong className="font-medium text-[#22201D]">
                  {dict.example.sourceLabel}:
                </strong>{' '}
                {activeExample.source}
              </div>
            </div>
          )}
        </section>

        {/* Privacy & Ownership */}
        <section id="privacy" className="py-16 border-b border-[#E2DDD0]">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.15em] text-[#5C574E] mb-2">
              {dict.privacy.sectionLabel}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1C1B18] mb-3">
              {dict.privacy.title}
            </h2>
            <p className="text-[#4A463F] max-w-2xl">
              {dict.privacy.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dict.privacy.promises.map((promise, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E2DDD0] p-6 space-y-2.5"
              >
                <h3 className="font-serif text-lg text-[#1C1B18]">
                  {promise.title}
                </h3>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How Setup Works & Pricing Note */}
        <section id="steps" className="py-16 border-b border-[#E2DDD0]">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.15em] text-[#5C574E] mb-2">
              {dict.steps.sectionLabel}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1C1B18] mb-3">
              {dict.steps.title}
            </h2>
            <p className="text-[#4A463F] max-w-2xl">
              {dict.steps.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dict.steps.items.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#CFC8B8] p-8 space-y-2.5"
              >
                <p className="font-serif text-sm text-[#1E4D3B] font-semibold">
                  {step.stepLabel}
                </p>
                <h3 className="font-serif text-xl text-[#1C1B18]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {dict.pricing.note && (
            <div className="mt-6 p-5 bg-[#FFFFFF] border border-[#E2DDD0] text-sm text-[#3A3731] flex items-start gap-2.5">
              <span className="text-[#1E4D3B] font-bold">✓</span>
              <span>{dict.pricing.note}</span>
            </div>
          )}
        </section>

        {/* Pricing — Office Invoice Table Style */}
                <section id="pricing" className="py-16 border-b border-[#E2DDD0]">
                  <div className="mb-10">
                    <p className="text-xs uppercase tracking-[0.15em] text-[#5C574E] mb-2">
                      {dict.pricingSection.sectionLabel} — {dict.pricingSection.eyebrow}
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl text-[#1C1B18] mb-3">
                      {dict.pricingSection.title}
                    </h2>
                    <p className="text-[#4A463F] max-w-2xl">
                      {dict.pricingSection.subtitle}
                    </p>
                  </div>

                  {/* Paper Invoice Sheet */}
                  <div className="bg-[#FFFFFF] border border-[#CFC8B8] shadow-[2px_2px_0px_#E2DDD0]">
                    {/* Invoice Top Stamp Header */}
                    <div className="px-6 py-4 bg-[#F4F0E6] border-b border-[#CFC8B8] flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-serif font-bold tracking-wider text-[#1C1B18] uppercase">
                        {dict.pricingSection.invoiceHeader.documentTitle}
                      </span>
                      <span className="font-mono text-[#5C574E]">
                        {dict.pricingSection.invoiceHeader.reference}
                      </span>
                    </div>

                    {/* Responsive Invoice Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-[#CFC8B8] text-[11px] uppercase tracking-wider text-[#5C574E] bg-[#FAF8F3]">
                            <th className="py-3.5 px-6 font-medium w-16">
                              #
                            </th>
                            <th className="py-3.5 px-6 font-medium">
                              {dict.pricingSection.invoiceHeader.columns.description}
                            </th>
                            <th className="py-3.5 px-6 font-medium whitespace-nowrap">
                              {dict.pricingSection.invoiceHeader.columns.billing}
                            </th>
                            <th className="py-3.5 px-6 font-medium text-right whitespace-nowrap">
                              {dict.pricingSection.invoiceHeader.columns.rate}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2DDD0] text-sm">
                          {dict.pricingSection.items.map((row) => (
                            <tr key={row.code} className="align-top">
                              <td className="py-6 px-6 font-serif text-[#5C574E]">
                                {row.code}
                              </td>
                              <td className="py-6 px-6 space-y-1.5 max-w-md">
                                <p className="font-serif text-base font-medium text-[#1C1B18]">
                                  {row.title}
                                </p>
                                <p className="text-xs md:text-sm text-[#4A463F] leading-relaxed">
                                  {row.description}
                                </p>
                              </td>
                              <td className="py-6 px-6 text-xs text-[#5C574E] whitespace-nowrap">
                                {row.billing}
                              </td>
                              <td className="py-6 px-6 font-serif text-lg font-medium text-[#1C1B18] text-right whitespace-nowrap">
                                {row.rate}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Invoice Footer & Action */}
                    <div className="px-6 py-5 bg-[#FAF8F3] border-t border-[#CFC8B8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-xs text-[#5C574E] max-w-lg leading-relaxed">
                        {dict.pricingSection.note}
                      </p>
                      <a
                        href="#contact"
                        className="shrink-0 px-5 py-2.5 bg-[#1E4D3B] text-[#FFFFFF] text-xs font-medium tracking-wide hover:bg-[#163A2C] transition-colors text-center"
                      >
                        {dict.pricingSection.cta}
                      </a>
                    </div>
                  </div>
                </section>

        {/* Contact / Inquiry Form */}
        <section id="contact" className="py-16">
          <div className="bg-[#FFFFFF] border border-[#CFC8B8] p-8 md:p-12">
            <div className="max-w-xl mb-8">
              <h2 className="font-serif text-2xl md:text-3xl text-[#1C1B18] mb-3">
                {dict.cta.title}
              </h2>
              <p className="text-sm text-[#4A463F] leading-relaxed">
                {dict.cta.subtitle}
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-[#F9F7F1] border border-[#1E4D3B] text-sm text-[#1C1B18] space-y-3 max-w-xl">
                <p className="font-serif text-lg text-[#1E4D3B]">
                  {dict.cta.confirmation.title}
                </p>
                <p className="text-[#4A463F]">
                  {dict.cta.confirmation.message}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs underline underline-offset-4 text-[#1E4D3B] hover:text-[#163A2C] cursor-pointer"
                >
                  {dict.cta.confirmation.resetButton}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4A463F] mb-1.5">
                      {dict.cta.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={dict.cta.form.namePlaceholder}
                      className="w-full px-3.5 py-2.5 bg-[#F9F7F1] border border-[#CFC8B8] text-sm text-[#22201D] focus:outline-none focus:border-[#1E4D3B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4A463F] mb-1.5">
                      {dict.cta.form.companyLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder={dict.cta.form.companyPlaceholder}
                      className="w-full px-3.5 py-2.5 bg-[#F9F7F1] border border-[#CFC8B8] text-sm text-[#22201D] focus:outline-none focus:border-[#1E4D3B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A463F] mb-1.5">
                    {dict.cta.form.contactLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    placeholder={dict.cta.form.contactPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7F1] border border-[#CFC8B8] text-sm text-[#22201D] focus:outline-none focus:border-[#1E4D3B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A463F] mb-1.5">
                    {dict.cta.form.noteLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.note}
                    onChange={(e) =>
                      setFormData({ ...formData, note: e.target.value })
                    }
                    placeholder={dict.cta.form.notePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7F1] border border-[#CFC8B8] text-sm text-[#22201D] focus:outline-none focus:border-[#1E4D3B]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1E4D3B] text-[#FFFFFF] text-sm font-medium hover:bg-[#163A2C] transition-colors cursor-pointer"
                >
                  {dict.cta.form.submitButton}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E2DDD0] py-8 mt-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C574E]">
          <span>{dict.footer.note}</span>
          <span>{dict.footer.rights}</span>
        </div>
      </footer>
    </div>
  );
}
