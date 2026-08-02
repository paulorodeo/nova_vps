# Auditoria de imagens + correção dos bloqueantes de deploy em VPS

## Parte 1 — Auditoria de imagens (somente leitura, já executada)

| Arquivo | Caminho | Formato | Dimensões | Peso | Usado em | Dobra | Formato recomendado | Dimensão máx. necessária | Prioridade |
|---|---|---|---|---|---|---|---|---|
| hero-house.jpg | src/assets | JPEG | 1920x1080 | 220 KB | Hero (Home) e hero de /contato | Acima | AVIF/WebP + JPEG fallback | 1920x1080 | Alta (LCP) |
| logo-nova.png | src/assets | PNG | 1716x336 | 302 KB | Header e Footer (todas as páginas) | Acima (header) | SVG, ou PNG/WebP 448x88 | ~224x56 CSS (h-14) | Alta |
| favicon.png | public | PNG | 1716x336 | 302 KB | favicon + apple-touch-icon (__root) | Acima | PNG quadrado 180x180 / .ico | 180x180 | Alta |
| cta-house.jpg | src/assets | JPEG | 1920x1080 | 172 KB | Bloco CallToAction | Abaixo | WebP/AVIF | 1920x1080 | Média |
| casa-residencial.jpg | src/assets | JPEG | 1024x1280 | 159 KB | Specialties (constants/landing) | Abaixo | WebP | ~800x1000 | Média |
| casa-campo.jpg | src/assets | JPEG | 1024x1280 | 316 KB | Specialties + Gallery (2 cards) | Abaixo | WebP | ~800x1000 | Alta (maior peso) |
| casa-praia.jpg | src/assets | JPEG | 1024x1280 | 84 KB | Specialties | Abaixo | WebP | ~800x1000 | Baixa |
| gallery-1.jpg | src/assets | JPEG | 1024x1024 | 110 KB | Gallery | Abaixo | WebP | ~640x640 | Baixa |
| gallery-2.jpg | src/assets | JPEG | 1024x1280 | 83 KB | Gallery | Abaixo | WebP | ~640x800 | Baixa |
| gallery-3.jpg | src/assets | JPEG | 1024x1024 | 108 KB | Specialties + Gallery | Abaixo | WebP | ~640x640 | Baixa |
| gallery-4.jpg | src/assets | JPEG | 1024x1280 | 144 KB | Gallery | Abaixo | WebP | ~640x800 | Média |
| gallery-5.jpg | src/assets | JPEG | 1024x1024 | 80 KB | Gallery | Abaixo | WebP | ~640x640 | Baixa |
| gallery-6.jpg | src/assets | JPEG | 1024x1024 | 229 KB | Gallery | Abaixo | WebP | ~640x640 | Média |

Achados:
- Duplicada: `public/favicon.png` e `src/assets/logo-nova.png` são o mesmo arquivo (md5 idêntico, 1716x336, 302 KB). O favicon é um logo horizontal servido em 302 KB para um ícone de 32px.
- Não utilizadas: nenhuma. Todas as 12 imagens de `src/assets` são referenciadas.
- Maiores que o tamanho de exibição: logo (1716x336 para exibição ~224x56), favicon (1716x336 para 32-180px), e todas as fotos verticais 1024x1280 exibidas em cards de galeria/cards de especialidade.

Nenhuma dessas imagens será alterada nesta entrega (o pedido restringe as correções aos bloqueantes de deploy).

## Parte 2 — Correções de deploy (únicas alterações de arquivo)

### 1. Preset Node no build
`vite.config.ts`: adicionar `nitro: { preset: "node-server" }` ao `defineConfig` existente, mantendo o bloco `tanstackStart` intacto. O wrapper da Lovable só força `cloudflare-module` quando roda dentro do sandbox do editor; fora dele (Docker/VPS) o preset explícito passa a valer, gerando saída Node em `.output/`.

### 2. Dockerfile
- Remover `ENV NITRO_PRESET=node-server` (não é o mecanismo usado) e o fallback `|| pnpm install`.
- Manter Node 24 alpine, Corepack/pnpm, multi-stage, usuário não-root, `EXPOSE 3000`, `HOST=0.0.0.0`, `PORT=3000`.
- Copiar apenas `.output` (que já inclui `.output/public` com favicon/robots/manifest e os assets processados).
- `CMD` apontando para o arquivo de entrada real confirmado pelo build (esperado `.output/server/index.mjs`; será confirmado antes de fixar).

### 3. pnpm-lock.yaml
Gerar `pnpm-lock.yaml` a partir do `package.json` atual e versioná-lo. `bun.lock` é mantido (usado pelo editor) e continua excluído do contexto Docker. Docker usa exclusivamente `pnpm install --frozen-lockfile`.

### 4. docker-compose.yml e healthcheck
- Confirmar porta interna 3000 e `HOST=0.0.0.0` (já corretos).
- Trocar o healthcheck por `wget --spider -q http://127.0.0.1:3000/` (wget existe na imagem alpine), com `interval: 30s`, `timeout: 5s`, `retries: 3`, `start_period: 30s`.
- Manter `restart: unless-stopped` e a publicação apenas em loopback para o proxy reverso.

### 5. Cloudflare
Não há Wrangler nas dependências, nem `wrangler.json`/`wrangler.toml`, nem scripts de deploy Cloudflare no `package.json`. Nada a remover — apenas confirmar no relatório.

### 6. Validação a executar
`pnpm install --frozen-lockfile`; build com o sandbox desativado para reproduzir o comportamento de VPS; listagem do diretório gerado e confirmação do entrypoint; execução local `node <entry>` com `HOST=0.0.0.0 PORT=3000`; `curl -I` na Home e na rota do healthcheck esperando HTTP 200. Docker build/run só se o daemon existir no ambiente — caso contrário será feita inspeção estática e isso ficará explicitamente indicado.

## Fora de escopo
Sem mudanças em Home, rotas, SEO, conteúdo, componentes, arquitetura ou imagens.
