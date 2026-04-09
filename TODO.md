# TODO.md — Projeto Mako Soluções Industriais

## 📅 Atualizado em: 27/03/2026

---

## ✅ Concluído

### Internacionalização (i18n)
- [x] Criação de arquivos de tradução (pt-BR.json, en.json)
- [x] Criação do LanguageContext com detecção de idioma
- [x] Botão de troca de idioma no Header (PT/EN)
- [x] Persistência de escolha em localStorage
- [x] Detecção de idioma do navegador
- [x] Todas as páginas traduzidas

### Páginas com Tradução
- [x] Home
- [x] Quem Somos
- [x] O Que Fazemos
- [x] Como Fazemos
- [x] Clientes
- [x] Certificações
- [x] Contato
- [x] Carreiras (Trabalhe Conosco)
- [x] Política de Segurança
- [x] Política de Qualidade

### Componentes
- [x] Header com menu mobile
- [x] Footer
- [x] HeroSection com carrossel
- [x] CompanyStatsSection
- [x] CompanyValuesSection
- [x] AnimatedClientsSection
- [x] BrazilMapSection
- [x] CTASection
- [x] ServiceCard e ServicesList
- [x] LanguageSwitcher

---

## 🔄 Em Andamento

### Hero Section - Overlay de Serviços
- [x] Overlay de serviços ocultado temporariamente
  - Local: `src/components/sections/HeroSection.tsx`
  - Como reverter: Descomentar linhas 141-149
  - Data: 28/03/2026

### Certificações
- [ ] Substituir placeholders por imagens reais dos certificados
  - Local: `public/images/certifications/`

---

## 📝 Notas

### i18n - Como Usar
```tsx
import { useLanguage } from '@/context/LanguageContext'

// No componente:
const { locale, setLocale, t } = useLanguage()

// Função translate:
const translate = (key: string): string => {
  const result = t(key)
  return typeof result === 'string' && result !== key ? result : key
}

// Usar:
// translate('hero.title')

// Trocar idioma:
setLocale('en') // ou 'pt-BR'
```

### Estrutura de Tradução
As traduções seguem o padrão de chaves aninhadas:
```json
{
  "hero": {
    "title": "Título",
    "subtitle": "Subtítulo"
  }
}
```

### Biblioteca de Mapa
- Usando `react-brazil-heatmap` para mapa do Brasil
- CE com valor 2 (cor mais escura), demais com valor 1

---

## 🚀 Próximos Passos

1. Adicionar imagens dos certificados
2. Testar internacionalização em produção
3. Otimizar imagens (Next.js Image)
4. Melhorar performance
