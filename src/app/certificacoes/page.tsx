import type { Metadata } from 'next'
import CertificacoesClient from './CertificacoesClient'

export const metadata: Metadata = {
  title: 'Certificações - Mako Soluções Industriais',
  description: 'Conheça todas as certificações da Mako. ISO 9001, NR-12, ABNT NBR 5410 e mais. Qualidade e segurança comprovadas.',
  openGraph: {
    title: 'Certificações - Mako Soluções Industriais',
    description: 'Nossas certificações garantem a qualidade e segurança de nossos serviços.',
    url: '/certificacoes',
  },
}

export default function CertificacoesPage() {
  return <CertificacoesClient />
}
