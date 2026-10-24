import React, { ReactNode } from "react";
import Link from "next/link";
import { MessageSquare, Mail, LucideIcon } from "lucide-react";

export interface TrustItem {
  id?: string;
  icon: LucideIcon;
  title: ReactNode;
  description: ReactNode;
}

export interface PageFooterProps {
  /** Array of trust/highlight items to display */
  trustItems?: TrustItem[];
  /** WhatsApp contact number (e.g. "+1234567890" or "1234567890") */
  whatsappNumber?: string;
  /** Display label for the WhatsApp button */
  whatsappLabel?: ReactNode;
  /** Support email address */
  supportEmail?: string;
  /** Display label for the Email button */
  emailLabel?: ReactNode;
  /** Primary contact prompt title */
  contactTitle?: ReactNode;
  /** Primary contact prompt subtitle */
  contactSubtitle?: ReactNode;
  /** Custom background classes (defaults to bg-white) */
  bgClass?: string;
  /** Custom border/padding classes for the footer wrapper */
  containerClass?: string;
  /** Custom max-width class (defaults to max-w-4xl) */
  contentMaxWidthClass?: string;
}

export const PageFooter: React.FC<PageFooterProps> = ({
  trustItems,
  whatsappNumber,
  whatsappLabel,
  supportEmail,
  emailLabel,
  contactTitle,
  contactSubtitle,
  bgClass = "",
  containerClass = "my-4 border-t border-stone-200 py-10 px-4 sm:px-6",
  contentMaxWidthClass = "max-w-4xl",
}) => {
  // Clean raw phone number for the wa.me link if available
  const cleanPhone = whatsappNumber ? whatsappNumber.replace(/[^0-9]/g, "") : "";

  return (
    <footer className={`${bgClass} ${containerClass}`}>
      <div className={`mx-auto space-y-8 ${contentMaxWidthClass}`}>
        {/* 1. Trust Highlights Grid */}
        {trustItems && trustItems.length > 0 && (
          <div
            className={`grid grid-cols-1 md:grid-cols-${Math.min(
              trustItems.length,
              4
            )} gap-6 text-center border-b border-stone-100 pb-8`}
          >
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.id || index} className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-stone-100 text-brand-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-aldrich text-sm font-bold uppercase text-brand-text">
                    {item.title}
                  </h4>
                  <p className="font-mono text-xs text-stone-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* 2. Contact & Support Section */}
        {(contactTitle || whatsappNumber || supportEmail) && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-600">
            <div>
              {contactTitle && (
                <p className="font-semibold text-stone-800">{contactTitle}</p>
              )}
              {contactSubtitle && (
                <p className="text-stone-400">{contactSubtitle}</p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* WhatsApp Link */}
              {whatsappNumber && (
                <Link
                  href={`https://wa.me/${cleanPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-green-50 text-stone-700 hover:text-green-700 border border-stone-200 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-green-600" />
                  <span>{whatsappLabel || `WhatsApp: ${whatsappNumber}`}</span>
                </Link>
              )}

              {/* Email Link */}
              {supportEmail && (
                <Link
                  href={`mailto:${supportEmail}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-primary" />
                  <span>{emailLabel || supportEmail}</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default PageFooter;
