// import { notFound } from 'next/navigation'
// import { Form } from '@/app/features/contact-us/form'
// import { useContactForm } from '@/app/features/contact-us/hooks';
//
// export interface ContactPageProps {
//   initialPurpose?: string;
//   onNavigateHome: () => void;
// }

// export default async function Page({ params }: PageProps<'/[lang]'>) {
//
//   const contactForm = useContactForm({
//       defaultPurpose: initialPurpose,
//       endpoint: '/api/contact',
//     });
//
//   return (
//     <main className="min-h-[calc(100vh-5rem)] bg-white">
//           <div className="border-b-2 border-black">
//             <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-wrap items-center justify-between gap-4">
//               <button
//                 type="button"
//                 onClick={onNavigateHome}
//                 className="text-xs font-black tracking-[0.2em] uppercase hover:underline underline-offset-4 cursor-pointer"
//               >
//                 ← BACK TO HOME
//               </button>
//
//               <div className="flex items-center gap-3">
//                 <span className="text-xs font-black tracking-[0.2em] uppercase">
//                   ENDPOINT: POST /API/CONTACT
//                 </span>
//                 <span className="border-2 border-black px-2.5 py-0.5 text-xs font-black tracking-widest uppercase">
//                   STATUS: {contactForm.submission.status.toUpperCase()}
//                 </span>
//               </div>
//             </div>
//           </div>
//
//           <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
//               {/* Left Column */}
//               <div className="lg:col-span-5 lg:sticky lg:top-28">
//                 <div className="inline-block border-2 border-black px-3 py-1 text-xs font-black tracking-[0.2em] uppercase mb-6">
//                   DIRECT FOUNDER INTAKE
//                 </div>
//
//                 <h1 className="text-5xl sm:text-6xl font-black tracking-tighter uppercase leading-[0.92] mb-6">
//                   START YOUR
//                   <br />
//                   TECHNICAL
//                   <br />
//                   BUILD.
//                 </h1>
//
//                 <p className="text-lg font-bold leading-snug mb-8 pb-8 border-b-2 border-black">
//                   Tell us what your startup needs—from zero-downtime cloud infrastructure to self-hosted
//                   Mailcow &amp; Chatwoot CRM integration.
//                 </p>
//
//                 <div className="space-y-4 text-xs font-black tracking-[0.18em] uppercase">
//                   <div className="flex items-center justify-between border-2 border-black p-4">
//                     <span>RESPONSE SLA</span>
//                     <span>&lt; 24 HOURS</span>
//                   </div>
//                   <div className="flex items-center justify-between border-2 border-black p-4">
//                     <span>DIRECT DESK</span>
//                     <span>HELLO@DEVMINDS.IO</span>
//                   </div>
//                 </div>
//               </div>
//
//               {/* Right Column: Form / Confirmation */}
//               <div className="lg:col-span-7 border-2 border-black p-6 sm:p-10 md:p-12 bg-white">
//                 <ContactForm contactForm={contactForm} onNavigateHome={onNavigateHome} />
//               </div>
//             </div>
//           </section>
//         </main>
//   );
// }
