import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import CACRegistration from './pages/CACRegistration';

type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'pricing' | 'faq' | 'contact' | 'cac';

function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const pageIdToPath = (page: PageId) => {
    switch (page) {
      case 'home':
        return '/';
      case 'about':
        return '/about';
      case 'services':
        return '/services';
      case 'portfolio':
        return '/portfolio';
      case 'pricing':
        return '/pricing';
      case 'faq':
        return '/faq';
      case 'contact':
        return '/contact';
      case 'cac':
        return '/cac-registration';
      default:
        return '/';
    }
  };

  const pathToPageId = (path: string): PageId => {
    switch (path) {
      case '/':
        return 'home';
      case '/about':
        return 'about';
      case '/services':
        return 'services';
      case '/portfolio':
        return 'portfolio';
      case '/pricing':
        return 'pricing';
      case '/faq':
        return 'faq';
      case '/contact':
        return 'contact';
      case '/business-registration':
      case '/cac-registration':
        return 'cac';
      default:
        return 'home';
    }
  };

  // Initialize from URL and handle back/forward navigation
  useEffect(() => {
    const initial = pathToPageId(window.location.pathname);
    setCurrentPage(initial);

    const onPopState = () => {
      setCurrentPage(pathToPageId(window.location.pathname));
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Navigation helper that also updates the URL
  const navigate = (page: PageId) => {
    setCurrentPage(page);
    const path = pageIdToPath(page);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo(0, 0);
  };

  const handleNavigateToContact = () => {
    navigate('contact');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={navigate} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'pricing':
        return <Pricing onNavigateToContact={handleNavigateToContact} />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'cac':
        return <CACRegistration />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={navigate}>
      {renderPage()}
    </Layout>
  );
}

export default App;
