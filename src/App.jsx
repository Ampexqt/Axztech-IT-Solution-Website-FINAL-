import { useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Hero from "./components/pages/home/HeroSection/Hero";
import ServiceSection from "./components/pages/home/ServiceSection/ServiceSection";
import WhyChooseSection from "./components/pages/home/WhyChooseSection/WhyChooseSection";

function App() {
  return (
    <>
     <Header />
     <Hero />
     <ServiceSection />
     <WhyChooseSection />
     <Footer />
    </>
  )
}

export default App
