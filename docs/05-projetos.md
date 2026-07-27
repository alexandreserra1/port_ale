# 05 — Página Projetos (projetos.astro)

## Objetivo

Mostrar seus projetos com detalhes suficientes para impressionar e permitir acesso rápido ao código e demonstração.

## Conteúdo de cada projeto

- Nome do projeto
- Descrição (2-4 linhas explicando o problema e a solução)
- Tecnologias utilizadas (tags/badges)
- Imagem / screenshot (opcional)
- Link do GitHub
- Link de demonstração (se aplicável)

## Forma de armazenamento

Array de objetos em `src/data/projects.ts`:

```ts
export interface Project {
  title: string
  description: string
  technologies: string[]
  image?: string
  githubUrl: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: "",
    description: "",
    technologies: [],
    image: "/images/projects/projeto-x.png",
    githubUrl: "https://github.com/...",
    demoUrl: "https://...",
  },
]
```

## Layout

- Grid de cards (2-3 colunas, responsivo)
- Cada card com imagem no topo, descrição, tags, e links no rodapé
- Efeito hover sutil (ex.: elevação do card)