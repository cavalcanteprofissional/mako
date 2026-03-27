'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import ptBR from '@/messages/pt-BR.json'
import en from '@/messages/en.json'

type Messages = Record<string, unknown>

interface LanguageContextType {
  locale: string
  setLocale: (locale: string) => void
  t: (key: string) => string | string[] | unknown
  messages: Messages
}

const messages: Record<string, any> = {
  'pt-BR': ptBR,
  'en': en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function getInitialLocale(): string {
  if (typeof window === 'undefined') return 'pt-BR'
  
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && (savedLocale === 'pt-BR' || savedLocale === 'en')) {
    return savedLocale
  }
  
  const browserLang = navigator.language
  if (browserLang.startsWith('en')) {
    return 'en'
  }
  
  return 'pt-BR'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState('pt-BR')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initialLocale = getInitialLocale()
    setLocaleState(initialLocale)
    setIsInitialized(true)
  }, [])

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = (key: string): string | string[] | unknown => {
    const keys = key.split('.')
    let value: unknown = messages[locale]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return key
      }
    }
    
    return value
  }

  if (!isInitialized) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, messages: messages[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
