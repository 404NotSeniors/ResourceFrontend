# 🧑‍💻 resourcefrontend

A modern **Next.js + TypeScript** frontend project scaffold for building scalable resource management UIs, powered by **Zustand**, **TailwindCSS**, **Zod**, **React Hook Form** and **Vitest** for testing.

---

## 🧰 Stack Overview

| Tool                 | Purpose                                 |
| -------------------- | --------------------------------------- |
| **Next.js**          | React framework with App Router         |
| **TypeScript**       | Type-safe development                   |
| **TailwindCSS**      | Utility-first styling                   |
| **Zustand**          | Global state management                 |
| **Zod**              | Form validation schema                  |
| **React Hook Form**  | Form state & inputs                     |
| **Vitest**           | Unit + component testing                |
| **@testing-library** | DOM testing & user interaction          |
| **JSDOM**            | Simulated browser environment for tests |

---

## 🪄 Setup Notes

```
npm run dev         # Start local dev server
npm run build       # Build for production
npm run lint        # Run ESLint
npx vitest          # Run all tests
npx vitest --watch  # Watch & re-run tests on save
```

### ✨ Import Alias

This project uses the alias:

```
@/*
```

Example:

```
import { ResourceForm } from '@/components/ResourceForm';
```

Built with 🖤 by 🧙‍♀️
