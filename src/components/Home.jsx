import React from 'react'
import Hero from './Hero';
import About from './About';
import Products from './Products';
import WhyChooseUs from './WhyChooseUs';
import Applications from './Applications'
import Contact from './Contact'
import Location from './Location';
import Footer from './Footer';

export default function Home() {
  return (
    <>
     
     <Hero/>
    <Products/>
     <Applications/>

     <WhyChooseUs/>
      <About/>

     <Contact/>
    <Location/>
    <Footer/>
    </>
  )
}
