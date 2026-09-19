"use client";

import { useDictionary } from "@/contexts";
import {
    CheckCircle2,
    Clock,
    Mail,
    MapPin,
    Phone
} from "lucide-react";
import React, { useState } from "react";
import ContactForm from "./contact-form";

interface ContactSectionProps {
  onSubmitSuccess?: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = () => {
  const dict = useDictionary();

  // Local Form State (Logic left for your custom implementation)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Insert your custom API or backend form handling logic here
    console.log("Form Submitted:", formData);
  };

  const phoneList: string[] = ["+48 725 648 880", "+212 669 035 305"];

  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-b from-amber-50/50 via-orange-100/30 to-amber-100/60">
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-amber-200/80 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 border-b border-amber-900/10 pb-4">
                {dict?.contact?.infoTitle ?? "Contact Information"}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100/80 border border-amber-200/80 rounded-xl text-amber-700 shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-amber-950 tracking-wider">
                      {dict?.about?.address?.label ?? "Address"}
                    </h4>
                    <p
                      className="text-gray-700 text-sm md:text-base mt-1 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html:
                          dict?.about?.address?.value ??
                          "N°15, 4éme Etage, Imm. Inflass, Bd Abderrahim Bouabid,<br />Agadir 80000, Morocco",
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100/80 border border-amber-200/80 rounded-xl text-amber-700 shrink-0 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-amber-950 tracking-wider">
                      {dict?.about?.email?.label ?? "Email"}
                    </h4>
                    <a
                      href={`mailto:${dict?.about?.email?.value ?? "biuro@maroko-ekspert.pl"}`}
                      className="text-amber-700 hover:text-amber-800 transition-colors text-sm md:text-base mt-1 block font-medium"
                    >
                      {dict?.about?.email?.value ?? "biuro@maroko-ekspert.pl"}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100/80 border border-amber-200/80 rounded-xl text-amber-700 shrink-0 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-amber-950 tracking-wider">
                      {dict?.about?.phone?.label ?? "Phone"}
                    </h4>
                    <div className="mt-1 space-y-1">
                      {phoneList.map((phone, idx) => (
                        <a
                          key={idx}
                          href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                          className="block text-gray-700 hover:text-amber-700 transition-colors text-sm md:text-base font-medium"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100/80 border border-amber-200/80 rounded-xl text-amber-700 shrink-0 shadow-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-amber-950 tracking-wider">
                      {dict?.contact?.hoursLabel ?? "Working Hours"}
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base mt-1">
                      {dict?.contact?.hoursValue ??
                        "Mon - Sat: 9:00 AM - 6:00 PM"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-amber-100/90 to-orange-100/80 rounded-2xl p-6 border border-amber-200/80 space-y-3 shadow-md">
              <div className="flex items-center gap-3 text-amber-950 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-amber-700" />
                <span>
                  {dict?.contact?.promise1 ?? "Fast response within 24 hours"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-amber-950 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-amber-700" />
                <span>
                  {dict?.contact?.promise2 ?? "Tailor-made itineraries"}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-amber-200/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-amber-500 via-orange-500 to-amber-600" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {dict?.contact?.formTitle ?? "Send Us a Message"}
              </h3>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
