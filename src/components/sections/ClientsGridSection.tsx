'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

interface Client {
  id: string
  name: string
  image: string
}

const clients: Client[] = Array.from({ length: 39 }, (_, i) => ({
  id: String(i + 1),
  name: `Cliente ${i + 1}`,
  image: `/images/clients/Prancheta ${i + 1}.png`,
}))

export default function ClientsGridSection() {
  const { t } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  const distributions = [6, 7, 6, 7, 6, 7]
  const rows: Client[][] = []
  let currentIndex = 0

  for (const count of distributions) {
    rows.push(clients.slice(currentIndex, currentIndex + count))
    currentIndex += count
  }

  return (
    <section className="py-20 bg-white overflow-hidden w-full">
      <div className="w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {translate('clients.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {translate('clients.subtitle')}
          </p>
        </div>

        <div className="flex flex-col items-center px-4">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-6"
              style={{
                width: rowIndex % 2 === 1 ? 'calc(100% - 40px)' : '100%',
                maxWidth: rowIndex % 2 === 1 ? 'calc(100% - 40px)' : '100%'
              }}
            >
              {row.map((client) => (
                <div
                  key={client.id}
                  className="relative w-28 h-28 md:w-32 md:h-32 group"
                >
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                      sizes="128px"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}