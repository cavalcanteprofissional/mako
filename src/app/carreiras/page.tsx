import type { Metadata } from 'next'
import CarreirasClient from './CarreirasClient'

export const metadata: Metadata = {
  title: 'Trabalhe Conosco - Mako Soluções Industriais',
  description: 'Junte-se à equipe Mako! Vagas para engenheiros, técnicos e especialistas em automação industrial. Cresça profissionalmente conosco.',
  openGraph: {
    title: 'Trabalhe Conosco - Mako Soluções Industriais',
    description: 'Oportunidades de carreira em automação industrial. Venha fazer parte da nossa equipe.',
    url: '/carreiras',
  },
}

export default function CarreirasPage() {
  return <CarreirasClient />
}
