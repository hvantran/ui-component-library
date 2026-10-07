# @hvantran/ui-component-library

[![Build and Publish](https://github.com/hvantran/ui-component-library/actions/workflows/publish.yaml/badge.svg)](https://github.com/hvantran/ui-component-library/actions/workflows/publish.yaml)
[![PR Check](https://github.com/hvantran/ui-component-library/actions/workflows/pr-ci.yaml/badge.svg)](https://github.com/hvantran/ui-component-library/actions/workflows/pr-ci.yaml)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Storybook-ff4785?logo=storybook&logoColor=white)](https://hvantran.github.io/ui-component-library/)

Atomic Design UI component library for Project Management microservices. Built with React 18, Tailwind CSS, Vite, and Storybook.

---

## Architecture

- **Atomic Design**: Strict layer hierarchy (`atoms` → `molecules` → `organisms` → `templates`).
- **Tailwind-First**: Utility styling via shared preset (`preset.js`); zero CSS-in-JS runtime.
- **Zero MUI**: Standard React primitives and Tailwind; no `@mui/material` dependencies.
- **Theme Engine**: `ThemeProvider` for light, dark, and system themes.

---

## Package Exports

| Entry | File | Contents |
| :--- | :--- | :--- |
| `.` | `dist/index.mjs` / `dist/index.js` | Components, types, `ThemeProvider`, `cn` utility |
| `./preset` | `preset.js` | Shared Tailwind CSS preset |
| `./styles.css` | `dist/index.css` | Compiled base styles and resets |

---

## Consumer Setup

1. **Add Tailwind preset** to `tailwind.config.js`:
   - `presets: [require('@hvantran/ui-component-library/preset')]`
   - Add `./node_modules/@hvantran/ui-component-library/dist/**/*.{js,mjs}` to `content`.
2. **Import stylesheet** at app entry point:
   - `import '@hvantran/ui-component-library/styles.css'`
3. **Wrap application root** with theme provider:
   - `<ThemeProvider defaultTheme="system">{children}</ThemeProvider>`

---

## Development

```bash
yarn storybook        # Start Storybook dev server (port 6006)
yarn test             # Run Vitest unit tests
yarn type-check       # Run TypeScript checks
yarn build            # Build library bundle into dist/
yarn build-storybook  # Build static Storybook site
```

---

## CI/CD

- **PR Validation** (`pr-ci.yaml`): Type-check, test, build, and Storybook build verification.
- **Release** (`publish.yaml`): On merge to `main`, auto-version, publish to GitHub Packages, and deploy Storybook to GitHub Pages.

---

## License

MIT
