# TODO.md — Projeto Mako® Soluções Industriais

## 📅 Atualizado em: 27/03/2026

---

## ✅ Progresso Concluído

### Home Page
- [x] HeroSection com carrossel de imagens
- [x] HeroServiceOverlay - componente sobreposto ao HeroSection (glassmorphism)
- [x] Sincronização entre slides de imagens e texto do overlay
- [x] CompanyStatsSection ("Nossa Trajetória e Conquistas")
- [x] CompanyValuesSection movido para página Quem Somos
- [x] ServiceDetail abaixo de CompanyStatsSection
- [x] AnimatedClientsSection (logos animados)
- [x] CTASection no final da página (variant dark)
- [x] Responsividade mobile de todos os componentes

### Metodologia de Trabalho
- [x] Áreas de Gerenciamento com ícones e cards interativos
- [x] Layout cards com gradiente verde
- [x] Efeitos hover com animação

### Brazil Map Section
- [x] Legenda ao lado do mapa (lg) / abaixo (mobile)
- [x] Cores das legendas sincronizadas com o mapa

### Responsividade Mobile
- [x] HeroSection: altura adaptada (60vh mobile → 70vh desktop)
- [x] HeroServiceOverlay: padding e textos reduzidos
- [x] CompanyStatsSection: grid, ícones e padding adaptados
- [x] CompanyValuesSection: grid e textos responsivos
- [x] AnimatedClientsSection: logos menores em mobile
- [x] CTASection: botões e textos adaptativos

### Internacionalização (i18n)
- [x] Instalação de next-intl
- [x] Criação de arquivos de tradução (pt-BR.json, en.json)
- [x] Criação do LanguageContext com detecção de idioma
- [x] Botão de troca de idioma no Header (PT/EN)
- [x] Persistência de escolha em localStorage
- [x] Detecção de idioma do navegador
- [x] HeroServiceOverlay: usar traduções
- [x] CompanyStatsSection: usar traduções
- [x] CompanyValuesSection: usar traduções
- [x] CTASection: usar traduções
- [x] AnimatedClientsSection: usar traduções
- [x] ServiceDetail: usar traduções
- [x] Footer: usar traduções
- [x] Header navegação: usar traduções

---

## 🔄 Em Andamento

### i18n - Tarefas de Tradução

#### Etapa 1: Corrigir menu mobile do Header
- [x] Menu mobile usa `item.name` diretamente sem tradução
- [x] Traduzir links de navegação no menu mobile

#### Etapa 2: Traduzir texto do botão WhatsApp
- [x] Traduzir "Solicite seu orçamento" no Header (desktop)
- [x] Traduzir "Contato via WhatsApp" no menu mobile
- [x] Traduzir "Solicitar Orçamento" no botão do menu mobile

#### Etapa 3: Verificar páginas restantes
- [x] Verificar /como-fazemos page.tsx
- [x] Verificar /clientes page.tsx
- [x] Verificar /contato page.tsx

### Certificações
- [ ] Substituir placeholders por imagens reais dos certificados
  - Local: `public/images/certifications/`
  - Imagens necessárias:
    - Certificado ISO 9001:2015
    - Certificação ABNT

---

## 📋 Pendente

### Brazil Map Section
- [ ] Ajustar posicionamento dos marcadores (se for recolocar)
- [ ] Testar nova biblioteca react-brazil-heatmap

---

## 📝 Notas

### Hero Section
- Overlay centralizado com glassmorphism (bg-white/70, backdrop-blur-md)
- Texto e botões sincronizados com as imagens do carrossel
- Dots de navegação apenas no overlay (não no carrossel de imagens)
- Altura: h-[60vh] mobile, h-[65vh] tablet, h-[70vh] desktop

### Company Stats Section
- Texto "Trajetória" e "Conquistas" com text-gradient
- Grid: 2 colunas mobile → 4 colunas desktop
- Cards de confiança com gradiente verde escuro

### CTASection
- Variant "dark" com gradiente verde (primary-900 → primary-800)
- Título com text-gradient na última palavra
- Botões: primário verde, secundário translúcido

### Biblioteca de Mapa
- Usando `react-brazil-heatmap` com `colorRange` para colorir estados
- CE com valor 2 (cor mais escura), demais com valor 1

### i18n - Como Usar
```tsx
import { useLanguage } from '@/context/LanguageContext'

// No componente:
const { locale, setLocale, t } = useLanguage()

// Traduzir:
t('stats.title') // "Nossa Trajetória e Conquistas"
t('cta.requestQuote') // "Solicitar Orçamento"

// Trocar idioma:
setLocale('en') // ou 'pt-BR'
```

### Idiomas Suportados
- PT-BR (Português Brasileiro) - Default
- EN (English)

---

## 🚀 Próximos Passos

1. Testar internacionalização
2. Build do projeto validado com sucesso
3. Adicionar imagens dos certificados ao diretório
4. Atualizar componente CertificationsSection com imagens reais
