import { Header } from './components/layout/Header.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { AudienceSection } from './components/sections/AudienceSection.jsx';
import { ServicesSection } from './components/sections/ServicesSection.jsx';
import { ProductionSection } from './components/sections/ProductionSection.jsx';
import { ProcessSection } from './components/sections/ProcessSection.jsx';
import { ContactSection } from './components/sections/ContactSection.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AudienceSection />
        <ServicesSection />
        <ProductionSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;