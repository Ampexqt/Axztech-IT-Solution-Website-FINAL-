import { Routes, Route, Outlet } from 'react-router-dom';
import Hero from '../pages/home/HeroSection/Hero';
import ServiceSection from '../pages/home/ServiceSection/ServiceSection';
import WhyChooseSection from '../pages/home/WhyChooseSection/WhyChooseSection';
import Contact from '../pages/Contacts/contact';
import React from 'react';
import OurStory from '../pages/AboutUs/OurStory/OurStory';
import Introduction from '../pages/AboutUs/AboutIntroduction/Introduction';
import MissionAndValues from '../pages/AboutUs/MissionAndValues/MissionAndValues';
import LeadershipTeam from '../pages/AboutUs/LeadershipTeam/LeadershipTeam';
import WhyChooseUs from '../pages/AboutUs/WhyChooseUs/WhyChooseUs';
import OurProducts from '../pages/Products/OurProducts/OurProducts';
import SolutionsServerPortal from '../pages/Products/SolutionsServerPortal/SolutionsServerPortal';
import KeyFeatures from '../pages/Products/KeyFeatures/KeyFeatures.jsx';

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
    <MissionAndValues />
    <div style={{ marginTop: '56px' }}>
      <LeadershipTeam />
    </div>
    <WhyChooseUs />
  </>
);

const ProductsPage = () => <Outlet />;

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/products" element={<ProductsPage />}>
      <Route index element={<OurProducts />} />
      <Route path="ssp" element={<SolutionsServerPortal />} />
      <Route path="KeyFeatures" element={<KeyFeatures />} />
    </Route>
    <Route path="/contact" element={<Contact />} />
    <Route path="/our-story" element={<OurStory />} />
    <Route path="/about/mission-and-values" element={<MissionAndValues />} />
    <Route path="/about/why-choose-us" element={<WhyChooseUs />} />
  </Routes>
);

export default AppRoutes;
