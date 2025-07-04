import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Beverages from './components/Beverages';
import { About } from './components/About';


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Beverages/>
      <About/>
    </main>
  )
}

export default App