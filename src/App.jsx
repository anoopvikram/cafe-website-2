import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Beverages from './components/Beverages';
import { About } from './components/About';
import { Art } from './components/Art';
import Menu from './components/Menu';


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Beverages/>
      <About/>
      <Art/>
      <Menu/>
    </main>
  )
}

export default App