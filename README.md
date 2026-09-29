# shinyanogit.github.io

Built assets for Shinya Yamaguchi's public portfolio at `https://shinyanogit.github.io/`.

## Source

- Editable source: `Shinyanogit/Vocabry`, under `website/`
- Content and deployment rules: `Vocabry/docs/17_PORTFOLIO_SITE.md`
- Source revision for this build: `18ec00b82d22584d4aa9812f44a5b11626021d71`

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
