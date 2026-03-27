'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Globe, ChevronDown, Check } from 'lucide-react'

const languages = [
  { code: 'pt-BR', name: 'Português (BR)', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
]

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(l => l.code === locale) || languages[0]

  const handleSelect = (code: string) => {
    setLocale(code)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
        aria-label="Selecionar idioma"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span>{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.code === 'pt-BR' ? 'PT' : 'EN'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-gray-50 transition-colors ${
                  locale === lang.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="flex-1">{lang.name}</span>
                {locale === lang.code && (
                  <Check className="w-4 h-4 text-primary-600" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
