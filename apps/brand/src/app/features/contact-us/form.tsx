'use client';

import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { ContactFormProps, PURPOSE_OPTIONS } from './types';
import { useContactForm } from './hooks';

export const ContactForm: React.FC<ContactFormProps> = ({
  purposeOptions = PURPOSE_OPTIONS,
}) => {
  const [token, setToken] = useState<string | null>(null);

  const { form, onSubmit, resetAll, submission } = useContactForm({
    token,
    onResetTurnstile: () => {
      setToken(null);
    },
  });

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const selectedPurpose = watch('purpose');

  const inputBaseClass =
    'w-full rounded-control border-brutal border-line p-4 text-base sm:text-lg font-bold bg-surface text-ink placeholder:text-ink-muted/60 shadow-soft focus:outline-none focus:border-highlight focus:bg-surface-muted/50 transition-all duration-200';

  const errorBannerClass =
    'mt-2 rounded-control bg-highlight text-ink-inverse px-3.5 py-1.5 text-xs font-black tracking-cta uppercase shadow-soft';

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      {submission.isError && (
        <div
          role="alert"
          className="rounded-control bg-highlight text-ink-inverse border-brutal border-line p-4 shadow-soft flex items-center justify-between gap-4"
        >
          <span className="text-xs font-black tracking-cta uppercase">
            SUBMISSION ERROR: {submission.error?.message || 'UNABLE TO REACH /API/CONTACT'}
          </span>
          <button
            type="button"
            onClick={() => submission.reset()}
            className="rounded-pill border-brutal border-line-inverse px-3 py-1 text-xs font-black uppercase hover:bg-surface hover:text-ink transition-colors duration-150 cursor-pointer shrink-0"
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
            className="block text-ink text-xs font-black tracking-label uppercase"
          >
            01 / SELECT PURPOSE *
          </label>
          <span className="rounded-pill bg-surface-muted border border-line/30 px-2.5 py-0.5 text-[11px] text-ink-muted font-black tracking-cta uppercase">
            REQUIRED
          </span>
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
                className={`rounded-pill border-brutal px-4 py-2 text-xs font-black tracking-cta uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-highlight border-highlight text-ink-inverse shadow-soft'
                    : 'bg-surface border-line text-ink hover:bg-surface-inverse hover:border-line hover:text-ink-inverse'
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
          className={`${inputBaseClass} uppercase cursor-pointer`}
        >
          {purposeOptions.map((option) => (
            <option key={option} value={option} className="bg-surface text-ink">
              {option}
            </option>
          ))}
        </select>

        {errors.purpose && (
          <p role="alert" className={errorBannerClass}>
            ! {errors.purpose.message}
          </p>
        )}
      </div>

      {/* 02 / NAME */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-ink text-xs font-black tracking-label uppercase mb-3"
        >
          02 / YOUR NAME *
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="JANE DOE"
          {...register('name')}
          className={inputBaseClass}
        />
        {errors.name && (
          <p role="alert" className={errorBannerClass}>
            ! {errors.name.message}
          </p>
        )}
      </div>

      {/* 03 & 04 / EMAIL & PHONE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-ink text-xs font-black tracking-label uppercase mb-3"
          >
            03 / WORK EMAIL *
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="JANE@STARTUP.IO"
            {...register('email')}
            className={inputBaseClass}
          />
          {errors.email && (
            <p role="alert" className={errorBannerClass}>
              ! {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-ink text-xs font-black tracking-label uppercase mb-3"
          >
            04 / PHONE NUMBER *
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+49 20 7946 0958"
            {...register('phone')}
            className={inputBaseClass}
          />
          {errors.phone && (
            <p role="alert" className={errorBannerClass}>
              ! {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* 05 / MESSAGE */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-ink text-xs font-black tracking-label uppercase mb-3"
        >
          05 / PROJECT MESSAGE *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="TELL US ABOUT YOUR TIMELINE, DOMAIN SETUP, OR STACK GOALS..."
          {...register('message')}
          className={`${inputBaseClass} resize-none`}
        />
        {errors.message && (
          <p role="alert" className={errorBannerClass}>
            ! {errors.message.message}
          </p>
        )}
      </div>

      {/* 06 / TURNSTILE VERIFICATION */}
      <div className="rounded-control border-brutal border-line p-4 bg-surface-muted/60 shadow-soft">
        <span className="block text-ink text-xs font-black tracking-label uppercase mb-3">
          06 / BOT VERIFICATION *
        </span>
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
          onSuccess={(newToken) => setToken(newToken)}
          onExpire={() => setToken(null)}
          onError={() => setToken(null)}
        />
      </div>

      {/* SUBMIT CTA */}
      <button
        type="submit"
        disabled={submission.isPending || !token}
        className="w-full rounded-control font-display bg-surface-inverse text-ink-inverse border-brutal border-line py-5 text-base font-bold tracking-cta uppercase shadow-soft hover:bg-highlight hover:border-highlight hover:text-ink-inverse hover:shadow-soft-hover active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
      >
        {submission.isPending
          ? 'TRANSMITTING TO /API/CONTACT...'
          : !token
          ? 'COMPLETE VERIFICATION TO SEND'
          : 'SEND INQUIRY →'}
      </button>
    </form>
  );
};
