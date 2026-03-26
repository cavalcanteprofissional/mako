'use client'

import BrazilHeatmap from 'react-brazil-heatmap'

interface Location {
  id: string
  name: string
  state: string
  isHeadquarters?: boolean
}

const locations: Location[] = [
  { id: '1', name: 'Fortaleza', state: 'CE', isHeadquarters: true },
  { id: '2', name: 'Recife', state: 'PE' },
  { id: '3', name: 'Salvador', state: 'BA' },
  { id: '4', name: 'Belo Horizonte', state: 'MG' },
  { id: '5', name: 'São Paulo', state: 'SP' },
  { id: '6', name: 'Brasília', state: 'DF' },
  { id: '7', name: 'Goiânia', state: 'GO' },
  { id: '8', name: 'Cuiabá', state: 'MT' },
  { id: '9', name: 'Curitiba', state: 'PR' },
  { id: '10', name: 'Florianópolis', state: 'SC' },
  { id: '11', name: 'Porto Alegre', state: 'RS' },
]

const data: Record<string, number> = {
  CE: 2,
  PE: 1,
  BA: 1,
  MG: 1,
  SP: 1,
  DF: 1,
  GO: 1,
  MT: 1,
  PR: 1,
  SC: 1,
  RS: 1,
}

const colorRange: [string, string] = ['#46ae4d', '#113c21']

export default function BrazilMapSection() {
  return (
    <section className="py-20 bg-white overflow-hidden w-full">
      <div className="w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Presença <span className="text-gradient">Nacional</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Atuamos em todo o território brasileiro com expertise e qualidade
          </p>
        </div>

        <div className="w-full px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <BrazilHeatmap
              data={data}
              colorRange={colorRange}
            />
          </div>
        </div>

        <div className="text-center mb-8 px-4">
          <p className="text-lg font-medium text-gray-700">
            Estados com atuação da Mako®:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 px-4 max-w-3xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                location.isHeadquarters 
                  ? 'bg-primary-900 text-white' 
                  : 'bg-primary-500 text-white'
              }`}
            >
              <span>{location.state}</span>
              <span className="text-white/70 text-sm">- {location.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 px-4">
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-lg">
            <span className="w-3 h-3 rounded-full bg-primary-900"></span>
            <span className="text-sm text-gray-600">
              <strong>Sede:</strong> Fortaleza/CE
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}