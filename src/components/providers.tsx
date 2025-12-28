"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { dictionary, Language } from "@/lib/dictionary"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof dictionary.id
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function Providers({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Language>("id")

  const value = React.useMemo(() => ({
    language,
    setLanguage,
    t: dictionary[language]
  }), [language])

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    </NextThemesProvider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a Providers")
  }
  return context
}
