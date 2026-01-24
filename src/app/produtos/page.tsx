import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProductsPage from './ProductsPage'

export const metadata: Metadata = {
  title: 'Produtos - Mako Soluções Industriais',
  description: 'Conheça nossa linha completa de produtos para automação industrial: CLPs, sensores, atuadores, painéis e software das melhores marcas.',
  openGraph: {
    title: 'Produtos - Mako Soluções Industriais',
    description: 'Linha completa de produtos para automação industrial',
    url: '/produtos',
  },
}

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ProductsPage />
    </Suspense>
  )
}