# 🌐 Silwasa IT Solutions Website

[![React](https://img.shields.io/badge/React-19.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://silwasa-it-solutions-website.vercel.app/)
[![Code Quality](https://img.shields.io/badge/Oxlint-1.89.0-10B981?style=for-the-badge&logo=oxc&logoColor=white)](https://oxc.rs/)

> A modern, responsive corporate single-page web application engineered for **Silwasa IT Solutions** — featuring custom dark-mode aesthetics, CSS architecture, an accessible multi-column mega menu, interactive project carousels, and client-side form validation.

---

## 🔗 Live Demo & Links

- **🚀 Live Website:** [https://silwasa-it-solutions-website.vercel.app/](https://silwasa-it-solutions-website.vercel.app/)
- **📬 Contact Section:** [https://silwasa-it-solutions-website.vercel.app/#contact](https://silwasa-it-solutions-website.vercel.app/#contact)
- **💻 GitHub Repository:** [https://github.com/Simran-Keshri03/Silwasa-IT-Solutions-Website](https://github.com/Simran-Keshri03/Silwasa-IT-Solutions-Website)

---

## 📖 Project Overview

**Silwasa IT Solutions Website** is a Single Page Application (SPA) built using React 19 and Vite 8. Designed to showcase technology and digital marketing services, the application highlights agency capabilities in web engineering, mobile application development, UI/UX design, custom software architecture, and search engine optimization.

Key aspects of the implementation include:
- **Design System:** Tailored dark theme (`#151414`, `#000000`) paired with primary purple (`#663399`) and high-contrast lime accents (`#D9F45F`).
- **Enterprise Navigation:** A multi-tier dropdown Mega Menu system providing categorized deep links to capabilities, case studies, industries, and insights.
- **Optimized Asset Pipeline:** Uses modern compressed graphic formats (`.webp`), responsive layout containers, and clean zero-warning builds.

---

## 📸 Website Preview

A live interactive preview is accessible directly at **[silwasa-it-solutions-website.vercel.app](https://silwasa-it-solutions-website.vercel.app/)**.

> [!NOTE]
> *(To display an image preview directly in this README, provide a preferred desktop/mobile screenshot file to include in the repository).*

---

## ✨ Key Features

### 1. 🧭 Advanced Mega Menu Navigation
- **6 Dedicated Dropdown Panels:** Separate navigation menus for *About*, *Services*, *Case Studies*, *Industries*, *Portfolio*, and *Blog*.
- **Left Feature Card:** Informational card on desktop containing category badge, overview description, and direct action link.
- **Multi-Column Category Grids:** Organized 2- and 3-column layouts with inline vector SVG icons and concise descriptions for all 36 subcategories.
- **Accessible Interactions:** Supports click-to-open, heading switching, active heading toggle-close, outside-click dismissal, <kbd>Escape</kbd> key listener, and keyboard focus states.
- **Mobile Accordion:** Adapts into a touch-friendly expandable accordion drawer on screens $\le 960\text{px}$.

### 2. 📱 Fully Responsive Design
- Optimized across breakpoints: **360px** (compact mobile), **390px** (modern phone), **768px** (tablet), **1024px** (tablet landscape / laptop), and **1366px / 1440px** (desktop).
- Responsive container layouts tested across desktop, tablet, and mobile viewports.

### 3. 💼 Comprehensive Business Sections
- **Hero Section:** Value proposition with trust metric counters (200K Satisfied Customers) and hero imagery.
- **Services Showcase:** Interactive service cards with hover animations.
- **About Us & Metrics:** Highlights company strengths with animated numerical milestones (250+ Projects Completed, 5+ Countries Served).
- **Work Process:** Structured 4-phase agile methodology (Discovery, Planning, Development, Launch & Support).
- **Portfolio Showcase:** Project showcase with interactive carousel pagination for client deliverables.
- **Flexible Pricing Plans:** Tiered packages (Basic, Standard, Premium) with feature checklists.
- **Contact & Lead Generation:** Direct contact channels (WhatsApp, phone, email, office location) and an interactive project inquiry form.
- **Footer & Insights:** Multi-column footer with quick navigation, social channels, newsletter subscription, and floating WhatsApp / scroll-to-top controls.

### 4. 🛡️ Client-Side Form Validation (Frontend Only)
- **Contact Inquiry Form (`#contact`):** Validates required input fields, name formatting, email syntax, phone number digit count (7 to 15 digits), and service selection with dynamic status feedback.
- **Newsletter Subscription (`#footer`):** Validates email format and non-empty input before displaying feedback.
- **Implementation Notice:** Both forms currently implement client-side validation only. They do not persist data to a database, trigger external APIs, or dispatch emails to a backend server. Backend integration can be connected via API endpoints or serverless functions as needed.

---

## 🛠️ Technology Stack

| Category | Technology | Version | Purpose |
| :--- | :--- | :---: | :--- |
| **Frontend Framework** | [React](https://react.dev/) | `^19.3.1` | Component architecture, state management, and hooks (`useState`, `useEffect`, `useRef`) |
| **DOM Renderer** | [React DOM](https://react.dev/) | `^19.3.1` | React DOM rendering engine |
| **Build Tool & Bundler** | [Vite](https://vite.dev/) | `^8.3.5` | Development server with HMR and production bundling |
| **Babel/React Plugin** | [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | `^6.1.2` | Fast React refresh and JSX transformation |
| **Styling & Design System** | Vanilla CSS3 | Standard | Custom CSS variables, Glassmorphism, CSS Grid, Flexbox, keyframe animations |
| **Typography** | [Google Fonts](https://fonts.google.com/) | Web | *Plus Jakarta Sans* font family |
| **Icons** | Inline Vector SVG & React Icons | `^5.7.0` | Crisp vector iconography |
| **Linter & Quality** | [Oxlint](https://oxc.rs/) | `^1.89.0` | High-speed static analysis and lint rule enforcement |
| **Hosting & Deployment** | [Vercel](https://vercel.com/) | Cloud | Global edge hosting with automatic Git CI/CD and SPA fallback routing |

---

## 📑 Website Sections

1. **Header / Navigation:** Sticky header with company logo, mega menu dropdowns, direct WhatsApp action button, and "Get In Touch" CTA.
2. **Hero (`#hero`):** Value proposition, capability highlights, proof metrics, and primary CTA.
3. **Services (`#services`):** Core engineering offerings (Web Development, eCommerce solutions, Custom Web development, SEO, Social Media Optimization).
4. **About Us (`#about`):** Company background, core strengths, and counter milestones.
5. **Process (`#process`):** 4-step delivery lifecycle (Discovery, Planning, Development, Launch & Support).
6. **Portfolio (`#portfolio`):** Client deliverables and cross-platform application gallery.
7. **Pricing (`#pricing`):** Tiered pricing packages for diverse business scales.
8. **Contact (`#contact`):** Interactive inquiry form with direct communication channels.
9. **Call to Action (`#cta`):** Full-width conversion banner.
10. **Footer (`#footer`):** Navigation directory, newsletter signup, copyright notice, and floating WhatsApp / scroll-to-top controls.

---

## 📂 Project Structure

```text
Silwasa-IT-Solutions-Website/
├── public/
│   ├── favicon.svg            # Favicon asset
│   └── icons.svg              # SVG sprite icons
├── src/
│   ├── assets/                # Optimized WebP and PNG graphics
│   │   ├── about-us-silwasa-it-solutions-1024x683.webp
│   │   ├── hero.png
│   │   ├── image.webp
│   │   ├── men.webp
│   │   ├── react.svg
│   │   ├── silwasa-white-logo.webp
│   │   ├── tick-icon.svg
│   │   └── vite.svg
│   ├── components/            # Modular React components
│   │   ├── About.jsx          # About section & animated stats
│   │   ├── Contact.jsx        # Contact channels & client-side form
│   │   ├── CTA.jsx            # Conversion banner
│   │   ├── Footer.jsx         # Footer & newsletter form
│   │   ├── Header.jsx         # Sticky header & navigation state
│   │   ├── Hero.jsx           # Hero banner & intro content
│   │   ├── MegaMenu.jsx       # Multi-column mega menu dropdown
│   │   ├── Portfolio.jsx      # Project carousel
│   │   ├── Pricing.jsx        # Pricing tier cards
│   │   ├── Process.jsx        # 4-step process methodology
│   │   └── Services.jsx       # Core services cards
│   ├── data/
│   │   └── megaMenuData.jsx   # Structured menu categories & SVG icons
│   ├── App.css                # Component-level styles
│   ├── App.jsx                # Root layout orchestrator
│   ├── index.css              # Global design tokens & mega menu styles
│   └── main.jsx               # Application DOM entry point
├── .gitignore                 # Excludes node_modules, dist, .env, .vercel
├── .oxlintrc.json             # Oxlint configuration
├── index.html                 # HTML shell & font preconnects
├── package.json               # Scripts and dependencies
├── package-lock.json          # Deterministic dependency tree
├── README.md                  # Project documentation
├── vercel.json                # Vercel SPA rewrite fallback rules
└── vite.config.js             # Vite build & plugin setup
```

---

## ⚙️ Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.0` or higher recommended)
- [npm](https://www.npmjs.com/) (version `9.0` or higher)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Simran-Keshri03/Silwasa-IT-Solutions-Website.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd Silwasa-IT-Solutions-Website
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

---

## 📦 Production Build & Quality Check

- **Run code quality linting:**
   ```bash
   npm run lint
   ```
   *Executes Oxlint over all project files (0 warnings, 0 errors).*

- **Create production build:**
   ```bash
   npm run build
   ```
   *Compiles assets into the `dist/` folder with minification, tree-shaking, and gzip calculation.*

- **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment

The project is deployed and hosted on **[Vercel](https://vercel.com/)** and connected with the GitHub repository on the `main` branch.

### SPA Fallback Routing
To prevent HTTP 404 errors when visitors refresh or directly access subpaths, the project contains a [`vercel.json`](file:///d:/Adi%20Project/vercel.json) configuration that maps incoming requests back to `/index.html`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 👩‍💻 Author

- **Simran Keshri**
- GitHub: [@Simran-Keshri03](https://github.com/Simran-Keshri03)
- Project Repository: [Silwasa-IT-Solutions-Website](https://github.com/Simran-Keshri03/Silwasa-IT-Solutions-Website)

---

## 📄 Project Status & Rights

This repository is developed for portfolio and commercial demonstration purposes. No formal open-source license is granted. All rights to branding, graphics, and associated company assets belong to Silwasa IT Solutions.
