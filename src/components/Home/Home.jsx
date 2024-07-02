import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Privacy from './Privacy';
import Catalogue from './Catalogue';
import JoinUs from './JoinUs';
import Footer from '../common/Footer';
import Header from '../common/Header';

const Home = () => {
  return (
    <div className='h-full min-h-[100vh]'>
      <Header />
      <HeroSection />
      <Services />
      <Privacy />
      <Catalogue />
      <JoinUs />
      <Footer />
      {/* <CookiesModal /> */}
    </div>
  );
};

export default Home;
