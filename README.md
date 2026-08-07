# Atul Deep Singh — Interactive Developer Portfolio

A premium, fluid, and high-performance developer portfolio and resume showcase built with React, Vite, Tailwind CSS, and Framer Motion. 

Live Portfolio: [atuldeepsingh.com](https://atuldeepsingh.com/)  
Live Developer Blog: [blog.atuldeepsingh.com](https://blog.atuldeepsingh.com/)

---

## 🛠️ Technology Stack

The portfolio is built with a modern and optimized tech stack:

### 1. Core Framework & Language
- **[React](https://react.dev/) (v18.3.1)**: Component-based UI library.
- **[TypeScript](https://www.typescriptlang.org/)**: Ensures type safety across projects, work experiences, and component layouts.

### 2. Styling & Animations
- **[Tailwind CSS](https://tailwindcss.com/) (v4.0)**: Utility-first CSS compiling via `@tailwindcss/vite`.
- **Vanilla CSS (Custom Tokens)**: Custom dark/light theme colors, scrollbars, and glassmorphic card borders are declared using HSL tokens inside [theme.css](file:///Users/codethenics/dev/portfolio-v2/src/styles/theme.css).
- **[Motion (Framer Motion)](https://motion.dev/) (v12.23.24)**: Powers smooth fade-ins, sliding dividers, rotating dashed profile borders, layout-matching navigation dots, and expandable project items.

### 3. Build Tooling
- **[Vite](https://vite.dev/) (v6.3.5)**: Next-generation frontend tooling providing rapid hot module replacement and optimized build-time tree-shaking.

---

## ✨ Core Features

- **Interactive Typist Hero**: A custom typewriter effect showcasing skills and titles dynamically, alongside a rotating dashed border around the profile avatar.
- **Live Stats Dashboard**: Renders real-time engineering metrics detailing order automation percentage, stores integrated, and daily bookings.
- **Highlighted Technical Writing**: A dedicated section displaying featured deep-dive blogs with direct, tab-safe external links to [https://blog.atuldeepsingh.com/](https://blog.atuldeepsingh.com/).
- **Dynamic Work Experience**: Expandable cards revealing detailed impact statistics, tag pills for the technologies used, and clean layout timelines.
- **IntersectionObserver Navigation**: The navigation header tracks scrolling position automatically, highlighting the active section with a matching dot.
- **Theme Switcher**: Smooth, client-side toggle between dark (cosmic blue-black) and light (slate-blue) modes.

---

## 📂 Directory Layout

```text
├── public/                  # Static assets (logo/favicon)
├── src/
│   ├── app/
│   │   ├── components/      # UI sections (Hero, About, Skills, Experience, Projects, Blog, Nav)
│   │   ├── hooks/           # Custom React hooks (useInView for animation triggers)
│   │   └── App.tsx          # Application entrypoint & layout coordinator
│   ├── assets/              # Reusable static styles, profile photos, and logos
│   ├── imports/             # Static PDF resume files
│   ├── styles/              # Custom design themes and tailwind styles
│   └── main.tsx             # DOM mounting script
├── index.html               # Vite index template
├── vite.config.ts           # Bundler pipeline configuration
└── package.json             # NPM dependencies & build scripts
```

---

## 📄 Professional Experience & Skills Summary

### Technical Core
* **Languages**: JavaScript, TypeScript, Java, Python, C/C++, SQL, HTML/CSS
* **Backend**: Node.js, Express, GraphQL, REST APIs, RabbitMQ, Elasticsearch
* **Databases & Cloud**: MongoDB, AWS (EC2, S3, Lambda, DynamoDB), Google Cloud, Shopify Admin API
* **Frontend & Testing**: React, Next.js, Flutter, Selenium WebDriver, Material-UI, Tailwind CSS

### Highlight Accomplishments
- **Heads Up For Tails (Gurugram, HR)**: Automated Shopify e-commerce order flows (reducing manual processing by 80%), built location-based Distance Calculation APIs, and scaled appointment engines serving 1,500+ bookings daily across 100+ stores.
- **AI Integrations**: Deployed semantic search pipelines using Elasticsearch and OpenAI embeddings to enhance product recommendation indexing.

---

## ⚡ Setup & Execution

### Prerequisites
Make sure [Node.js](https://nodejs.org/) is installed.

### Installation
Clone the workspace and install package dependencies:
```bash
npm install
```

### Run Local Dev Server
Launch Vite development server:
```bash
npm run dev
```

### Production Build
Build optimized production code into the `/dist` output directory:
```bash
npm run build
```