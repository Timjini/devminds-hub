"use client";

import { verifyTurnstileToken } from "@/app/actions/verify-turnstile";
import { toast } from "@/components/ui/toast";
import { useDictionary } from "@/contexts";
import { useCreateContact } from "@/entities/contact/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { AtSign, Loader2, Phone, Send, User } from "lucide-react";
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
    ContactFormData,
    contactSchema,
} from "../../entities/contact/validation";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        options: Record<string, unknown>,
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

const ContactForm = () => {
  const dict = useDictionary();
  const formDict = dict.contact.form;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      //   inquiryContext: "General_Inquiry",
      message: "",
    },
  });

  const [turnstileToken, setTurnstileToken] = useState("");
  const { mutateAsync, isPending } = useCreateContact();

  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderTurnstile = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.turnstile &&
      turnstileContainerRef.current &&
      !widgetIdRef.current
    ) {
      widgetIdRef.current = window.turnstile.render(
        turnstileContainerRef.current,
        {
          sitekey: process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY,
          theme: "light",
          size: "normal",
          callback: (token: string) => {
            setTurnstileToken(token);
          },
          "expired-callback": () => {
            setTurnstileToken("");
          },
          "error-callback": () => {
            setTurnstileToken("");
          },
        },
      );
    }
  }, []);

  useEffect(() => {
    renderTurnstile();

    return () => {
      if (
        widgetIdRef.current &&
        typeof window !== "undefined" &&
        window.turnstile
      ) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderTurnstile]);

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      toast.add({
        type: "error",
        description: formDict.toasts.captchaFailed,
      });
      return;
    }

    try {
      const tokenResponse = await verifyTurnstileToken(turnstileToken);

      if (tokenResponse.success) {
        await mutateAsync(data);
        reset();
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
        setTurnstileToken("");
      } else {
        toast.add({
          type: "error",
          description: formDict.toasts.captchaFailed,
        });
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
        setTurnstileToken("");
      }
    } catch (err) {
      console.error(err);
      toast.add({
        type: "error",
        description: formDict.toasts.genericError,
      });
    }
  };

  return (
    <div>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderTurnstile}
      />
      <form
        onSubmit={(e) => {
          void handleSubmit(onSubmit)(e);
        }}
        className="space-y-6 relative z-10"
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-950">
              {formDict.nameLabel}
            </label>
            <div className="relative">
              <User className="w-5 h-5 text-amber-700 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                {...register("fullName")}
                type="text"
                placeholder={formDict.namePlaceholder}
                className="w-full bg-white border border-amber-200/80 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-xl py-3 pl-11 pr-4 text-gray-800 text-sm placeholder:text-gray-400 outline-none transition-all shadow-sm"
              />
            </div>
            {errors.fullName && (
              <p className="text-xs text-red-500 font-medium mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-950">
              {formDict.emailLabel}
            </label>
            <div className="relative">
              <AtSign className="w-5 h-5 text-amber-700 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                {...register("email")}
                type="email"
                placeholder={formDict.emailPlaceholder}
                className="w-full bg-white border border-amber-200/80 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-xl py-3 pl-11 pr-4 text-gray-800 text-sm placeholder:text-gray-400 outline-none transition-all shadow-sm"
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 font-medium mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-950">
              {formDict.phoneLabel}
            </label>
            <div className="relative">
              <Phone className="w-5 h-5 text-amber-700 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                {...register("phone")}
                type="tel"
                placeholder={formDict.phonePlaceholder}
                className="w-full bg-white border border-amber-200/80 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-xl py-3 pl-11 pr-4 text-gray-800 text-sm placeholder:text-gray-400 outline-none transition-all shadow-sm"
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-500 font-medium mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Inquiry Context / Select Input */}
          {/* <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-950">
              {formDict.inquiryContext.label}
            </label>
            <div className="relative">
              <HelpCircle className="w-5 h-5 text-amber-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                {...register("inquiryContext")}
                className="w-full bg-white border border-amber-200/80 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-xl py-3 pl-11 pr-4 text-gray-800 text-sm outline-none transition-all shadow-sm appearance-none cursor-pointer"
              >
                <option value="General_Inquiry">
                  {formDict.inquiryContext.options.generalInquiry}
                </option>
                <option value="Audio_Kit_Booking">
                  {formDict.inquiryContext.options.audioKitBooking}
                </option>
                <option value="Mobile_App">
                  {formDict.inquiryContext.options.mobileApp}
                </option>
                <option value="Collaboration">
                  {formDict.inquiryContext.options.collaboration}
                </option>
              </select>
            </div>
            {errors.inquiryContext && (
              <p className="text-xs text-red-500 font-medium mt-1">
                {errors.inquiryContext.message}
              </p>
            )}
          </div> */}
        </div>

        {/* Message Input */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-950">
            {formDict.subjectLabel}
          </label>
          <div className="relative">
            <textarea
              {...register("message")}
              rows={5}
              placeholder={formDict.subjectPlaceholder}
              className="w-full bg-white border border-amber-200/80 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-xl p-4 text-gray-800 text-sm placeholder:text-gray-400 outline-none transition-all resize-none shadow-sm"
            />
          </div>
          {errors.message && (
            <p className="text-xs text-red-500 font-medium mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Container for explicit Cloudflare Turnstile */}
        <div ref={turnstileContainerRef} className="my-2" />

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isPending}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:from-amber-700 hover:to-amber-800 hover:shadow-xl active:scale-95 disabled:opacity-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 cursor-pointer"
        >
          {isPending ? (
            <>
              <span>{formDict.submit.sending}</span>
              <Loader2 className="w-4 h-4 animate-spin" />
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{formDict.submit.send}</span>
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
