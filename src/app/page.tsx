import HeroSection from '@/components/sections/HeroSection'
import DiferenciaisSection from '@/components/sections/DiferenciaisSection'
import ClientesSection from '@/components/sections/ClientesSection'
import PageLayout from '@/components/layouts/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <DiferenciaisSection />
      <ClientesSection />
      
      {/* CTA Final */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para <span className="text-yellow-400">Transformar</span> Sua Indústria?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossas soluções de automação podem aumentar a produtividade e eficiência da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contato" 
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
              >
                Solicitar Orçamento
              </a>
              <a 
                href="https://wa.me/5585987654321?text=Olá! Gostaria de mais informações sobre seus serviços." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}