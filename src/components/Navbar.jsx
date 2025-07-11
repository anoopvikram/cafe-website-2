import React from 'react'
import gsap from "gsap";
import {useGSAP} from '@gsap/react'
import { navLinks } from '../../constants'

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
                
            }
        });

        navTween.fromTo('nav', 
            {backgroundColor: 'transparent'},{
                backgroundColor: '#00000050', 
                backdropFilter: 'blur(10px)',
                 border: '1px solid #333',
                duration: 1,
                ease: 'power1.inOut'
                
            });
    })
  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.webp" className='rounded-2xl' width="55px"/>
                <p>Petals and Thorn</p>
            </a>
            <ul>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar