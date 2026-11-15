'use client'
import React, { useState } from 'react';
import { ContactFormProps, PURPOSE_OPTIONS } from './types';
import { useContactForm } from './hooks';
import { Turnstile } from "@marsidev/react-turnstile";


export const ContactForm: React.FC<ContactFormProps> = ({
  // contactForm,
  purposeOptions = PURPOSE_OPTIONS,
}) => {
  const { form, onSubmit, resetAll, submission } = useContactForm();

  const [token, setToken] = useState<string | null>(null);
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const selectedPurpose = watch('purpose');


  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      {submission.isError && (
        <div
          role="alert"
          className="bg-black text-white border-2 border-black p-4 flex items-center justify-between gap-4"
        >
          <span className="text-xs font-black tracking-widest uppercase">
            SUBMISSION ERROR: {submission.error?.message || 'UNABLE TO REACH /API/CONTACT'}
          </span>
          <button
            type="button"
            onClick={() => submission.reset()}
            className="border-2 border-white px-2.5 py-1 text-xs font-black uppercase hover:bg-white hover:text-black cursor-pointer shrink-0"
          >
            DISMISS
          </button>
        </div>
      )}

      {/* 01 / PURPOSE */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label
            htmlFor="contact-purpose"
            className="block text-stone-900 text-xs font-black tracking-[0.2em] uppercase"
          >
            01 / SELECT PURPOSE *
          </label>
          <span className="text-xs font-black tracking-widest uppercase">REQUIRED</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {purposeOptions.map((option) => {
            const isActive = selectedPurpose === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  setValue('purpose', "Infrastructure & Hosting", {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                className={`border-2 border-black px-3.5 py-2 text-xs font-black tracking-wider uppercase transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-black hover:text-white'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <select
          id="contact-purpose"
          {...register('purpose')}
          className="w-full border-2 border-black p-4 text-base font-bold bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors duration-150 uppercase"
        >
          {purposeOptions.map((option) => (
            <option key={option} value={option} className="bg-white text-black">
              {option}
            </option>
          ))}
        </select>

        {errors.purpose && (
          <p
            role="alert"
            className="mt-2 bg-black text-white px-3 py-1 text-xs font-black tracking-wider uppercase"
          >
            ! {errors.purpose.message}
          </p>
        )}
      </div>

      {/* 02 / NAME */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-stone-900 text-xs font-black tracking-[0.2em] uppercase mb-3"
        >
          02 / YOUR NAME *
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="JANE DOE"
          {...register('name')}
          className="w-full border-2 border-black p-4 text-lg font-bold bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors duration-150"
        />
        {errors.name && (
          <p
            role="alert"
            className="mt-2 bg-black text-white px-3 py-1 text-xs font-black tracking-wider uppercase"
          >
            ! {errors.name.message}
          </p>
        )}
      </div>

      {/* 03 & 04 / EMAIL & PHONE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-stone-900 text-xs font-black tracking-[0.2em] uppercase mb-3"
          >
            03 / WORK EMAIL *
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="JANE@STARTUP.IO"
            {...register('email')}
            className="w-full border-2 border-black p-4 text-lg font-bold bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors duration-150"
          />
          {errors.email && (
            <p
              role="alert"
              className="mt-2 bg-black text-white px-3 py-1 text-xs font-black tracking-wider uppercase"
            >
              ! {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-stone-900 text-xs font-black tracking-[0.2em] uppercase mb-3"
          >
            04 / PHONE NUMBER *
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+49 20 7946 0958"
            {...register('phone')}
            className="w-full border-2 border-black p-4 text-lg font-bold bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors duration-150"
          />
          {errors.phone && (
            <p
              role="alert"
              className="mt-2 bg-black text-white px-3 py-1 text-xs font-black tracking-wider uppercase"
            >
              ! {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* 05 / MESSAGE */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-stone-900 text-xs font-black tracking-[0.2em] uppercase mb-3"
        >
          05 / PROJECT MESSAGE *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="TELL US ABOUT YOUR TIMELINE, DOMAIN SETUP, OR STACK GOALS..."
          {...register('message')}
          className="w-full border-2 border-black p-4 text-lg font-bold bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors duration-150 resize-none"
        />
        {errors.message && (
          <p
            role="alert"
            className="mt-2 bg-black text-white px-3 py-1 text-xs font-black tracking-wider uppercase"
          >
            ! {errors.message.message}
          </p>
        )}
      </div>

      <Turnstile
             siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAFyhj_1whTboExX3"}
             onSuccess={(newToken: string) => setToken(newToken)}
             onExpire={() => setToken(null)}
             onError={() => setToken(null)}
           />

      <button
        type="submit"
        disabled={submission.isPending}
        className="w-full bg-black text-white border-2 border-black py-5 text-base font-black tracking-widest uppercase hover:bg-white hover:text-black disabled:opacity-60 transition-colors duration-150 cursor-pointer"
      >
        {submission.isPending ? 'TRANSMITTING TO /API/CONTACT...' : 'SEND INQUIRY →'}
      </button>
    </form>
  );
};
