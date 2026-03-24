# Arca de Thassalar

Um jogo de realidade alternativa dark fantasy em Next.js 14 com Tailwind CSS e Framer Motion.

## 🎮 Características

- **Landing Page** - Intro cinematográfica com compass rotativo
- **Mapa Interativo** - Navegação entre 3 reinos
- **Taverna** - Feed social com posts, reações e comentários
- **Painel Admin** - Gerenciamento de capítulos (protegido por senha)
- **Sistema Sanidade** - Contador global que aumenta a cada 10 segundos
- **UI Dark Fantasy** - Design com preto, vermelho e dourado
- **Animações Suaves** - Powered by Framer Motion

## 📁 Estrutura do Projeto

```
arca-de-thassalar/
├── app/
│   ├── layout.js           # Layout raiz
│   ├── page.js             # Landing page (/)
│   ├── globals.css         # Estilos globais
│   ├── map/
│   │   └── page.js         # Mapa interativo (/map)
│   ├── taverna/
│   │   └── page.js         # Taverna social (/taverna)
│   └── admin/
│       └── page.js         # Painel admin (/admin) - Senha: 828282
├── components/
│   ├── Compass.jsx         # Compass rotativo + navegação
│   ├── WorldMap.jsx        # Feed social
│   ├── PostCard.jsx        # Card de post com reações
│   └── SanityProvider.jsx   # Provider de sanidade global
├── lib/
│   └── sanity.js           # Gerenciador de sanidade global
├── public/                 # Assets estáticos
├── next.config.js          # Config Next.js
├── tailwind.config.js      # Config Tailwind
├── postcss.config.js       # Config PostCSS
├── jsconfig.json           # Path aliases
└── package.json            # Dependencies
```

## 🚀 Como Executar

### Instalação de dependências
```bash
npm install
```

### Modo desenvolvimento
```bash
npm run dev
```
Abra http://localhost:3000 no seu navegador.

### Build para produção
```bash
npm run build
npm start
```

## 🎯 Funcionalidades por Página

### 1. **Landing Page** (`/`)
- Tela preta inicial
- Texto: "Se você está aqui... então já está dentro do jogo."
- Compass surge após 1 segundo
- Navegação via compass para `/map`

### 2. **Mapa** (`/map`)
- Background escuro com efeito fog
- 3 ilhas interativas e clicáveis:
  - 📚 **Leitura** → Biblioteca (placeholder)
  - 🍺 **Taverna** → Feed social
  - 👑 **Núcleo** → Painel administrativo
- Hover = glow effect
- Clique = navegação

### 3. **Taverna** (`/taverna`)
- Feed de posts com crônicas
- Posts contêm:
  - Conteúdo
  - Autor e data
  - Reações: 🔥 🧠 👁️ 💀
  - Comentários (local state)
- Sistema Sanidade: Se > 5 → texto com distorção (flickering)

### 4. **Admin** (`/admin`)
- Tela de login
- **Senha**: `828282`
- Dashboard com:
  - Campo para criar novo capítulo
  - Lista de capítulos criados
  - Botão deletar para cada capítulo
  - Logout

## 🎨 Paleta de Cores

- **Preto**: `#0a0a0a` (bg principal)
- **Cinza Escuro**: `#1a1a1a` (bg secundário)
- **Dourado**: `#D4AF37` (texto/destaque)
- **Vermelho Sangue**: `#8B0000` (acentos alert)

## ✨ Sistema Sanidade Global

- Incrementa 1 ponto a cada 10 segundos
- Se sanidade > 5:
  - Componentes recebem classe `animate-flicker`
  - Texto oscila levemente em opacidade
- Máximo: 10 pontos
- Gerenciado por `SanityManager` em `/lib/sanity.js`

## 📦 Dependências Principais

- **Next.js 14** - Framework React
- **React 18+** - Library UI
- **Framer Motion** - Animações
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing

## 🔧 Tecnologias

- ✅ JavaScript (sem TypeScript)
- ✅ Client-side State Management
- ✅ Modular Components
- ✅ Smooth Animations
- ✅ Dark Fantasy UI
- ✅ Responsive Design

## 📝 Notas de Desenvolvimento

- Todos os componentes usam `'use client'` para interatividade
- Sistema Sanidade é global e afeta todos os componentes
- Estado de posts/chapters é local em cada página
- Imports usam alias `@/` para melhor organização
- CSS customizado em `globals.css` com Tailwind

## 🎭 Atmosfera

O projeto cria uma experiência imersiva dark fantasy onde o usuário explora um reino misterioso. A interface evoca mistério, com animações suaves que contribuem para a atmosfera. O sistema Sanidade é um mecanismo gamificado que simula degradação gradual - um conceito comum em jogos de horror/psychológicos.

---

**Desenvolvido com escuridão e ouro.** ⚰️✨