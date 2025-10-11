import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigateToContact = () => {
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
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
      default:
        return <Home />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;