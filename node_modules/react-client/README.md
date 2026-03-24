[![npm](https://img.shields.io/npm/v/react-client.svg)](https://www.npmjs.com/package/react-client)
[![npm](https://img.shields.io/npm/dt/react-client.svg)](https://npm-stat.com/charts.html?package=react-client)
[![GitHub issues](https://img.shields.io/github/issues/venkateshsundaram/react-client.svg)](https://github.com/venkateshsundaram/react-client/issues)

**react-client** is a next-generation CLI and runtime for building React apps with instant feedback, fast iteration, and a beautiful developer experience.

Built for simplicity, designed for speed ⚡

---

## 🚀 Table of Contents
- [Installation](#installation)
- [With Config](#with-config)
- [Available Templates](#available-templates)
- [Core Features](#core-features)
- [How It Works](#how-it-works)
- [Local Development](#local-development)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Publishing](#publishing)
- [Feedback](#feedback)
- [License](#license)

---

## 🧩 Installation

Install globally and scaffold your first app:

```bash
npm install -g react-client
react-client init myapp --template react-ts
cd myapp
npm install
npm run dev
```

This launches the **custom dev server** — built on **Connect + WebSocket + esbuild**, featuring:
- Instant rebuilds  
- React Fast Refresh (HMR)  
- Auto port detection & confirmation prompt  
- In-browser overlay with syntax-highlighted code frames  

---

## ⚙️ With Config

You can generate a project-level configuration file using `--with-config`.

```bash
react-client init myapp --template react-ts --with-config
```

Creates:

```js
// react-client.config.js
import { defineConfig } from 'react-client/config';

export default defineConfig({
  root: './src',
  server: { port: 2202 },
  build: { outDir: '.react-client/build' }
});
```

✅ Loaded automatically by the CLI  
✅ Type-safe with IntelliSense via `defineConfig()`  
✅ Supports `.js`, `.mjs`, `.ts` (auto-compiled)  

---

## 🧰 Available Templates

| Template | Description |
|-----------|-------------|
| `react` | JavaScript SPA |
| `react-ts` | TypeScript SPA |
| `react-tailwind` | JS + Tailwind |
| `react-tailwind-ts` | TS + Tailwind |

Each template is pre-configured for esbuild, HMR, and fast bootstrapping.

---

## 💎 Core Features

- ⚡ **Custom Dev Server** — Connect + WebSocket + esbuild  
- 🔁 **React Fast Refresh (HMR)** — State-preserving reloads  
- 💥 **Overlay** — Syntax-highlighted stack frames, clickable file links (`vscode://file`)  
- 🔍 **Source Map Stack Mapping** — Maps runtime errors to original TS/JS source lines  
- 💬 **Auto Port Detection** — Prompts when default port 2202 is occupied  
- 🧠 **Smart Config Loader** — Detects project root, compiles `.ts` configs dynamically  
- 🔌 **Plugin Hook System** — Extendable with `configResolved`, `transform`, `buildEnd`  

---

## 🧬 How It Works

**Under the hood:**

1. **esbuild** handles bundling, incremental rebuilds, and sourcemaps.  
2. **Connect** serves files and APIs (React Refresh runtime, overlay, source-map).  
3. **WebSocket** pushes HMR updates and overlay messages.  
4. **Chokidar** watches `/src` for changes and triggers rebuilds.  

---

## 🧪 Local Development

To test `react-client` locally:

```bash
cd ~/Desktop/Workspace/Hoppy-projects/react-client
npm run build
npm link
cd myapp
react-client dev
```

If you run it from inside the CLI repo, it auto-detects and switches to `myapp/` as the root.

---

## 🧩 Troubleshooting

### ❌ Config not loading
Make sure `react-client.config.js` exists in your project root (not `.ts`).

```bash
/Users/<you>/myapp/react-client.config.js
```

### ❌ `react-refresh/runtime` not found
Install in the CLI or the project:
```bash
npm install react-refresh
```

### ⚠️ Port already in use
CLI will auto-detect and prompt:
```
Port 2202 is occupied. Use 5174 instead? (Y/n)
```

### ⚠️ Permission denied
Ensure your CLI entry file is executable:
```bash
chmod +x dist/cli/index.js
npm link
```

---

## 🧑‍💻 Contributing

We welcome contributions!  
Read the [Contributing Guide](./CONTRIBUTING.md) for setup instructions.

```bash
npm run lint
npm run test
npm run build
```

---

## 🚀 Publishing

Before publishing:
1. Update version in `package.json`  
2. Run a full build  
3. Ensure the entry file has execute permission  

```bash
npm run build
npm publish
```

Your package now includes:
- `#!/usr/bin/env node` shebang  
- Auto-detecting config loader  
- Built-in React Refresh runtime  

---

## 💬 Feedback

Found an issue or have a feature request?  
👉 [Open an issue](https://github.com/venkateshsundaram/react-client/issues)

---

## 🪪 License

**MIT Licensed** © [Venkatesh Sundaram](https://github.com/venkateshsundaram)
