# Mako Soluções Industriais

Website institucional da Mako Soluções Industriais, empresa especializada em soluções de engenharia industrial com foco em automação, projetos e manutenção.

## 🛠️ Tecnologias

- **Next.js 16** - Framework React para produção
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **React Hook Form + Zod** - Validação de formulários
- **React Brazil Heatmap** - Mapa do Brasil

## 🚀 Começando

```bash
# Instalar dependências
npm install

# Executar desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start
```

## 🌐 Idiomas

O projeto suporta:
- Português Brasileiro (pt-BR) - Padrão
- English (en)

Para adicionar novas traduções, edite os arquivos:
- `src/messages/pt-BR.json`
- `src/messages/en.json`

## 📁 Estrutura

```
src/
├── app/                  # Páginas Next.js
│   ├── carreiras/       # Trabalhe Conosco
│   ├── certificacoes/   # Certificações
│   ├── clientes/        # Clientes
│   ├── como-fazemos/    # Metodologia
│   ├── contato/         # Contato
│   ├── home/            # Home
│   ├── o-que-fazemos/   # Serviços
│   ├── quem-somos/      # Quem Somos
│   └── politica-*/      # Políticas
├── components/          # Componentes React
│   ├── layout/         # Header, Footer
│   ├── sections/       # Seções da página
│   ├── forms/          # Formulários
│   └── ui/             # Componentes UI
├── context/            # React Context
├── lib/               # Utilitários e dados
├── messages/          # Arquivos de tradução
└── types/             # Tipos TypeScript
```

## 🎨 Padrões de Código

- Componentes de página usam Client Component (`'use client'`)
- Separação: `page.tsx` (metadata) + `*Client.tsx` (conteúdo)
- Use `key={locale}` para forçar re-render ao trocar idioma
- Função translate padrão:
```tsx
const translate = (key: string): string => {
  const result = t(key)
  return typeof result === 'string' && result !== key ? result : key
}
```

## 📝 Licença

Copyright © Mako Soluções Industriais. Todos os direitos reservados.
