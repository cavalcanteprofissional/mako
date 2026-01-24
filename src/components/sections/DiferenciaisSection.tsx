import Image from 'next/image'
import { Card, Badge } from '@/components/ui'
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Award, 
  Users 
} from 'lucide-react'

export default function DiferenciaisSection() {
  const diferenciais = [
    {
      icon: Zap,
      title: 'Alta Performance',
      description: 'Soluções que aumentam a produtividade e reduzem custos operacionais',
      features: ['Otimização de processos', 'Redução de desperdícios', 'Maior eficiência'],
      color: 'from-primary-500 to-primary-400',
    },
    {
      icon: Shield,
      title: 'Segurança e Confiabilidade',
      description: 'Projetos com padrões internacionais de qualidade e segurança',
      features: ['Certificação ISO 9001', 'NR-12 Compliance', 'Testes rigorosos'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidade',
      description: 'Sistemas preparados para crescer junto com seu negócio',
      features: ['Design modular', 'Fácil expansão', 'Futuro-prova'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Atendimento 24/7',
      description: 'Suporte técnico permanente para máxima disponibilidade',
      features: ['Equipe de plantão', 'Resposta rápida', 'Manutenção preventiva'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Mais de 500 projetos realizados em diversos segmentos',
      features: ['+8 anos de mercado', 'Clientes satisfeitos', 'Cases de sucesso'],
      color: 'from-indigo-500 to-primary-500',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e constantemente atualizados',
      features: ['Engenheiros certificados', 'Treinamento contínuo', 'Expertise técnica'],
      color: 'from-teal-500 to-cyan-500',
    },
  ]

  return (
    <section id="diferenciais" className="section-gradient py-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Nossos Diferenciais
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a <span className="text-gradient">Mako</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Diferenciamo-nos pela combinação de tecnologia avançada, 
            equipe especializada e compromisso com resultados excepcionais
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={item.title}
                hover={true}
                className="group relative overflow-hidden"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para transformar sua indústria?
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Fale com nossos especialistas e descubra como podemos levar 
              sua operação ao próximo nível de eficiência
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                Falar com Especialista
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200">
                Ver Portfólio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}