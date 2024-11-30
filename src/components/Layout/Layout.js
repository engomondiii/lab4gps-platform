import React from 'react';
import Navbar from '../Navbar/Navbar'; // Adjust the path based on your file structure
import Footer from '../Footer/Footer'; // Assuming you have a Footer component

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
