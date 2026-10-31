"use client";

import React, { useState } from "react";
import {
  Building2,
  UploadCloud,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  AlertCircle,
  CreditCard
} from "lucide-react";
import { useDictionary } from "@/contexts";
// Import your dictionary hook (adjust path as needed)
// import { useDictionary } from "@/hooks/use-dictionary";

export interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  iban: string;
  swift: string;
  amount: number;
  currency: string;
  referenceCode: string;
}

const DEFAULT_BANK_DETAILS: BankDetails = {
  bankName: "Al attijariWafa bank",
  accountName: "KickBoxing Morocco",
  accountNumber: "1234 5678 9012",
  iban: "US93 8492 0000 1234 5678 9012",
  swift: "BCMAMAMCXXX",
  amount: 2000,
  currency: 'MAD',
  referenceCode: "ONB-89421",
};

export const MemberShipPaymentForm: React.FC = () => {
  const dict = useDictionary();
  const t = dict.membershipPaymentForm;

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Installment States
  const [isInstallment, setIsInstallment] = useState(false);
  const [selectedMonths, setSelectedMonths] = useState<3 | 6>(3);

  // Calculate current payment due
  const rawTotalAmount = DEFAULT_BANK_DETAILS.amount;
  const currentPaymentAmount = isInstallment
    ? rawTotalAmount / selectedMonths
    : rawTotalAmount;

  // Copy to clipboard handler
  const handleCopy = (text: string, fieldKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError(t.errors.fileSize);
        return;
      }
      setError(null);
      setSelectedFile(file);
      if (file.type.startsWith("image/")) {
        setFilePreview(URL.createObjectURL(file));
      } else {
        setFilePreview(null);
      }
    }
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setError(t.errors.noFile);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate API upload delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch {
      setError(t.errors.uploadFailed);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto my-12 p-8 rounded-2xl bg-white border brand-border shadow-xl text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="font-aldrich text-2xl font-bold uppercase text-brand-primary">
            {t.submitted.title}
          </h2>
          <p className="text-sm font-mono text-stone-600">
            {t.submitted.description}
          </p>
        </div>
        <div className="pt-4 border-t border-stone-200">
          <button
            type="button"
            onClick={() => (window.location.href = "/dashboard")}
            className="w-full py-3 px-6 rounded-xl bg-brand-primary text-white font-aldrich text-sm font-bold uppercase tracking-wider hover:opacity-95 transition-opacity"
          >
            {t.submitted.dashboardButton}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-8 p-6 sm:p-8 space-y-8 rounded-2xl shadow-sm">
      {/* 1. Header Section */}
      <div className="space-y-2">
        <h3 className="font-aldrich text-xl font-bold uppercase text-brand-primary border-b border-stone-200 pb-3 flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-brand-primary" />
          {t.title}
        </h3>
        <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
          {t.subtitle}
        </p>
      </div>

      {/* 2. Installment Option Toggle Section */}
      <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-4">
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isInstallment}
            onChange={(e) => setIsInstallment(e.target.checked)}
            className="w-4 h-4 rounded text-brand-primary focus:ring-brand-primary border-stone-300"
          />
          <span className="font-aldrich text-sm font-bold uppercase text-brand-primary">
            {t.installment.toggle}
          </span>
        </label>

        {isInstallment && (
          <div className="pl-7 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* 3 Months Option */}
            <label
              className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all {currency}{
                selectedMonths === 3
                  ? "border-brand-primary bg-stone-50"
                  : "border-stone-200 hover:border-stone-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="installmentPlan"
                  value={3}
                  checked={selectedMonths === 3}
                  onChange={() => setSelectedMonths(3)}
                  className="text-brand-primary focus:ring-brand-primary"
                />
                <span className="font-mono text-xs font-semibold text-brand-text">
                  {t.installment.threeMonths}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-brand-primary">
                {DEFAULT_BANK_DETAILS.currency} {(rawTotalAmount / 3).toFixed(2)} {t.installment.perMonth}
              </span>
            </label>

            {/* 6 Months Option */}
            <label
              className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all {currency}{
                selectedMonths === 6
                  ? "border-brand-primary bg-stone-50"
                  : "border-stone-200 hover:border-stone-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="installmentPlan"
                  value={6}
                  checked={selectedMonths === 6}
                  onChange={() => setSelectedMonths(6)}
                  className="text-brand-primary focus:ring-brand-primary"
                />
                <span className="font-mono text-xs font-semibold text-brand-text">
                  {t.installment.sixMonths}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-brand-primary">
                {DEFAULT_BANK_DETAILS.currency} {(rawTotalAmount / 6).toFixed(2)} {t.installment.perMonth}
              </span>
            </label>
          </div>
        )}
      </div>

      {/* 3. Amount & Reference Highlight Box */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <span className="block text-xs font-mono uppercase tracking-wider text-stone-500">
            {isInstallment ? t.summary.firstInstallmentDue : t.summary.totalAmountDue}
          </span>
          <span className="font-aldrich text-2xl font-bold text-brand-primary">
            {DEFAULT_BANK_DETAILS.currency} {currentPaymentAmount.toFixed(2)}
          </span>
          {isInstallment && (
            <span className="block text-[10px] font-mono text-stone-400 mt-0.5">
              (Total Plan: {DEFAULT_BANK_DETAILS.currency} {rawTotalAmount.toFixed(2)} over {selectedMonths} months)
            </span>
          )}
        </div>
        <div className="sm:text-right">
          <span className="block text-xs font-mono uppercase tracking-wider text-stone-500">
            {t.summary.paymentReference}
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="font-mono text-sm font-bold text-brand-text">
              {DEFAULT_BANK_DETAILS.referenceCode}
            </span>
            <button
              type="button"
              onClick={() => handleCopy(DEFAULT_BANK_DETAILS.referenceCode, "ref")}
              className="text-stone-400 hover:text-brand-primary transition-colors"
              title={t.summary.copyReference}
            >
              {copiedField === "ref" ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Bank Transfer Details */}
      <div className="space-y-4">
        <h4 className="font-aldrich text-md font-bold uppercase text-brand-primary flex items-center gap-2">
          <Building2 className="w-4 h-4 text-brand-primary" />
          {t.bankDetails.title}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
          <div className="p-3.5 rounded-xl bg-white border border-stone-200">
            <label className="block text-xs text-stone-400 uppercase tracking-wider mb-0.5">
              {t.bankDetails.bankName}
            </label>
            <span className="font-semibold text-brand-text">
              {DEFAULT_BANK_DETAILS.bankName}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-stone-200">
            <label className="block text-xs text-stone-400 uppercase tracking-wider mb-0.5">
              {t.bankDetails.accountName}
            </label>
            <span className="font-semibold text-brand-text">
              {DEFAULT_BANK_DETAILS.accountName}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex justify-between items-center">
            <div>
              <label className="block text-xs text-stone-400 uppercase tracking-wider mb-0.5">
                {t.bankDetails.iban}
              </label>
              <span className="font-semibold text-brand-text">
                {DEFAULT_BANK_DETAILS.iban}
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(DEFAULT_BANK_DETAILS.iban, "iban")}
              className="p-1.5 text-stone-400 hover:text-brand-primary transition-colors"
            >
              {copiedField === "iban" ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex justify-between items-center">
            <div>
              <label className="block text-xs text-stone-400 uppercase tracking-wider mb-0.5">
                {t.bankDetails.swift}
              </label>
              <span className="font-semibold text-brand-text">
                {DEFAULT_BANK_DETAILS.swift}
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(DEFAULT_BANK_DETAILS.swift, "swift")}
              className="p-1.5 text-stone-400 hover:text-brand-primary transition-colors"
            >
              {copiedField === "swift" ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Payment Slip Upload Section */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h4 className="font-aldrich text-md font-bold uppercase text-brand-primary flex items-center gap-2">
          <UploadCloud className="w-4 h-4 text-brand-primary" />
          {t.upload.title}
        </h4>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider mb-2 text-stone-600">
            {t.upload.label}
          </label>

          <div className="relative border-2 border-dashed border-stone-300 hover:border-brand-primary rounded-xl p-6 transition-colors flex flex-col items-center justify-center bg-stone-50 cursor-pointer">
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />

            {filePreview ? (
              <div className="flex flex-col items-center gap-2">
                <img
                  src={filePreview}
                  alt="Receipt Preview"
                  className="max-h-40 rounded-lg object-contain border border-stone-200"
                />
                <span className="text-xs font-mono text-stone-600">
                  {selectedFile?.name}
                </span>
              </div>
            ) : selectedFile ? (
              <div className="flex items-center gap-3 text-brand-text">
                <FileText className="w-8 h-8 text-brand-primary" />
                <div className="text-left">
                  <p className="text-sm font-semibold font-mono">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-stone-400 font-mono">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <UploadCloud className="w-10 h-10 text-stone-400 mx-auto" />
                <p className="text-sm font-mono text-stone-600">
                  {t.upload.dragAndDrop}{" "}
                  <span className="text-brand-primary font-bold underline">
                    {t.upload.browse}
                  </span>
                </p>
                <p className="text-xs font-mono text-stone-400">
                  {t.upload.maxSize}
                </p>
              </div>
            )}
          </div>

          {error && (
            <p className="text-red-600 text-xs mt-2 font-mono flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {error}
            </p>
          )}
        </div>

        {/* 6. Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 py-3.5 px-6 rounded-xl bg-brand-primary text-white font-aldrich text-sm font-bold uppercase tracking-wider hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          {isSubmitting ? (
            <span>{t.buttons.uploading}</span>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.buttons.submit}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default MemberShipPaymentForm;
