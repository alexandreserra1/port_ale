# 00 — Visão Geral

## Objetivo

Portfólio pessoal + blog técnico, hospedado no GitHub Pages.

## Tech Stack

| Camada          | Escolha         |
| --------------- | --------------- |
| Framework       | Astro           |
| Linguagem       | TypeScript      |
| Estilização     | CSS próprio     |
| Conteúdo        | Markdown (blog) |
| Dados           | TypeScript (experiências e projetos) |
| Deploy          | GitHub Pages + GitHub Actions |

## Por que Astro?

- Geração estática — perfeito para portfólio + blog
- Suporte nativo a Markdown com frontmatter
- Pouco ou nenhum JS no navegador
- Ótimo SEO
- Deploy simples no GitHub Pages

## Repositório

```text
alexandreserra.github.io
```

O site publicado em:

```text
https://alexandreserra.github.io
```

## Limitações

GitHub Pages serve apenas conteúdo estático. Não é possível rodar FastAPI, Django, banco de dados ou autenticação server-side. O formulário de contato precisará de serviço externo (ex.: mailto, formulário serverless, API separada).