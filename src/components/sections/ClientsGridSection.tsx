'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

interface Client {
  id: string
  name: string
  image: string
}

const clients: Client[] = Array.from({ length: 41 }, (_, i) => {
  const ext = [12, 13, 18, 23, 37, 39].includes(i) ? 'png' : 'svg'
  return {
    id: String(i),
    name: `Cliente ${i}`,
    image: `/images/clients/Prancheta ${i}.${ext}`,
  }
})

export default function ClientsGridSection() {
  const { t } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  const hexWidth = 160
  const hexHeight = 140
  const overlapX = -14
  const overlapY = -28

  const rows = [
    clients.slice(0, 7),
    clients.slice(7, 13),
    clients.slice(13, 20),
    clients.slice(20, 26),
    clients.slice(26, 33),
    clients.slice(33, 41),
  ]

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

        {/* Honeycomb Grid - Favo de Mel */}
        <div className="flex flex-col items-center px-4 overflow-x-auto">
          <div className="flex flex-col items-center" style={{ minWidth: 'fit-content' }}>
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex justify-center"
                style={{
                  marginTop: rowIndex > 0 ? `${overlapY}px` : '0',
                  marginLeft: rowIndex % 2 === 1 && rowIndex !== rows.length - 1 ? `${(hexWidth + overlapX) / 2}px` : '0',
                }}
              >
                {row.map((client, colIndex) => (
                  <div
                    key={client.id}
                    className="relative group flex-shrink-0"
                    style={{
                      width: `${hexWidth}px`,
                      height: `${hexHeight}px`,
                      marginLeft: colIndex > 0 ? `${overlapX}px` : '0',
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={client.image}
                        alt={client.name}
                        width={110}
                        height={85}
                        className="object-contain opacity-90 group-hover:opacity-100"
                        sizes="110px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}