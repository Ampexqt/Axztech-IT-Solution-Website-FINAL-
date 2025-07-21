import { Routes, Route } from 'react-router-dom';
import Hero from '../pages/home/HeroSection/Hero';
import ServiceSection from '../pages/home/ServiceSection/ServiceSection';
import WhyChooseSection from '../pages/home/WhyChooseSection/WhyChooseSection';
import Contact from '../pages/Contacts/contact';
import React from 'react';
import OurStory from '../pages/AboutUs/OurStory/OurStory';
import Introduction from '../pages/AboutUs/AboutIntroduction/Introduction';

// Placeholder component for Products
const Products = () => <div style={{padding: '2rem', textAlign: 'center'}}>Products page coming soon.</div>;

const Home = () => (
  <>
    <Hero />
    <ServiceSection />
    <WhyChooseSection />
  </>
);

const AboutPage = () => (
  <>
    <Introduction />
    <OurStory />
  </>
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/our-story" element={<OurStory />} />
  </Routes>
);

export default AppRoutes;
