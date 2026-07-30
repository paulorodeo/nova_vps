# Construtora Nova — TopLeo Platform

Landing page institucional de alto padrão construída com **TanStack Start (React 19 + Vite 7)**, **TypeScript** e **Tailwind CSS v4**.
Arquitetura modular por *blocks*, pronta para novas Landing Collections e para deploy em VPS Linux via Docker.

---

## 1. Instalação

```bash
corepack enable          # Node 24 LTS + pnpm
pnpm install
cp .env.example .env
pnpm dev                 # http://localhost:8080
```

## 2. Build

```bash
pnpm build               # build de produção
pnpm preview             # pré-visualização local do build
pnpm lint                # ESLint + Prettier
```

## 3. Docker

```bash
docker compose build
docker compose up -d
docker compose logs -f
```

A imagem usa **multi-stage build** (deps → build → runner), Node 24 Alpine, usuário sem privilégios
e apenas o diretório `.output` no estágio final. O build define `NITRO_PRESET=node-server`, gerando
um servidor Node autônomo em `.output/server/index.mjs`.

## 4. Deploy em VPS (Ubuntu / AlmaLinux)

```bash
git clone <repo> /opt/construtora-nova && cd /opt/construtora-nova
cp .env.example .env      # ajuste PORT, HOST e VITE_SITE_URL
docker compose up -d --build
```

O container escuta em `127.0.0.1:$PORT`; a publicação é feita pelo proxy reverso.

### Nginx (proxy reverso)

```nginx
server {
  listen 443 ssl http2;
  server_name construtoranova.com.br;

  add_header X-Content-Type-Options "nosniff" always;
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
  add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

### OpenLiteSpeed

Crie um *External App* do tipo **Web Server** apontando para `http://127.0.0.1:3000`
e uma regra de contexto `/` do tipo **Proxy** para esse app. Configure os mesmos
headers de segurança em *Virtual Host > Context > Header Operations*.

## 5. Estrutura de pastas

```
src/
  assets/        imagens locais (importadas pelo Vite → hash + cache imutável)
  blocks/        seções independentes da página (landing/*)
  components/
    common/      primitivos compartilhados (Container, Section*)
    ui/          shadcn/ui
  config/        site.ts, seo.ts, navigation.ts
  constants/     conteúdo estático tipado da landing
  hooks/         hooks reutilizáveis (useDisclosure, use-mobile)
  layouts/       LandingLayout
  lib/           seo, utils, infraestrutura de erro
  routes/        rotas file-based do TanStack Router
  types/         tipagens globais (landing, navigation)
  utils/         formatters puros
  styles.css     design tokens + Tailwind v4
```

Pastas **não criadas** e o porquê:
- `app/` — o roteamento file-based já vive em `src/routes/`; uma pasta `app/` duplicaria o conceito.
- `services/` — o projeto é 100% estático, sem chamadas a APIs. Será criada quando houver integração.

## 6. Variáveis de ambiente

| Variável | Escopo | Descrição |
| --- | --- | --- |
| `HOST` | servidor | Interface de bind (padrão `0.0.0.0`) |
| `PORT` | servidor | Porta HTTP (padrão `3000`) |
| `NODE_ENV` | servidor | `production` em deploy |
| `VITE_SITE_URL` | público | URL canônica usada em SEO/sitemap |
| `VITE_SITE_PHONE_DIGITS` | público | Número do WhatsApp (somente dígitos) |

Variáveis com prefixo `VITE_` vão para o bundle do browser — **nunca** coloque segredos nelas.
Segredos server-side devem ser lidos dentro de handlers (`createServerFn`).

## 7. Atualização

```bash
git pull
docker compose up -d --build
docker image prune -f
```

## 8. Convenções TopLeo

- Um *block* = uma responsabilidade; sem acoplamento entre blocks.
- Conteúdo em `constants/`, configuração em `config/`, tipos em `types/`.
- Componentes em PascalCase; hooks em camelCase com prefixo `use`.
- Nenhum dado institucional hardcoded dentro de componentes.
