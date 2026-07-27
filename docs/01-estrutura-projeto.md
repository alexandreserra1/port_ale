# 01 — Estrutura do Projeto

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/       → screenshots dos projetos
│   │   └── profile.jpg     → foto de perfil
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── ExperienceCard.astro
│   │   └── BlogCard.astro
│   │
│   ├── layouts/
│   │   ├── MainLayout.astro    → layout principal (header + footer globais)
│   │   └── BlogLayout.astro    → layout do blog (artigos)
│   │
│   ├── pages/
│   │   ├── index.astro         → página inicial
│   │   ├── sobre.astro         → sobre mim
│   │   ├── experiencia.astro   → experiências profissionais
│   │   ├── projetos.astro      → projetos
│   │   ├── contato.astro       → contato
│   │   └── blog/
│   │       ├── index.astro     → listagem de artigos
│   │       └── [...slug].astro → página de cada artigo
│   │
│   ├── content/
│   │   └── blog/               → artigos em Markdown
│   │       └── primeiro-artigo.md
│   │
│   ├── data/
│   │   ├── experiences.ts      → lista de experiências profissionais
│   │   └── projects.ts         → lista de projetos
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
└── README.md
```

## Observações

- `components/`: componentes reutilizáveis entre páginas
- `layouts/`: templates que definem a estrutura HTML das páginas
- `pages/`: cada arquivo .astro vira uma rota automaticamente
- `content/blog/`: artigos escritos em Markdown com frontmatter (título, descrição, data, tags)
- `data/`: arquivos TypeScript com arrays de objetos, fáceis de manter e escalar
