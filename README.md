# ⚡ Cardoso Developer Portfolio

![Portfolio Demo](https://i.imgur.com/CpDnfxb.mp4)

> **Documentation in other languages:**
> 
> [🇧🇷 Português](docs/locales/pt-BR.md) | [🇪🇸 Español](docs/locales/es-ES.md) | [🇫🇷 Français](docs/locales/fr-FR.md)

---

### 🚀 Introduction & The Story Behind
This project is my personal developer portfolio and a deliberate step forward in expanding my background into a **Full-Stack** skill set.

My core focus has been centered on backend engineering and **Java**, and it had been several months since I last wrote TypeScript. However, determined to break into modern frontend ecosystems without relying on raw HTML/CSS, I decided to tackle **Angular** head-on — learning its modern architecture and putting this application together in an intensive **single-day sprint**.

---

### 🎨 From Figma Concept to Code
I believe engineering starts with intentional design before touching code. 

1. **Wireframing & Concept:** I prototyped the initial UI layout, spacing, and visual hierarchy directly in **Figma** (banner placement, skills distribution, cards, and carousel controls).
2. **AI-Assisted Acceleration:** Rather than letting AI guess the design, I leveraged AI as a pure development copilot to help translate my exact Figma concept into Angular template components quickly, bypassing boilerplate friction.
3. **Engineering & Architecture:** All state reactivity, TypeScript interfaces, localization pipelines, and CSS token structures were manually refined and engineered.

<p align="center">
  <img src="docs/assets/figma-concept.png" alt="Figma Concept Design" width="400" />
  <br>
  <em>Initial design concept prototyped in Figma before frontend implementation.</em>
</p>

---

### 🎯 What Was Explored in Angular (Modern v17+)
Instead of legacy module-based Angular, this project dives straight into modern patterns:
* **Signals & Granular Reactivity:** Managing theme toggling, dropdown states, and data pipelines using reactive primitives (`signal`, `computed`, `input.required`) with zero change-detection overhead.
* **Standalone Components:** Lightweight architecture ditching legacy `NgModule` ceremonies.
* **Strict TypeScript & DTO Layer:** Strict static typing for skills, experiences, and social links, keeping runtime data safe and clean.
* **Instant i18n & Theme Switching:** Dynamic locale updates (`pt-BR`, `en-US`, `es-ES`, `fr-FR`) and dark/light modes driven by pure CSS custom properties and state signals.

---

### 📂 Project Structure
```
cardoso-portfolio
├─ docs
│  ├─ assets                 # Demos and Figma mockups
│  └─ locales                # Multi-language READMEs
├─ public                    # Profile images and static media
├─ src
│  ├─ app
│  │  ├─ app.config.ts       # Standalone bootstrap configuration
│  │  ├─ app.ts              # Application root
│  │  └─ modules
│  │     ├─ constants        # Translation dictionaries (i18n)
│  │     ├─ models           # DTOs & strict data interfaces
│  │     ├─ screens
│  │     │  └─ portfolio     # Standalone portfolio screen component
│  │     └─ services         # Reactive state hub (StorageService)
│  ├─ assets
│  │  └─ profile.json        # Structured raw portfolio data
│  ├─ styles.scss            # Theme variables & global resets
│  └─ main.ts                # Application bootstrapper
├─ angular.json              # Angular CLI build configurations
├─ README.md                 # Main technical documentation
└─ tsconfig.json             # Strict TypeScript compiler flags
```

---

### 🛠️ Setup & Local Run
```
# Clone the repository
git clone https://github.com/guilhermeCardosooo/cardoso-portfolio.git

# Install dependencies
npm install

# Start development server
npm start
# or
ng serve
```
Navigate to http://localhost:4200/.

---

### 📜 License
Personal project developed for learning, rapid skill prototyping, and showcasing technical evolution.