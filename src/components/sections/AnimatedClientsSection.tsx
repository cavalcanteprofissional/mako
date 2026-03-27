'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { useMemo } from 'react'

interface Client {
  id: string
  name: string
  image: string
}

export default function AnimatedClientsSection() {
  const { t, locale } = useLanguage()

  const clients = useMemo(() => 
    Array.from({ length: 39 }, (_, i) => ({
      id: String(i + 1),
      name: `Cliente ${i + 1}`,
      image: `/images/clients/Prancheta ${i + 1}.png`,
    })), []
  )

  const clientsForScroll = useMemo(() => 
    [...clients, ...clients, ...clients], 
    [clients]
  )

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' && result !== key ? result : key
  }

  const clientsTitle = translate('clients.title')
  const clientsSubtitle = translate('clients.subtitle')

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden w-full" key={locale}>
      <div className="w-full">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {clientsTitle}
          </h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed">
            {clientsSubtitle}
          </p>
        </div>

        <div className="relative w-full">
          <div className="relative overflow-hidden mb-6 md:mb-8">
            <div
              className="flex space-x-8 md:space-x-12 animate-scroll-slow"
              style={{
                animation: 'scroll-left 25s linear infinite',
              }}
            >
              {clientsForScroll.map((client, index) => (
                <div
                  key={`${client.id}-row1-${index}`}
                  className="flex-shrink-0 relative w-16 h-16 md:w-24 md:h-24 group"
                >
                  <div className="w-full h-full flex items-center justify-center p-2 md:p-3 group-hover:scale-105 transition-all duration-300">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                      sizes="64px md:96px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden mb-6 md:mb-8">
            <div
              className="flex space-x-8 md:space-x-12 animate-scroll-slow"
              style={{
                animation: 'scroll-right 30s linear infinite',
              }}
            >
              {clientsForScroll.slice().reverse().map((client, index) => (
                <div
                  key={`${client.id}-row2-${index}`}
                  className="flex-shrink-0 relative w-16 h-16 md:w-24 md:h-24 group"
                >
                  <div className="w-full h-full flex items-center justify-center p-2 md:p-3 group-hover:scale-105 transition-all duration-300">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                      sizes="64px md:96px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-slow {
          will-change: transform;
        }

        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
