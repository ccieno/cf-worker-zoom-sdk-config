# zoom-sdk-config — ZCC SDK API Key Worker

A minimal Cloudflare Worker that securely serves the Zoom Contact Centre Web SDK API key to demo pages at runtime. Deployed at `zoom-sdk-config.github-b13.workers.dev`.

## What it does

Exposes a single `GET /config` endpoint that returns the SDK API key as JSON. Demo pages at `demo.eno.solutions` fetch this at load time rather than hardcoding the key in HTML.

## Routes

| Method | Path | Description |
|---|---|---|
| `GET` | `/config` | Returns `{ "apiKey": "..." }` — CORS open to all origins |
| `OPTIONS` | `*` | CORS preflight |

## Secrets required

| Secret | Description |
|---|---|
| `ZOOM_API_KEY` | Zoom Contact Centre Web SDK API key |

Set via:

```bash
npx wrangler secret put ZOOM_API_KEY
```

## Development

```bash
npm run dev      # local dev with wrangler
npx wrangler deploy   # deploy to Cloudflare
```

Single `src/index.js` file — no npm dependencies beyond wrangler.
