# Mako Soluções Industriais

Website institucional da **Mako Soluções Industriais**, empresa especializada em soluções de engenharia industrial com mais de 24 anos de experiência, focada em automação, projetos e manutenção industrial.

**Fundada em:** 2001 | **Sede:** Fortaleza - CE, Brasil | **Certificação:** ISO 9001

---

## Tecnologias

| Categoria | Tecnologias |
|-----------|--------------|
| **Framework** | Next.js 16 com App Router |
| **UI** | React 19 + TypeScript |
| **Estilização** | Tailwind CSS |
| **Animações** | Framer Motion |
| **Validação** | React Hook Form + Zod |
| **Mapas** | Leaflet + React Brazil Heatmap |
| **Ícones** | Lucide React |

---

## Começando

### Pré-requisitos

- Node.js 20+
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Entrar no diretório
cd mako

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Executa verificação de código |

---

## Estrutura do Projeto

```
src/
├── app/                      # Páginas Next.js (App Router)
│   ├── carreiras/           # Trabalhe Conosco
│   ├── certificacoes/       # Certificações
│   ├── clientes/            # Clientes
│   ├── como-fazemos/        # Metodologia
│   ├── contato/             # Contato
│   ├── home/                # Página inicial
│   ├── o-que-fazemos/       # Serviços
│   ├── politica-de-*/       # Políticas
│   └── quem-somos/          # Quem Somos
├── components/
│   ├── layout/              # Header, Footer, Menu
│   ├── sections/            # Seções das páginas
│   ├── forms/               # Formulários
│   └── ui/                  # Componentes reutilizáveis
├── context/
│   └── LanguageContext.tsx  # Contexto de internacionalização
├── lib/
│   └── mockData.ts          # Dados mockados
├── messages/
│   ├── pt-BR.json           # Traduções português
│   └── en.json              # Traduções inglês
└── types/
    └── index.ts             # Tipos TypeScript
```

---

## Internacionalização

O projeto suporta múltiplos idiomas com persistência em localStorage.

### Idiomas Disponíveis

- **Português Brasileiro (pt-BR)** — Padrão
- **English (en)**

### Como Usar

```tsx
import { useLanguage } from '@/context/LanguageContext'

export default function MeuComponente() {
  const { locale, setLocale, t } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' && result !== key ? result : key
  }

  return (
    <div>
      <h1>{translate('hero.title')}</h1>
      <button onClick={() => setLocale('en')}>EN</button>
    </div>
  )
}
```

### Adicionar Novas Traduções

Edite os arquivos em `src/messages/`:

```json
// pt-BR.json ou en.json
{
  "secao": {
    "titulo": "Meu Título",
    "descricao": "Minha descrição"
  }
}
```

---

## Metodologia

A Mako aplica metodologias reconhecidas internacionalmente:

- **PMBOK** (Project Management Body of Knowledge)
- **CPM** (Capital Project Management)
- **CDIO** (Conceive-Design-Implement-Operate)
- **BIM** (Building Information Modeling)

---

## Páginas

| Página | Rota | Descrição |
|--------|------|-----------|
| Home | `/` | Página principal com hero, estatísticas e serviços |
| Quem Somos | `/quem-somos` | História, equipe executiva e certificações |
| O Que Fazemos | `/o-que-fazemos` | Serviços oferecidos |
| Como Fazemos | `/como-fazemos` | Metodologia e processos |
| Clientes | `/clientes` | Clientes em destaque |
| Contato | `/contato` | Formulário e informações de contato |
| Carreiras | `/carreiras` | Vagas e candidatura |
| Certificações | `/certificacoes` | Certificados e credenciais |

---

## Contato

| Canal | Informação |
|-------|------------|
| **Telefone** | +55 85 99159-4599 |
| **WhatsApp** | +55 85 9 9159-4599 |
| **E-mail** | possofalar1@mako.ind.br |
| **Website** | mako.ind.br |
| **LinkedIn** | @makosolucoesindustriais |

---

## Autor

Desenvolvido por **Lucas Cavalcante dos Santos**.

---

## Licença

Este projeto está sob a licença **BSD 3-Clause**.  
Consulte o arquivo [LICENSE](LICENSE) para mais informações.

Copyright © 2026 Lucas Cavalcante dos Santos.
