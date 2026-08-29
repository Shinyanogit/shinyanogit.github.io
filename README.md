# shinyanogit.github.io

Built assets for Shinya Yamaguchi's public portfolio at `https://shinyanogit.github.io/`.

## Source

- Editable source: `Shinyanogit/Vocabry`, under `website/`
- Content and deployment rules: `Vocabry/docs/17_PORTFOLIO_SITE.md`
- Source revision for this build: `bcfda16c52ab1a302ca6a91d3e953f526a36d964`

This repository intentionally keeps the static production output at the root because GitHub Pages publishes `main:/` directly.

## Verification

Before copying a build here, run the following in the source repository:

```bash
cd website
npm ci
npm run lint
npm run build
```

After copying `website/dist/` to this repository, verify the home page at desktop and phone widths and confirm that `support.html`, `privacy.html`, and `terms.html` still render.
