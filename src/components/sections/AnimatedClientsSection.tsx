'use client'

import Image from 'next/image'

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

export default function AnimatedClientsSection() {
  const clientsForScroll = [...clients, ...clients]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empresas que <span className="text-gradient">Inspiram</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Trabalhamos com as melhores empresas do mercado industrial
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden mb-8">
            <div
              className="flex space-x-12 animate-scroll-slow"
              style={{
                animation: 'scroll-left 29s linear infinite',
              }}
            >
              {clientsForScroll.map((client, index) => (
                <div
                  key={`${client.id}-row1-${index}`}
                  className="flex-shrink-0 relative w-24 h-24 group"
                >
                  <div className="w-full h-full rounded-xl shadow-soft flex items-center justify-center p-3 group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                      sizes="96px"
                    />
                  </div>
                  <div className="absolute inset-x-0 -bottom-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-gray-600 font-medium truncate px-2">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden mb-8">
            <div
              className="flex space-x-12 animate-scroll-slow"
              style={{
                animation: 'scroll-right 37s linear infinite',
              }}
            >
              {clientsForScroll.slice().reverse().map((client, index) => (
                <div
                  key={`${client.id}-row2-${index}`}
                  className="flex-shrink-0 relative w-24 h-24 group"
                >
                  <div className="w-full h-full rounded-xl shadow-soft flex items-center justify-center p-3 group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                      sizes="96px"
                    />
                  </div>
                  <div className="absolute inset-x-0 -bottom-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-primary-600 font-medium truncate px-2">
                      {client.name}
                    </p>
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
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
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
