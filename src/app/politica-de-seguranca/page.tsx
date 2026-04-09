import type { Metadata } from 'next'
import PoliticaSegurancaClient from './PoliticaSegurancaClient'

export const metadata: Metadata = {
  title: 'Política de Segurança - Mako Soluções Industriais',
  description: 'Conheça nossa política de segurança, saúde e meio ambiente. Compromisso com a excelência em SMS.',
  openGraph: {
    title: 'Política de Segurança - Mako Soluções Industriais',
    description: 'Compromisso com a segurança, saúde e meio ambiente em todas as nossas operações.',
    url: '/politica-de-seguranca',
  },
}

export default function PoliticaSegurancaPage() {
  return <PoliticaSegurancaClient />
}
