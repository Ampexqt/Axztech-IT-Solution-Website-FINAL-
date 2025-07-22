import Header from './components/header/header'
import Footer from './components/footer/footer'
import AppRoutes from './components/routes/routes'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
     <ScrollToTop />
     <Header />
     <AppRoutes />
     <Footer />
    </>
  )
}

export default App
