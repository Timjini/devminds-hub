"use client";

import { createContext, useContext } from "react";

const LanguageContext = createContext<string>("en");

export function LanguageProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
