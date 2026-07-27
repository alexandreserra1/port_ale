# 06 — Página Blog (blog/index.astro e [...slug].astro)

## Objetivo

Publicar artigos técnicos sobre backend, engenharia de dados, system design, IA e outras áreas.

## Conteúdo

Cada artigo é um arquivo Markdown em `src/content/blog/`:

```md
---
title: "Título do Artigo"
description: "Resumo curto para SEO e listagem"
date: 2026-07-26
tags:
  - python
  - system-design
---

# Título

Conteúdo do artigo em Markdown...
```

## Temas previstos

- Python
- Go e Rust
- System Design
- Engenharia de dados
- IA e RAG

## Rotas

- `/blog` → listagem de todos os artigos (BlogCard)
- `/blog/meu-artigo` → página do artigo completo

## Layout do artigo (BlogLayout.astro)

- Header com navegação
- Título, data e tags no topo
- Conteúdo Markdown renderizado
- Footera de dados