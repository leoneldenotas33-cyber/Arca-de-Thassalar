# 🎭 ARCA DE THASSALAR - REFERÊNCIA RÁPIDA DE CÓDIGO

## 📋 LISTA COMPLETA DE ARQUIVOS

### De Configuração
- ✅ `next.config.js`
- ✅ `tailwind.config.js`  
- ✅ `postcss.config.js`
- ✅ `jsconfig.json`
- ✅ `package.json`

### De Estilo
- ✅ `app/globals.css`

### Raiz da App
- ✅ `app/layout.js` (Root layout)
- ✅ `app/page.js` (Landing page /)

### Páginas
- ✅ `app/map/page.js` (/map - Mapa interativo)
- ✅ `app/taverna/page.js` (/taverna - Feed social)
- ✅ `app/admin/page.js` (/admin - Painel administrativo)

### Componentes
- ✅ `components/Compass.jsx` (Compass + navegação)
- ✅ `components/WorldMap.jsx` (Feed de posts)
- ✅ `components/PostCard.jsx` (Card individual)
- ✅ `components/SanityProvider.jsx` (Wrapper sanidade)

### Sistema
- ✅ `lib/sanity.js` (Gerenciador global)

### Documentação
- ✅ `README.md` (Guia principal)
- ✅ `PROJECT_GUIDE.md` (Esta documentação)
- ✅ `CODE_REFERENCE.md` (Este arquivo)

---

## 🔑 CHAVES DE FUNCIONALIDADE

### 1. Sistema Sanidade Global (/lib/sanity.js)
```
- singleton SanityManager
- subscribers pattern
- incrementa a cada 10s
- máximo 10 pontos
- notifica listeners em mudanças
- Se > 5: ativa animate-flicker
```

### 2. Landing Page (/app/page.js)
```
- useEffect com setTimeout 1s
- showCompass state
- motion.div com opacity 0→1
- Compass component overlay
```

### 3. Mapa (/app/map/page.js)
```
- Compass como overlay 60% opacity
- Legend + info boxes
- Sanidade monitor display
- Link para voltar
```

### 4. Taverna (/app/taverna/page.js)
```
- Header com titulo
- Warning box (red border)
- WorldMap component (feed)
```

### 5. WorldMap (/components/WorldMap.jsx)
```
- Estado: posts array
- Cada post tem:
  - id, author, date, content
  - reactions (object com emoji: count)
  - comments array
- handleReaction incrementa count
- handleComment adiciona à array
- PostCard para cada post
```

### 6. PostCard (/components/PostCard.jsx)
```
- Props: post, onReaction, onComment
- showComments state
- newComment state
- reactions local (cópia)
- Botões emoji incrementam local
- Input de comentário com enter
- SanityProvider wrapper
```

### 7. Compass (/components/Compass.jsx)
```
- motion.div animating rotate 360° (20s)
- 3 islands com positions absolutas
- hoveredIsland state
- Links para /taverna e /admin
- SVG com cardinal directions
```

### 8. Admin (/app/admin/page.js)
```
- isAuthenticated state
- password input
- chapters state (array)
- newChapterTitle state
- handleLogin: se password === "828282"
- handleAddChapter: adiciona à array
- handleDeleteChapter: remove de array
```

---

## 🎨 VARIAÇÕES DE LAYOUT

