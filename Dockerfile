# =========================================
# Node 24 · pnpm (Corepack) · multi-stage
# Alvo: VPS Linux (Ubuntu / AlmaLinux) atrás de Nginx ou OpenLiteSpeed
# Sem Wrangler / Cloudflare / runtime serverless
# =========================================

FROM node:24-alpine AS base
ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# ---------- deps ----------
FROM base AS deps
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

# ---------- build ----------
FROM base AS build
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# vite.config.ts fixa o preset Nitro `node-server`: a saída é .output/
# (.output/server = servidor Node, .output/public = assets estáticos)
RUN pnpm build

# ---------- runtime ----------
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
RUN addgroup -S app && adduser -S app -G app
# .output é autocontido (server + assets públicos); nenhum node_modules necessário
COPY --from=build --chown=app:app /app/.output ./.output
USER app
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
