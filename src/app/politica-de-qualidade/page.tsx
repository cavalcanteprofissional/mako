import type { Metadata } from 'next'
import PoliticaQualidadeClient from './PoliticaQualidadeClient'

export const metadata: Metadata = {
  title: 'Política de Qualidade - Mako Soluções Industriais',
  description: 'Conheça nossa política de qualidade. Compromisso com a excelência em todos os serviços.',
  openGraph: {
    title: 'Política de Qualidade - Mako Soluções Industriais',
    description: 'Compromisso com a qualidade e satisfação total de clientes, funcionários e parceiros.',
    url: '/politica-de-qualidade',
  },
}

export default function PoliticaQualidadePage() {
  return <PoliticaQualidadeClient />
}
