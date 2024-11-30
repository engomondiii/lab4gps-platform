import React from 'react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import OverviewSection from "../components/overview/OverviewSection";



const Home = () => {
  return (
    <div>
      <Hero />
      <OverviewSection />

      {/* Add more sections here */}

    </div>
  );
};

export default Home;
