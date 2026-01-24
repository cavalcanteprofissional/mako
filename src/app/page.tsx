import HeroSection from '@/components/sections/HeroSection'
import DiferenciaisSection from '@/components/sections/DiferenciaisSection'
import ClientesSection from '@/components/sections/ClientesSection'
import { Section } from '@/components/ui'

export default function Home() {
  return (
    <>
      <HeroSection />
      <DiferenciaisSection />
      <ClientesSection />
      
      {/* CTA Final */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pronto para <span className="text-gradient">Transformar</span> Sua Indústria?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções de automação podem aumentar a produtividade e eficiência da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="btn-primary"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="https://wa.me/5585987654321?text=Olá! Gostaria de mais informações sobre seus serviços." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
