import React from 'react'
import Topbar from "./Topbar";
import Navbar from "./Navbar"
import Hero from './Hero';
import About from './About';

export default function Home() {
  return (
    <>
     <Topbar/>
     <Navbar/>
     <Hero/>
     <About/>
    </>
  )
}
