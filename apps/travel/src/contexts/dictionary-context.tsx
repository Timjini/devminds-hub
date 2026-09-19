"use client";

import { Dictionary } from "@/app/lib/dictionary";
import React, { createContext, useContext } from "react";

const DictionaryContext = createContext<Dictionary | null>(null);

interface DictionaryProviderProps {
  children: React.ReactNode;
  dictionary: Dictionary;
}

export function DictionaryProvider({
  children,
  dictionary,
}: DictionaryProviderProps) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary(): Dictionary {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
}
