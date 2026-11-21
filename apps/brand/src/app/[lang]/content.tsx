'use client';

import { useDictionary, useLanguage } from '@/contexts';
import React, { useState } from 'react';


export default function Content() {
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
  <div className="min-h-screen bg-paper text-ink-primary font-opensans selection:bg-brand-soft selection:text-brand">
        {/* Navigation */}
        <header className="border-b border-border-subtle bg-paper/90 backdrop-blur-sm sticky top-0 z-10">
          <nav
            aria-label={dict.navbar.ariaLabel}
            className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                className="font-serif text-xl font-bold tracking-tight text-brand"
              >
                {dict.navbar.brand}
              </a>
              {dict.navbar.tagline && (
                <span className="text-xs text-ink-muted hidden sm:inline">
                  — {dict.navbar.tagline}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-ink-secondary">
              <a href="#capabilities" className="hover:text-brand transition-colors">
                {dict.navbar.links.capabilities}
              </a>
              <a href="#example" className="hover:text-brand transition-colors">
                {dict.navbar.links.example}
              </a>
              <a href="#privacy" className="hover:text-brand transition-colors">
                {dict.navbar.links.privacy}
              </a>
              <a href="#steps" className="hover:text-brand transition-colors">
                {dict.navbar.links.pricing}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-sm">
              <span
                aria-label={dict.navbar.languageSwitcher.ariaLabel}
                className="px-2.5 py-1 rounded-full border border-border-strong bg-surface text-ink-muted uppercase text-xs font-medium tracking-wider"
              >
                {lang}
              </span>
              <a
                href="#contact"
                className="px-4 py-1.5 rounded-full bg-brand text-surface font-medium hover:bg-brand-hover transition-colors shadow-xs"
              >
                {dict.navbar.cta}
              </a>
            </div>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <section className="py-16 md:py-20 border-b border-border-subtle">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-medium tracking-wide mb-5">
              {dict.hero.eyebrow}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-ink-heading max-w-2xl mb-6">
              {dict.hero.headline}
            </h1>
            <p className="text-lg text-ink-secondary leading-relaxed max-w-2xl mb-8">
              {dict.hero.subheadline}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-12">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-brand text-surface text-sm font-medium hover:bg-brand-hover transition-colors shadow-xs"
              >
                {dict.hero.primaryCta}
              </a>
              <a
                href="#example"
                className="px-6 py-3 rounded-full bg-surface border border-border-strong text-ink-primary text-sm font-medium hover:border-sage hover:text-sage transition-colors"
              >
                {dict.hero.secondaryCta}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-paper-subtle border border-border-subtle">
              <ul className="space-y-2.5 text-sm text-ink-secondary">
                {dict.hero.reassurance.map((line, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-sage font-bold">●</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Capabilities Index */}
          <section id="capabilities" className="py-16 border-b border-border-subtle">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-marigold-soft text-marigold text-xs font-medium tracking-wide mb-3">
                {dict.capabilities.sectionLabel}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-ink-heading mb-3">
                {dict.capabilities.title}
              </h2>
              <p className="text-ink-secondary max-w-2xl">
                {dict.capabilities.subtitle}
              </p>
            </div>

            <div className="bg-surface rounded-2xl border border-border-subtle divide-y divide-border-subtle shadow-xs overflow-hidden">
              {dict.capabilities.items.map((item) => (
                <div
                  key={item.id}
                  className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-paper/60 transition-colors"
                >
                  <div className="md:col-span-1">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-paper-warm font-serif text-xs font-medium text-ink-secondary">
                      {item.number}
                    </span>
                  </div>
                  <div className="md:col-span-4 font-serif text-lg font-medium text-ink-heading">
                    {item.title}
                  </div>
                  <div className="md:col-span-7 space-y-2">
                    <p className="text-sm text-ink-body leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-xs text-sage italic">
                      {item.examplePrompt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Paper Example */}
          <section id="example" className="py-16 border-b border-border-subtle">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-sage-soft text-sage text-xs font-medium tracking-wide mb-3">
                {dict.example.sectionLabel}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-ink-heading mb-3">
                {dict.example.title}
              </h2>
              <p className="text-ink-secondary max-w-2xl">
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
                    className={`px-4 py-2 rounded-full text-sm transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-sage text-surface font-medium shadow-xs'
                        : 'bg-surface text-ink-body border border-border-strong hover:border-sage'
                    }`}
                  >
                    {sample.tabLabel}
                  </button>
                );
              })}
            </div>

            {activeExample && (
              <div className="bg-surface rounded-2xl border border-border-subtle p-6 md:p-10 space-y-6 shadow-xs">
                <div className="pb-5 border-b border-border-subtle">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-paper-warm text-xs font-medium text-ink-secondary mb-2">
                    {dict.example.questionLabel}
                  </span>
                  <p className="font-serif text-lg text-ink-heading">
                    “{activeExample.question}”
                  </p>
                </div>

                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-sage-soft text-xs font-medium text-sage mb-2.5">
                    {dict.example.answerLabel}
                  </span>
                  <div className="text-sm md:text-base text-ink-primary leading-relaxed whitespace-pre-line">
                    {activeExample.answer}
                  </div>
                </div>

                <div className="pt-4 border-t border-border-subtle text-xs text-ink-muted">
                  <strong className="font-medium text-ink-primary">
                    {dict.example.sourceLabel}:
                  </strong>{' '}
                  {activeExample.source}
                </div>
              </div>
            )}
          </section>

          {/* Privacy & Ownership */}
          <section id="privacy" className="py-16 border-b border-border-subtle">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-sage-soft text-sage text-xs font-medium tracking-wide mb-3">
                {dict.privacy.sectionLabel}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-ink-heading mb-3">
                {dict.privacy.title}
              </h2>
              <p className="text-ink-secondary max-w-2xl">
                {dict.privacy.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dict.privacy.promises.map((promise, idx) => (
                <div
                  key={idx}
                  className="bg-surface rounded-2xl border border-border-subtle p-6 space-y-2.5 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-full bg-sage-soft text-sage flex items-center justify-center text-sm font-bold mb-1">
                    ✓
                  </div>
                  <h3 className="font-serif text-lg text-ink-heading">
                    {promise.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How Setup Works & Pricing Note */}
          <section id="steps" className="py-16 border-b border-border-subtle">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-marigold-soft text-marigold text-xs font-medium tracking-wide mb-3">
                {dict.steps.sectionLabel}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-ink-heading mb-3">
                {dict.steps.title}
              </h2>
              <p className="text-ink-secondary max-w-2xl">
                {dict.steps.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dict.steps.items.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-surface rounded-2xl border border-border-subtle p-8 space-y-2.5 shadow-xs"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-marigold-soft text-marigold font-serif text-xs font-semibold">
                    {step.stepLabel}
                  </span>
                  <h3 className="font-serif text-xl text-ink-heading pt-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {dict.pricing.note && (
              <div className="mt-6 p-5 rounded-2xl bg-sage-soft/60 border border-sage/20 text-sm text-ink-body flex items-start gap-2.5">
                <span className="text-sage font-bold">✓</span>
                <span>{dict.pricing.note}</span>
              </div>
            )}
          </section>

          {/* Pricing — Soft Receipt Card */}
          <section id="pricing" className="py-16 border-b border-border-subtle">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-medium tracking-wide mb-3">
                {dict.pricingSection.sectionLabel} — {dict.pricingSection.eyebrow}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-ink-heading mb-3">
                {dict.pricingSection.title}
              </h2>
              <p className="text-ink-secondary max-w-2xl">
                {dict.pricingSection.subtitle}
              </p>
            </div>

            {/* Soft Rounded Sheet */}
            <div className="bg-surface rounded-2xl border border-border-subtle shadow-sm overflow-hidden">
              {/* Top Header */}
              <div className="px-6 py-4 bg-paper-warm border-b border-border-subtle flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-serif font-bold tracking-wide text-ink-heading">
                  {dict.pricingSection.invoiceHeader.documentTitle}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface text-ink-muted font-mono">
                  {dict.pricingSection.invoiceHeader.reference}
                </span>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border-subtle text-xs text-ink-muted bg-paper-subtle">
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
                  <tbody className="divide-y divide-border-subtle text-sm">
                    {dict.pricingSection.items.map((row) => (
                      <tr key={row.code} className="align-top hover:bg-paper/50 transition-colors">
                        <td className="py-6 px-6 font-serif text-ink-muted">
                          {row.code}
                        </td>
                        <td className="py-6 px-6 space-y-1.5 max-w-md">
                          <p className="font-serif text-base font-medium text-ink-heading">
                            {row.title}
                          </p>
                          <p className="text-xs md:text-sm text-ink-secondary leading-relaxed">
                            {row.description}
                          </p>
                        </td>
                        <td className="py-6 px-6 whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-full bg-marigold-soft text-marigold text-xs font-medium">
                            {row.billing}
                          </span>
                        </td>
                        <td className="py-6 px-6 font-serif text-lg font-medium text-ink-heading text-right whitespace-nowrap">
                          {row.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer & Action */}
              <div className="px-6 py-5 bg-paper-subtle border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-ink-muted max-w-lg leading-relaxed">
                  {dict.pricingSection.note}
                </p>
                <a
                  href="#contact"
                  className="shrink-0 px-5 py-2.5 rounded-full bg-brand text-surface text-xs font-medium hover:bg-brand-hover transition-colors text-center shadow-xs"
                >
                  {dict.pricingSection.cta}
                </a>
              </div>
            </div>
          </section>

          {/* Contact / Inquiry Form */}
          <section id="contact" className="py-16">
            <div className="bg-surface rounded-3xl border border-border-subtle p-8 md:p-12 shadow-sm">
              <div className="max-w-xl mb-8">
                <h2 className="font-serif text-2xl md:text-3xl text-ink-heading mb-3">
                  {dict.cta.title}
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {dict.cta.subtitle}
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-sage-soft border border-sage/30 text-sm text-ink-heading space-y-3 max-w-xl">
                  <p className="font-serif text-lg text-sage">
                    {dict.cta.confirmation.title}
                  </p>
                  <p className="text-ink-secondary">
                    {dict.cta.confirmation.message}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-medium underline underline-offset-4 text-sage hover:opacity-80 cursor-pointer"
                  >
                    {dict.cta.confirmation.resetButton}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-ink-secondary mb-1.5">
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
                        className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-strong text-sm text-ink-primary focus:outline-none focus:border-brand transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-ink-secondary mb-1.5">
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
                        className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-strong text-sm text-ink-primary focus:outline-none focus:border-brand transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-ink-secondary mb-1.5">
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
                      className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-strong text-sm text-ink-primary focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-ink-secondary mb-1.5">
                      {dict.cta.form.noteLabel}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.note}
                      onChange={(e) =>
                        setFormData({ ...formData, note: e.target.value })
                      }
                      placeholder={dict.cta.form.notePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-strong text-sm text-ink-primary focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-brand text-surface text-sm font-medium hover:bg-brand-hover transition-colors cursor-pointer shadow-xs"
                  >
                    {dict.cta.form.submitButton}
                  </button>
                </form>
              )}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border-subtle py-8 mt-8">
          <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
            <span>{dict.footer.note}</span>
            <span>{dict.footer.rights}</span>
          </div>
        </footer>
    </div>
  );
}
