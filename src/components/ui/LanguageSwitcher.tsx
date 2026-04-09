'use client'

import { useLanguage } from '@/context/LanguageContext'

const languages = [
  { code: 'pt-BR', name: 'PORTUGUÊS' },
  { code: 'en', name: 'INGLÊS' },
]

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`px-3 py-1.5 text-xs font-medium transition-colors ${
            locale === lang.code
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  )
}