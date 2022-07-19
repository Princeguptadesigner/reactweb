import React from 'react';
import About from './About';
import Services from './Services';
import Header from './Header';
import Herobanner from './Herobanner';
import "./index.css"
import "./Responsive.css"
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className='reactweb_mainwrapper'>
        <Header />
        <Herobanner />
        <About />
        <Services />
        <Contact />
        <Footer/>
      </div>      
    </>
  );
}

export default App;
