# Hostika Hugo Site — Global Rules

## Stack
- Hugo static site generator
- All content: /content/**/*.md (YAML frontmatter)
- All data: /data/**/*.yaml
- All design: /layouts/shortcodes/*.html
- CSS: /static/css/custom.css + domain-pricing.css
- JS: /static/js/main.js

## STRICT RULES
- NEVER write raw HTML inside markdown files
- NEVER modify .html files directly — only shortcodes
- NEVER change CSS unless step explicitly says so
- ALL pricing/plans data goes in /data/*.yaml
- ALL SEO goes in YAML frontmatter

## Workspace
D:\Hugo\10corp\

## Build command
cd D:\Hugo\10corp && .\hugo.exe server --disableFastRender

## When I say "create page X"
1. Read the reference HTML from D:\Hugo\10corp\html\
2. Create shortcodes in /layouts/shortcodes/
3. Create data file in /data/
4. Create markdown in /content/
5. 0 build errors before finishing
