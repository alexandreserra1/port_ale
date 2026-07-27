# 08 — Deploy (GitHub Pages + Actions)

## Fluxo

1. Criar repositório `alexandreserra.github.io`
2. Enviar código com Git
3. Ativar GitHub Pages em Settings → Pages → Source → GitHub Actions
4. Adicionar Action oficial do Astro para build e publish

## Action do Astro para GitHub Pages

Arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## URL final

```
https://alexandreserra.github.io
```

## Manutenção

- Cada push na `main` gera novo deploy automático
- Artigos novos são só adicionar .md em `src/content/blog/` e commitar