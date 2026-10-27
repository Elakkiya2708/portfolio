import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#060b18] dark:bg-[#060b18] light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300 relative selection:bg-blue-600 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main id="main-content">
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Floating Controls & Modals */}
        <ScrollToTop />
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
