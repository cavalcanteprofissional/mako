export const companyInfo = {
  name: 'Mako Soluções Industriais',
  fullName: 'Mako Soluções Industriais',
  description: 'Soluções completas em Engenharia Industrial',
  cnpj: '04.643.991/0001-81',
  founded: '2001',
  phone: '+55 85 3493.2877',
  phoneFormatted: '558534932877',
  whatsapp: '+55 85 9 9159-4599',
  whatsappFormatted: '558591594599',
  email: 'comercial@mako.ind.br',
  emailTechnical: 'comercial@mako.ind.br',
  address: {
    street: 'Av. Bernardo Manuel, 10271, 1º Andar – Salas A e B',
    district: 'Fortaleza',
    city: 'Fortaleza',
    state: 'CE',
    zipCode: '60.761-281',
    fullAddress: 'Av. Bernardo Manuel, Nº 10271, 1º Andar – Salas A e B, Fortaleza – CE, CEP: 60.761-281',
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
    instagram: 'https://www.instagram.com/makosolucoesind',
    facebook: 'https://www.facebook.com/makosolucoesindustriais',
  },
  certifications: [
    'ISO 9001:2015 (Elaboração de Projetos Industriais) - obtida em 2022',
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
    description: 'Fornecer soluções completas em Engenharia Industrial, atuando com foco na parceria fornecedor/cliente, priorizando qualidade, custo e prazo em projetos de Desenvolvimento, Engenharia & Construção.',
    keywords: 'engenharia industrial, projetos industriais, BIM, ISO 9001, PMBoK, CAPEX, obras industriais, manutenção industrial, suprimentos, licença ambiental, Fortaleza, Ceará, front-end package, fiscalização de obras, segurança do trabalho',
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

