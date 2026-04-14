'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'Engenharia Industrial de Excelência',
      subtitle: 'Qualidade, custo e prazo em projetos de Desenvolvimento, Engenharia & Construção',
      description: 'Soluções completas em projetos industriais com metodologia PMBOK, CPM, CDIO, BIM e certificação ISO 9001',
      image: '/images/hero/hero-1.jpeg',
      primaryCta: {
        text: 'Solicitar Orçamento',
        href: '/contato',
      },
      secondaryCta: {
        text: 'Nossos Serviços',
        href: '/o-que-fazemos',
      },
    },
    {
      id: 2,
      title: 'Obras e Instalações Industriais',
      subtitle: 'Execução com excelência e segurança',
      description: 'Projetos civis, elétricos, mecânicos e de segurança com conformidade NR10, NR12, NR13, NR18, NR35',
      image: '/images/hero/hero-2.png',
      primaryCta: {
        text: 'Serviços',
        href: '/o-que-fazemos',
      },
      secondaryCta: {
        text: 'Fale com Especialista',
        href: '/contato',
      },
    },
    {
      id: 3,
      title: 'Projetos Industriais em BIM',
      subtitle: 'Tecnologia e inovação para sua indústria',
      description: 'Modelagem BIM para projetos eficientes, sustentáveis e alinhados às melhores práticas de gestão',
      image: '/images/hero/hero-3.png',
      primaryCta: {
        text: 'Ver Portfólio',
        href: '/clientes',
      },
      secondaryCta: {
        text: 'Fale com Especialista',
        href: '#contato',
      },
    },
    {
      id: 4,
      title: 'Automação e Controle',
      subtitle: 'Sistemas inteligentes para sua produção',
      description: 'Aumente a produtividade com tecnologia de ponta',
      image: '/images/hero/hero-4.jpg',
      primaryCta: {
        text: 'Conheça Nossos Serviços',
        href: '/o-que-fazemos',
      },
      secondaryCta: {
        text: 'Fale com Especialista',
        href: '/contato',
      },
    },
    {
      id: 5,
      title: 'Instalações Elétricas Industriais',
      subtitle: 'Segurança e conformidade com normas técnicas',
      description: 'Projetos e executações dentro dos padrões ABNT',
      image: '/images/hero/hero-5.jpg',
      primaryCta: {
        text: 'Solicitar Orçamento',
        href: '/contato',
      },
      secondaryCta: {
        text: 'Ver Serviços',
        href: '/o-que-fazemos',
      },
    },
    {
      id: 6,
      title: 'Montagens Industriais',
      subtitle: 'Experiência e qualidade comprovada',
      description: 'Mais de 20 anos de mercado com excelência em montagem',
      image: '/images/hero/hero-6.jpg',
      primaryCta: {
        text: 'Nossa História',
        href: '/clientes',
      },
      secondaryCta: {
        text: 'Fale Conosco',
        href: '/contato',
      },
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-[60vh] md:h-[65vh] lg:h-[70vh] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-8">
        <button
          onClick={goToPrevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500/90 text-white hover:bg-primary-500 transition-all duration-300"
          aria-label="Slide anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500/90 text-white hover:bg-primary-500 transition-all duration-300"
          aria-label="Próximo slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  )
}