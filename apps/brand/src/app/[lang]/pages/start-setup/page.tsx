import { ContactForm } from "@/app/features/contact-us/form";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import Link from "next/link";

export interface ContactPageProps {
  initialPurpose?: string;
  onNavigateHome: () => void;
}

export const metadata: Metadata = constructMetadata({
  title: "Start a Project",
  description:
    "Configure your startup infrastructure, domain DNS, email server, and CRM deployment.",
  canonical: "https://devminds.cloud/pages/start-setup",
});

export default async function Page({ params }: PageProps<"/[lang]">) {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-surface text-ink">
      {/* Top Bar */}
      <div className="border-b-brutal border-line bg-surface-muted/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xs text-ink font-black tracking-label uppercase hover:text-highlight hover:underline underline-offset-4 transition-colors duration-150 cursor-pointer"
          >
            ← BACK TO HOME
          </Link>

          <div className="flex items-center gap-3">
            <span className="inline-block rounded-pill bg-surface border-brutal border-line px-3.5 py-1 text-xs text-ink font-black tracking-label uppercase shadow-soft">
              ENDPOINT: POST /API/CONTACT
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-block rounded-pill bg-highlight text-ink-inverse border-brutal border-line px-4 py-1 text-xs font-black tracking-label uppercase shadow-soft mb-6">
              DIRECT FOUNDER INTAKE
            </div>

            <h1 className="font-display text-5xl text-ink sm:text-6xl font-black tracking-tighter uppercase leading-[0.92] mb-6">
              START YOUR
              <br />
              TECHNICAL
              <br />
              BUILD.
            </h1>

            <p className="text-lg font-medium leading-snug text-ink-muted mb-8 pb-8 border-b-brutal border-line">
              Tell us what your startup needs—from zero-downtime cloud
              infrastructure to self-hosted &amp; CRM integration.
            </p>

            <div className="space-y-4 text-xs font-black tracking-cta uppercase">
              <div className="flex items-center justify-between rounded-control bg-surface-inverse text-ink-inverse border-brutal border-line p-4 shadow-soft">
                <span>RESPONSE SLA</span>
                <span className="text-highlight-secondary">&lt; 24 HOURS</span>
              </div>
              <div className="flex items-center justify-between rounded-control bg-surface-inverse text-ink-inverse border-brutal border-line p-4 shadow-soft">
                <span>DIRECT DESK</span>
                <span className="text-highlight-secondary">
                  {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Form / Confirmation */}
          <div className="lg:col-span-7 rounded-card border-brutal border-line p-6 sm:p-10 md:p-12 bg-surface shadow-soft">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
