# Redesign de Landing Page — UNEX

Projeto acadêmico desenvolvido para um estudo dirigido de Front-end e UX/UI. A proposta reinterpreta a landing page de uma instituição de ensino superior com foco em captação de candidatos, clareza de navegação, responsividade e performance.

> **Aviso:** este é um projeto didático e não oficial. Textos, depoimentos, notícias e ilustrações do redesign foram criados para o trabalho e não reproduzem o conteúdo visual do site institucional.

## Tecnologias

- React
- Vite
- CSS Modules
- Framer Motion
- HTML semântico e práticas básicas de SEO/acessibilidade

## Como executar

```bash
npm install
npm run dev
```

O terminal mostrará um endereço local, normalmente `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── AdmissionOptions.jsx
│   ├── Courses.jsx
│   ├── About.jsx
│   ├── Benefits.jsx
│   ├── Campuses.jsx
│   ├── Testimonials.jsx
│   ├── News.jsx
│   ├── LeadForm.jsx
│   └── Footer.jsx
├── data/
│   ├── campuses.js
│   ├── courses.js
│   ├── news.js
│   └── testimonials.js
├── styles/
│   ├── global.css
│   └── LandingPage.module.css
├── App.jsx
└── main.jsx
```

## Decisões de UX/UI

1. O menu principal foi reduzido para os caminhos essenciais da landing page.
2. O CTA de inscrição é consistente no header, hero, cards e formulário.
3. As formas de ingresso foram agrupadas em quatro opções principais.
4. Os cursos podem ser filtrados sem trocar de página.
5. O formulário aparece somente depois de o candidato conhecer cursos, proposta e unidades.
6. O projeto é mobile-first/responsivo e inclui menu adaptado para telas pequenas.
7. Há suporte a `prefers-reduced-motion` para pessoas que reduzem animações no sistema.
8. As ilustrações das unidades são SVGs autorais e usam `loading="lazy"`.
9. O formulário é demonstrativo: nenhum dado é enviado ou armazenado.

## Commits sugeridos

```text
chore: inicia projeto React com Vite
feat: cria header responsivo e hero principal
feat: adiciona formas de ingresso e filtro de cursos
feat: adiciona sobre, diferenciais e unidades
feat: adiciona depoimentos, noticias e formulario de lead
style: finaliza responsividade e animacoes
perf: otimiza assets e carregamento das ilustracoes
seo: adiciona metadados e melhorias semanticas
 docs: adiciona documentacao tecnica do redesign
```

## Publicação no GitHub

Depois de criar um repositório vazio no GitHub:

```bash
git init
git add .
git commit -m "chore: inicia projeto de redesign da Unex"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Deploy na Vercel

1. Entre na Vercel.
2. Importe o repositório do GitHub.
3. A Vercel detectará o Vite automaticamente.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Publique e copie o link gerado para entregar na atividade.
