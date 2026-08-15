import React from 'react'
import Topbar from "./Topbar";
import Navbar from "./Navbar"
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
     <Topbar/>
     <Navbar/>
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
