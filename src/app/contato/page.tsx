import type { Metadata } from 'next'
import ContatoClient from './ContatoClient'

export const metadata: Metadata = {
  title: 'Contato - Mako® Soluções Industriais',
  description: 'Entre em contato com a Mako® Soluções Industriais para solicitar orçamentos ou informações sobre nossos serviços de engenharia industrial.',
  openGraph: {
    title: 'Contato - Mako® Soluções Industriais',
    description: 'Entre em contato conosco e descubra como podemos ajudar em seus projetos industriais.',
    url: '/contato',
  },
}

export default function ContatoPage() {
  return <ContatoClient />
}
