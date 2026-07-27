# 04 — Página Experiência (experiencia.astro)

## Objetivo

Exibir o histórico profissional de forma clara e escaneável.

## Conteúdo

Cada experiência deve conter:

- Empresa
- Período (mês/ano — mês/ano)
- Cargo
- Descrição curta (2-3 linhas do que fez)
- Tecnologias usadas (tags/badges)

## Experiências previstas

1. **Stone** — cargo, período, descrição, techs
2. **Agroconsult** — cargo, período, descrição, techs
3. **Outras experiências** — anteriores, estágios, etc.

## Forma de armazenamento

Array de objetos em `src/data/experiences.ts`:

```ts
export interface Experience {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: "Stone",
    role: "",
    period: "",
    description: "",
    technologies: [],
  },
]
```

## Layout

- Timeline vertical ou cards em grid
- Cada card com nome da empresa em destaque
- Tags de tecnologia no rodapé do card