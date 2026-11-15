// import { notFound } from 'next/navigation'
// import { Form } from '@/app/features/contact-us/form'
// import { useContactForm } from '@/app/features/contact-us/hooks';


import { ContactForm } from "@/app/features/contact-us/form";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import Link from "next/link";

export interface ContactPageProps {
  initialPurpose?: string;
  onNavigateHome: () => void;
}

export const metadata: Metadata = constructMetadata({
  title: 'Start a Project',
  description: 'Configure your startup infrastructure, domain DNS, email server, and CRM deployment.',
  canonical: 'https://devminds.cloud/pages/start-setup',
});

export default async function Page({ params }: PageProps<'/[lang]'>) {

  // const contactForm = useContactForm({
  //     defaultPurpose: initialPurpose,
  //     endpoint: '/api/contact',
  //   });


  return (
    <main className="min-h-[calc(100vh-5rem)] bg-white">
          <div className="border-b-2 border-black">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-wrap items-center justify-between gap-4">
              <Link
                type="button"
                href="/"
                className="text-xs text-stone-900 font-black tracking-[0.2em] uppercase hover:underline underline-offset-4 cursor-pointer"
              >
                ← BACK TO HOME
              </Link>

              <div className="flex items-center gap-3">
                <span className="text-xs text-stone-900 font-black tracking-[0.2em] uppercase">
                  ENDPOINT: POST /API/CONTACT
                </span>
              </div>
            </div>
          </div>

          <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="inline-block bg-stone-900 border-2 border-black px-3 py-1 text-xs font-black tracking-[0.2em] uppercase mb-6">
                  DIRECT FOUNDER INTAKE
                </div>

                <h1 className="text-5xl text-black sm:text-6xl font-black tracking-tighter uppercase leading-[0.92] mb-6">
                  START YOUR
                  <br />
                  TECHNICAL
                  <br />
                  BUILD.
                </h1>

                <p className="text-lg font-bold leading-snug text-stone-800 mb-8 pb-8 border-b-2 border-black">
                  Tell us what your startup needs—from zero-downtime cloud infrastructure to self-hosted
                  Mailcow &amp; Chatwoot CRM integration.
                </p>

                <div className="space-y-4 text-xs font-black tracking-[0.18em] uppercase">
                  <div className="flex items-center bg-stone-900 justify-between border-2 border-black p-4">
                    <span>RESPONSE SLA</span>
                    <span>&lt; 24 HOURS</span>
                  </div>
                  <div className="flex items-center bg-stone-900 justify-between border-2 border-black p-4">
                    <span>DIRECT DESK</span>
                    <span>{process.env.NEXT_PUBLIC_ADMIN_EMAIL}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Form / Confirmation */}
              <div className="lg:col-span-7  border-2 border-black p-6 sm:p-10 md:p-12 bg-white">
                <ContactForm />
              </div>
            </div>
          </section>
      </main>
  );
}
