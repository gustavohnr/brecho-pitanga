# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/0e223259-e5aa-4369-9c82-3473ffd68097

## Brechó da Pitanga — Frontend

Este repositório contém a interface do Brechó da Pitanga, um site de vitrine/descontos construído com React + Vite e estilizado com Tailwind CSS / shadcn-ui.

**Observações rápidas sobre os assets visuais**
- O logo principal do cabeçalho foi substituído por `public/pitanga-sticker.png`.
- O padrão de fundo branco está em `public/pattern-branco.svg` e é aplicado globalmente pela camada decorativa (`.page-bg`).
- A placa superior rosa é `page-bg-top` (definida em `src/index.css`) e fica por cima do padrão de fundo.

**Repositório remoto**: https://github.com/gustavohnr/brecho-pitanga

## Rodando em desenvolvimento

Requisitos: Node.js (recomendado via `nvm`) e pnpm/npm/yarn.

```sh
# instalar dependências
npm install

# rodar servidor de desenvolvimento (Vite)
npm run dev

# build de produção
npm run build

# rodar linter/formatador (se configurado)
npm run lint
npm run format
```

Abra `http://localhost:5173` (ou endereço mostrado no terminal) para ver o app.

## Estrutura relevante
- `public/` — contém `pitanga-sticker.png`, `pattern-branco.svg` e outros assets estáticos.
- `src/index.css` — estilos globais e utilitários; contém as regras para `.page-bg` e `.page-bg-top`.
- `src/components/Header.tsx` — header com logo animado.
- `src/components/Navbar.tsx` — navbar superior.
- `src/pages/` — páginas do site (Home, Sobre, Contato, Admin).

## Notas de deploy
- O projeto é um app estático (Vite) — pode ser hospedado em Netlify, Vercel, GitHub Pages, Surge, etc.
- Para deploy em Vercel/Netlify, conecte o repositório `https://github.com/gustavohnr/brecho-pitanga` e use `npm run build` como comando de build.

## Próximos passos sugeridos
- Verificar visualmente localmente (`npm run dev`) e ajustar `src/index.css` caso queira mudar escala/posição do pattern (`background-size`, `background-position`).
- Se preferir que o pattern fique visível também através de cards, revisar as cores/fundos dos componentes (remover `bg-white` de contêineres onde for aceitável).

## Contato
Se precisar que eu ajuste o README com mais detalhes (ex.: comandos de teste, CI/CD, ou notas sobre o design), diga o que quer acrescentar.

---
_README atualizado automaticamente pelo script local._
- React
