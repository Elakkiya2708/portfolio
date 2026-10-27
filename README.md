# Elakkiya V — Professional Portfolio Website

A premium, responsive personal portfolio web application for **Elakkiya V**, third-year B.Tech Computer Science and Business Systems (CSBS) student at Easwari Engineering College, Chennai, Tamil Nadu, India.

Designed with a **Dark Navy + Blue professional corporate theme**, featuring authentic technical skills, production software projects, verified AWS certifications, career experience, and the original downloadable resume PDF.

---

## 🌟 Key Features

- **Corporate Dark Navy + Blue Theme**: Hand-tailored color palette (`#060b18` deep navy, `#2563eb` electric blue, `#06b6d4` cyan accents) with smooth glassmorphism, responsive micro-animations, and subtle glowing borders.
- **Dark / Light Mode**: Integrated theme toggle persisted in `localStorage`.
- **Authentic Profile Photo**: Framed circular portrait with glowing gradient border.
- **Interactive Navigation & Scrollspy**: Smooth scrolling with active section indicator and responsive mobile drawer menu.
- **Projects Showcase**:
  - **RenewGuard**: Renewal Management & Compliance Tracking System with automated reminders.
  - **VisionInspect AI**: Manufacturing Defect Detection Platform using OpenCV SSIM comparison (Live demo on Vercel).
  - **InterviewIQ**: AI-Powered Placement Preparation Platform integrated with Google Gemini API and Supabase (Live demo and GitHub repository).
  - **Expandable Modals**: Deep-dive architecture overview, problem statement, solution, and verified screenshot carousels for each project.
- **Official Credentials & Certifications**:
  - AWS Certified AI Practitioner (Validation ID: `299a801ed43c4c14b69c8c817f3ad350`)
  - AWS Certified Cloud Practitioner (Validation ID: `e87e0b8d505f478ca6bd81e82105702d`)
  - AWS Certified Developer – Associate (Validation ID: `a5f7edbc27fe45df847d39ff884ccee4`)
  - Cisco BOOST 6.0 Cybersecurity Training
  - NPTEL Management Information System & E-Business
  - Pattern Forge Artisan Certificate (Code Galatta / Cogtis Technologies)
  - Interactive Certificate Viewer Modal with official AWS verification links.
- **Interactive Timeline**:
  - Cisco BOOST 6.0 Program (Cybersecurity & Networking Trainee)
  - Tamizhan Skills (Data Science & Analytics)
  - Eagle Hi-Tech SoftClou Solutions Pvt. Ltd. (Junior Software Trainee)
  - Prodigy InfoTech (Web Development Intern)
  - CodSoft (Python Programming Intern)
  - Infosys Springboard 7.0 (Ongoing Industry Program)
- **Education Section**:
  - Easwari Engineering College — B.Tech CSBS (2024–2028), CGPA: **9.0 / 10.0**
  - Swami Dayananda Matriculation School (Class 10: 86%, Class 12: 87%)
- **Original Resume Integrity (Highest Priority)**:
  - Exact original file `Elakkiya_V_Resume (1).pdf` preserved without modification or synthetic generation.
  - Interactive full-screen browser PDF viewer modal.
  - One-click native download button with preserved filename.
- **Interactive Contact Form**:
  - Client-side validation for name, email format, subject, and message.
  - Honeypot spam defense.
  - Direct mail dispatch trigger with confirmation alerts.
  - Clickable phone and email links (`mailto:` and `tel:`).

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand vectors
- **Typography**: Plus Jakarta Sans & JetBrains Mono (Google Fonts)

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18 or higher) and `npm` are installed:
```bash
node -v
npm -v
```

### 2. Clone or Navigate to Directory
```bash
cd c:/Users/Admin/Documents/portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Building for Production

Compile TypeScript and build the optimized production bundle:
```bash
npm run build
```
The output files will be generated in the `dist/` directory, ready to deploy.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

### Method 1: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts (use default Vite settings with output directory `dist`).

### Method 2: Via GitHub & Vercel Dashboard
1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Elakkiya V professional portfolio"
   git branch -M main
   git remote add origin https://github.com/Elakkiya2708/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.

---

## 🔒 Verification & Asset Integrity Notice

- The resume PDF located at `/public/Elakkiya_V_Resume (1).pdf` is the exact file provided by Elakkiya V.
- Profile photograph is the authentic portrait of Elakkiya V.
- All credential IDs and project demo links (`https://visioninspect-ai-lovat.vercel.app`, `https://interview-iq-krhm.vercel.app`) have been verified.
