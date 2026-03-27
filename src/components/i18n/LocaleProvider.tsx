'use client'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

const locales = ['pt-BR', 'en']

export function LocaleProvider({ 
  children, 
  locale 
}: { 
  children: ReactNode
  locale: string 
}) {
  if (!locales.includes(locale)) notFound()

  const messages = getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
