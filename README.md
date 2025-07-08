# NLW Agents

[PT] Projeto desenvolvido durante o evento NLW (Next Level Week) da Rocketseat, focado na criação de uma aplicação web moderna para gerenciamento de salas (rooms).

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultra-rápido
- **React Router DOM** - Roteamento para Single Page Applications

### Styling
- **Tailwind CSS 4** - Framework CSS utility-first
- **Shadcn/ui** - Biblioteca de componentes baseada em Radix UI
- **Lucide React** - Biblioteca de ícones
- **Radix UI** - Primitivos de UI acessíveis

### Estado e Dados
- **TanStack Query (React Query)** - Gerenciamento de estado servidor
- **Class Variance Authority (CVA)** - Utilitário para variantes de classes CSS

### Desenvolvimento
- **Biome** - Linter e formatter alternativo ao ESLint/Prettier
- **Path Mapping** - Importações absolutas com alias `@/`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/           # Componentes de UI (Shadcn/ui)
├── lib/              # Configurações e utilitários
├── pages/            # Páginas da aplicação
├── app.tsx           # Componente raiz
└── main.tsx          # Ponto de entrada
```

## 🔧 Padrões de Projeto

- **Component Composition** - Uso de Radix UI para componentes compostos
- **Custom Hooks** - React Query para gerenciamento de estado
- **Path Mapping** - Importações limpas com alias `@/`
- **Utility-First CSS** - Estilização com Tailwind CSS
- **TypeScript Strict** - Tipagem rigorosa para maior confiabilidade

## ⚙️ Setup e Configuração

### Pré-requisitos
- Node.js (versão 18+)
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório:
```bash
git clone git@github.com:alyssonbarrera/nlw-agents-web.git
cd nlw-agents-web
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Build para Produção

```bash
npm run build
npm run preview
```

## 📦 Scripts Disponíveis

- `dev` - Inicia o servidor de desenvolvimento
- `build` - Gera build de produção
- `preview` - Visualiza build de produção localmente

## 🎯 Funcionalidades

- Criação de salas
- Navegação entre salas
- Interface responsiva e moderna
- Componentes acessíveis

---

Desenvolvido com ❤️ durante o NLW da Rocketseat

---

# [EN] English Version

Project developed during Rocketseat's NLW (Next Level Week) event, focused on creating a modern web application for room management.

## 🚀 Technologies Used

### Frontend
- **React 19** - Library for building user interfaces
- **TypeScript** - JavaScript superset with static typing
- **Vite** - Ultra-fast build tool and dev server
- **React Router DOM** - Routing for Single Page Applications

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui** - Component library based on Radix UI
- **Lucide React** - Icon library
- **Radix UI** - Accessible UI primitives

### State and Data
- **TanStack Query (React Query)** - Server state management
- **Class Variance Authority (CVA)** - Utility for CSS class variants

### Development
- **Biome** - Linter and formatter alternative to ESLint/Prettier
- **Path Mapping** - Absolute imports with `@/` alias

## 📁 Project Structure

```
src/
├── components/
│   └── ui/           # UI Components (Shadcn/ui)
├── lib/              # Configurations and utilities
├── pages/            # Application pages
├── app.tsx           # Root component
└── main.tsx          # Entry point
```

## 🔧 Design Patterns

- **Component Composition** - Using Radix UI for compound components
- **Custom Hooks** - React Query for state management
- **Path Mapping** - Clean imports with `@/` alias
- **Utility-First CSS** - Styling with Tailwind CSS
- **TypeScript Strict** - Strict typing for better reliability

## ⚙️ Setup and Configuration

### Prerequisites
- Node.js (version 18+)
- npm, yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone git@github.com:alyssonbarrera/nlw-agents-web.git
cd nlw-agents-web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the project in development mode:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Access the application at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## 📦 Available Scripts

- `dev` - Starts the development server
- `build` - Generates production build
- `preview` - Previews production build locally

## 🎯 Features

- Room creation
- Room navigation
- Responsive and modern interface
- Accessible components

---

Developed with ❤️ during Rocketseat's NLW
