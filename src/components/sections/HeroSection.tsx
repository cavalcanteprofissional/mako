'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { companyInfo } from '@/lib/constants'
import { Button } from '@/components/ui'
import { formatWhatsApp } from '@/lib/utils'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    {
      id: 1,
      title: 'Soluções em Automação Industrial',
      subtitle: 'Tecnologia, eficiência e confiabilidade para sua indústria',
      description: 'Transforme sua produção com sistemas de automação de última geração',
      image: '/images/hero/slide-1.jpg',
      primaryCta: {
        text: 'Solicitar Orçamento',
        href: '/contato',
      },
      secondaryCta: {
        text: 'Fale com Especialista',
        href: '/contato',
      },
    },
    {
      id: 2,
      title: 'Manutenção Industrial Especializada',
      subtitle: 'Máxima disponibilidade para seus equipamentos',
      description: 'Equipe técnica qualificada e pronto atendimento 24/7',
      image: '/images/hero/slide-2.jpg',
      primaryCta: {
        text: 'Serviços de Manutenção',
        href: '/servicos',
      },
      secondaryCta: {
        text: 'Contato Emergencial',
        href: '#contato',
      },
    },
    {
      id: 3,
      title: 'Projetos Sob Medida',
      subtitle: 'Soluções personalizadas para seu negócio',
      description: 'Do diagnóstico à implementação, acompanhamos cada etapa',
      image: '/images/hero/slide-3.jpg',
      primaryCta: {
        text: 'Ver Portfólio',
        href: '/empresa',
      },
      secondaryCta: {
        text: 'Fale com Especialista',
        href: '#contato',
      },
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const handleWhatsAppClick = (message?: string) => {
    const defaultMessage = message || 'Olá! Gostaria de solicitar um orçamento.'
    const formattedMessage = encodeURIComponent(defaultMessage)
    window.open(`https://wa.me/${companyInfo.whatsappFormatted}?text=${formattedMessage}`, '_blank')
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div
              className="animate-fade-in-up"
              key={currentSlide}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-shadow">
                {currentSlideData.title}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-medium">
                {currentSlideData.subtitle}
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
                {currentSlideData.description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700 text-white shadow-xl"
                  onClick={() => handleWhatsAppClick()}
                >
                  <span className="flex items-center">
                    {currentSlideData.primaryCta.text}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </Button>
                <Link href={currentSlideData.secondaryCta.href}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    {currentSlideData.secondaryCta.text}
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  <span>Atendimento 24/7</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                  <span>+500 Projetos Concluídos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                  <span>Certificação ISO 9001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200 lg:left-8"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200 lg:right-8"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Play Video Button (Optional) */}
      <button
        className="absolute bottom-8 right-8 z-20 group"
        onClick={() => {
          // Video modal logic here
        }}
        aria-label="Assistir vídeo institucional"
      >
        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-200">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <Play className="w-5 h-5 text-primary-600 ml-1" />
          </div>
          <span className="text-white text-sm font-medium hidden sm:block">
            Vídeo Institucional
          </span>
        </div>
      </button>
    </section>
  )
}