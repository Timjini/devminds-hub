"use client";

import PageFooter from "@/app/shared/ui/footer/page-footer";
import PageHeader from "@/app/shared/ui/header/page-header";
import { useDictionary } from "@/contexts";
import MemberShipPaymentForm from "@/features/membership-payment/bank-transfer/membership-payment-form";
import { ShieldCheck, RefreshCw, MessageSquare } from "lucide-react";

export default function Page() {
  const t = useDictionary();
  return (
    <div className="min-h-screen  flex flex-col justify-between">
      <PageHeader
        badgeText={t.paymentHeader.badgeText}
        title={t.paymentHeader.title}
        subtitle={t.paymentHeader.subtitle}
      />

      <main className="grow px-4 py-8">
        <MemberShipPaymentForm />
      </main>

      <PageFooter
              contactTitle={t.contact.question}
              contactSubtitle={t.contact.subtext}
              whatsappNumber="+1234567890"
              supportEmail="support@yourdomain.com"
              trustItems={[
                {
                  icon: ShieldCheck,
                  title: t.trust.safeTitle,
                  description: t.trust.safeDesc,
                },
                {
                  icon: RefreshCw,
                  title: t.trust.refundTitle,
                  description: t.trust.refundDesc,
                },
                {
                  icon: MessageSquare,
                  title: t.trust.supportTitle,
                  description: t.trust.supportDesc,
                },
              ]}
            />
    </div>
  );
}