### Dark Theme
- bg-black
- bg-dark (#0a0a0a)
- bg-darkGray (#1a1a1a)
- text-gold (#D4AF37)
- text-blood (#8B0000)

### Shadows & Glows
- shadow-glow: 0 0 20px rgba(212, 175, 55, 0.3)
- shadow-glow-red: 0 0 20px rgba(139, 0, 0, 0.3)
- shadow-glow-strong: 0 0 40px rgba(212, 175, 55, 0.5)

### Animations
- animate-flicker (conditional)
- motion.div rotate/scale/opacity
- transition-all 0.3s ease

---

## 🧩 COMPONENTES REUTILIZÁVEIS

### SanityProvider
Wrapper que aplica animate-flicker se sanidade > 5
```jsx
<SanityProvider>
  <YourComponent />
</SanityProvider>
```

### PostCard
Renderiza post individual com reações
```jsx
<PostCard
  post={post}
  onReaction={handleReaction}
  onComment={handleComment}
/>
```

### Compass
Mapa interativo com navigação
```jsx
<Compass /> // Standalone ou como overlay
```

---

## 📲 DADOS ESTRUTURADOS

### Post Object
```js
{
  id: 1,
  author: "Arcanista",
  date: "Há 2 horas",
  content: "...",
  reactions: { '🔥': 5, '🧠': 3, '👁️': 7, '💀': 1 },
  comments: [
    { author: "Guardião", text: "..." },
    { author: "Sábio", text: "..." }
  ]
}
```

### Chapter Object
```js
{
  id: 1,
  title: "A Fundação",
  date: "2026-03-01"
}
```

### Island Object
```js
{
  id: 1,
  name: "Taverna",
  description: "Núcleo da Verdade",
  link: "/taverna",
  position: { top: "50%", left: "50%" }
}
```

---

## 🔗 ROTAS E NAVEGAÇÃO

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | page.js | Landing com intro |
| `/map` | map/page.js | Mapa interativo |
| `/taverna` | taverna/page.js | Feed social |
| `/admin` | admin/page.js | Painel (senha: 828282) |

---

## 💾 ESTADO GLOBAL vs LOCAL

### Global (SanityManager)
- Sanidade counter
- Afeta UI com animate-flicker
- Incrementa a cada 10s
- É um singleton

### Local (useState)
- Posts em WorldMap
- Chapters em Admin
- Reactions em PostCard
- Comments por post

---

## 🚀 COMO ESTENDER

### Adicionar Nova Página
1. `app/novafeature/page.js`
2. Import 'use client' se tiver interação
3. Import Compass ou WorldMap conforme needed
4. Link do Compass aponta para a rota

### Adicionar Novo Componente
1. `components/NovoComponent.jsx`
2. Export como default
3. Import em layout/page conforme needed

### Adicionar Reação
1. Editar array em PostCard (linha com emoji)
2. Tailwind classe para styling
3. Automáticamente funciona no handleReaction

---

## ⚙️ CONFIGURAÇÕES IMPORTANTES

### jsconfig.json
```
@/* → diretório raiz
```

### tailwind.config.js
```
- dark theme colors
- custom shadows
- keyframes flicker
```

### app/globals.css
```
@import "tailwindcss"
- Custom scrollbar
- Link styling
- Body reset
```

---

## 🔐 Credenciais

**Admin Panel:**
- Usuário: (qualquer)
- Senha: `828282`

---

## ⏱️ Timings

| Evento | Tempo |
|--------|-------|
| Compass aparece | 1 segundo após carregar |
| Sanidade incrementa | A cada 10 segundos |
| Animate-flicker ativa | Se sanidade > 5 |
| Compass rotação | 20 segundos loop |

---

## 📊 MÉTRICAS

- **Número de Componentes**: 4
- **Número de Páginas**: 5 incluindo layout
- **Número de Reações**: 4 tipos
- **Número de Islands**: 3
- **Número de Posts Iniciais**: 3
- **Limite Sanidade**: 10

---

## ✅ CHECKLIST DE FUNCIONALIDADE

- [x] Landing page com intro
- [x] Compass surge após 1s
- [x] Compass rotaciona suavemente
- [x] 3 ilhas clicáveis
- [x] Navigation entre rotas
- [x] Feed de posts com reações
- [x] Sistema de comentários
- [x] Admin panel com login
- [x] CRUD de capítulos
- [x] Sistema sanidade global
- [x] Flickering se sanidade > 5
- [x] Dark UI com gold/red/black
- [x] Animações suaves
- [x] Componentes modulares
- [x] Imports funcionando

---

**Todos os arquivos criados e testados com sucesso! 🎉**
**Pronto para `npm run dev` 🚀**
