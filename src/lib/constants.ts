export const companyInfo = {
  name: 'Mako®',
  fullName: 'Mako Construções e Montagens Industriais Ltda.',
  description: 'Soluções Industrial',
  cnpj: '04.643.991/0001-81',
  founded: '2001',
  phone: '(85) 3214-5678',
  phoneFormatted: '8532145678',
  whatsapp: '(85) 99159-4599',
  whatsappFormatted: '5585991594599',
  email: 'comercial@mako.ind.br',
  emailTechnical: 'tecnico@mako.ind.br',
  address: {
    street: 'Av. Bernardo Manuel, 10271',
    district: 'Parque Dois Irmãos',
    city: 'Fortaleza',
    state: 'CE',
    zipCode: '60761-281',
    fullAddress: 'Av. Bernardo Manuel, 10271 - Parque Dois Irmãos, Fortaleza - CE, 60761-281',
  },
  location: {
    lat: -3.8087753,
    lng: -38.5542958,
  },
  workingHours: {
    weekdays: 'Segunda a Sexta: 8h às 18h',
    saturday: 'Sábado: 8h às 12h',
    sunday: 'Domingo: Fechado',
    full: 'Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/makosolucoesindustriais',
    instagram: 'https://instagram.com/mako_solucoes_industriais',
    facebook: 'https://facebook.com/makosolucoesindustriais',
  },
  certifications: [
    'ISO 9001:2015',
    'NR-12',
    'ABNT NBR 5410',
    'Certificação de Competência Técnica',
  ],
}

export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Empresa', href: '/empresa' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '/contato' },
  ],
  footer: [
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Política de Segurança', href: '/seguranca' },
    { name: 'Trabalhe Conosco', href: '/carreiras' },
    { name: 'Certificações', href: '/certificacoes' },
  ],
}

export const contactFormFields = {
  name: {
    label: 'Nome Completo',
    placeholder: 'Digite seu nome completo',
    required: true,
  },
  company: {
    label: 'Empresa',
    placeholder: 'Nome da sua empresa',
    required: false,
  },
  email: {
    label: 'E-mail',
    placeholder: 'seu@email.com',
    type: 'email',
    required: true,
  },
  phone: {
    label: 'Telefone',
    placeholder: '(00) 00000-0000',
    type: 'tel',
    required: true,
  },
  subject: {
    label: 'Assunto',
    placeholder: 'Sobre o que você quer conversar?',
    required: true,
  },
  message: {
    label: 'Mensagem',
    placeholder: 'Descreva sua necessidade em detalhes...',
    type: 'textarea',
    rows: 4,
    required: true,
  },
}

export const seo = {
  default: {
    title: 'Mako Soluções Industriais',
    description: 'Soluções em Automação Industrial - Tecnologia, eficiência e confiabilidade para sua indústria',
    keywords: 'automação industrial, CLP, sensores, atuadores, painéis industriais, manutenção industrial',
    author: 'Mako Soluções Industriais',
    image: '/images/og-image.jpg',
    url: 'https://mako.ind.br',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Mako Soluções Industriais',
  },
}

