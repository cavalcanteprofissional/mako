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

  return (
    <section className="py-12 md:py-20 bg-white w-full">
      <div className="w-full px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {translate('clients.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {translate('clients.subtitle')}
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="relative group flex items-center justify-center aspect-square rounded-lg transition-all duration-300"
            >
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-contain p-3 md:p-4 group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 14vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}