# Krishna International School (KIS Aligarh) - Modern Website Redesign

> **Technical Assessment Submission for Dettroin Full Stack Developer Internship**

---

## 👤 Candidate Details

* **Full Name**: Amir
* **Intern ID**: Not Provided
* **Email Address**: amiransaridelhi739@gmail.com
* **GitHub Username**: https://github.com/HaAmira
* **Selected Website**: Krishna International School (KIS Aligarh)
* **Original Website URL**: [https://kisaligarh.com/](https://kisaligarh.com/)
* **GitHub Repository**: [https://github.com/HaAmira/Dettroin_Project](https://github.com/HaAmira/Dettroin_Project)
* **Live Demo**: https://dettroin-project.vercel.app/

---

## 🚀 Project Overview

This project is a complete, modern, professional, and accessible UI/UX redesign of the **Krishna International School (KIS Aligarh)** website. 

The original website suffered from an outdated dark interface, complex slide-out navigation menus, hardcoded pixel margins causing horizontal overflow on mobile devices, low visual contrast, and a lack of modern interactivity. 

The redesign transforms KIS Aligarh's online presence into a world-class educational portal—retaining all verified factual information, motto, address, CBSE affiliation status, and portal links while introducing a clean royal-blue and emerald-green aesthetic, glassmorphism headers, tabbed academic level showcases, interactive facility lightboxes, filterable photo galleries, and an online fee payment quick portal.

---

## 🛠️ Technology Stack

* **Frontend Framework**: [React.js](https://react.dev/) (v19)
* **Build Tool**: [Vite](https://vite.dev/) (v8)
* **Styling & Design Tokens**: [Tailwind CSS](https://tailwindcss.com/) (v4) with custom glassmorphism utilities & Google Fonts (*Outfit* & *Inter*)
* **Client-Side Routing**: [React Router](https://reactrouter.com/) (v6)
* **Icon System**: [Lucide React](https://lucide.dev/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Deployment Target**: [Vercel](https://vercel.com/)

---

## ✨ Key UI/UX Improvements Made

1. **Modern Visual Identity & Color Palette**:
   * **Royal Blue & Slate** (`#0f172a`, `#1e3a8a`) representing trust and educational prestige.
   * **Emerald Green** (`#059669`, `#10b981`) highlighting vitality, growth, and achievements.
   * **Gold Accents** (`#d97706`) for badges and awards.
2. **Sticky Glassmorphic Header & Mobile Drawer Navigation**:
   * Replaced the complex multi-tiered slide menu with an intuitive glassmorphic header and a slide-over mobile drawer navigation.
   * Added top announcement bar featuring CBSE affiliation notice and direct fee payment quick links.
3. **Interactive Academic & Campus Showcase**:
   * Tabbed academic levels selector (Pre-Primary, Primary, Middle, Secondary, Senior Secondary - Science, Commerce, Humanities).
   * Interactive modal lightboxes for campus facilities (5-acre eco campus, science labs, digital library, sports complex, theatre, transport).
4. **Filterable Gallery with Lightbox Inspection**:
   * Instant category filtering (Campus, Academics, Sports, Events) with full-screen image inspection, keyboard/touch navigation, and captions.
5. **Enhanced Accessibility & Performance**:
   * Added `:focus-visible` outline indicators for keyboard navigation.
   * Ensured proper semantic HTML5 structure, ARIA labels, image alt attributes, and responsive breakpoints.
   * Zero horizontal scroll overflow across all viewports.

---

## 📌 Verified Factual Content Retained

* **School Name**: Krishna International School (KIS Aligarh)
* **Motto**: *"Dedicated to Excellence"*
* **Affiliation**: CBSE Affiliated Senior Secondary School
* **Campus & Stats**: 5-Acre Eco-Friendly Green Campus, 6,000+ Students & Faculty, 60+ National & International Awards, 100% Parent Satisfaction.
* **Address**: Delhi G.T. Road, Aligarh - 202001 (U.P.), INDIA
* **Helplines**: `+91 98370 50000`, `+91 73510 50000` | `info@kisaligarh.com`
* **Portals**: Accevate Fee Payment & Student Application (`KISALG` school code).

---

## 📁 Project Folder Architecture

```
dettroin-assignment/
├── public/
├── src/
│   ├── assets/              # Logos and static media assets
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx   # Sticky glass header with mobile drawer & top bar
│   │   │   ├── Footer.jsx   # Multi-column footer with apps, maps & quick links
│   │   │   ├── SectionHeader.jsx # Reusable section headers
│   │   │   └── ScrollToTop.jsx   # Route scroll restoration helper
│   │   └── home/
│   │       ├── Hero.jsx            # High-impact hero section & stats counter
│   │       ├── AboutSection.jsx    # Campus summary & 4-photo collage
│   │       ├── Features.jsx        # "Why Choose KIS" 6-strength cards
│   │       ├── AcademicsPreview.jsx# Interactive academic level tabs
│   │       ├── FacilitiesGrid.jsx  # Campus facilities & detail modal
│   │       ├── StatsSection.jsx    # Awards & parental testimonials
│   │       ├── GalleryPreview.jsx  # Category filter gallery & lightbox
│   │       ├── AdmissionCTA.jsx    # Admissions call to action banner
│   │       └── ContactSection.jsx  # Contact details & enquiry form
│   ├── data/
│   │   ├── schoolData.js    # Verified facts, facilities, staff & FAQs
│   │   └── galleryData.js   # Categorized gallery photos
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── AcademicsPage.jsx
│   │   ├── AdmissionsPage.jsx
│   │   ├── FacilitiesPage.jsx
│   │   ├── GalleryPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx              # Main router setup
│   ├── index.css            # Tailwind CSS v4 & custom design tokens
│   └── main.jsx
├── .gitignore               # Configured to ignore node_modules, dist, .env
├── index.html               # SEO metadata & Google Fonts
├── package.json
└── vite.config.js
```

---

## 💻 Local Installation & Setup Instructions

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HaAmira/Dettroin_Project.git
   cd Dettroin_Project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Output bundle will be generated inside the `dist/` directory.

---

## 🌐 Deployment

The application is optimized for zero-configuration deployment on **Vercel**:
* Framework Preset: **Vite**
* Build Command: `npm run build`
* Output Directory: `dist`
