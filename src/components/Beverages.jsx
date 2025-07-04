import React from 'react'
import { foodLists } from '../../constants'
import { beverageLists } from '../../constants'
import {useGSAP} from '@gsap/react' 
import gsap from 'gsap'

const Beverages = () => {

    useGSAP(() =>{
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger:'#beverages',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        parallaxTimeline
        .from('#b-left-leaf', {
            x:-100,
            y:100
        })

        .from('#b-right-leaf', {
            x:100, 
            y:100
        })
    })
  return (
    <section id="beverages" className='noisy rounded-b-4xl'>
        <img src="images/hero-left-leaf.png" alt="left-leaf" id="b-left-leaf"/>
        <img src="images/hero-right-leaf.png" alt="right-leaf" id="b-right-leaf"/>

        <div className='list justify-evenly'>
            <div className='foods'>
                <h2>Food Items: </h2>
                <ul>{foodLists.map(({name, category, detail, price})=>(
                    <li key={name}>
                        <div className='md:me-28'>
                            <h3>{name}</h3>
                            <p>{category} | {detail}</p>
                        </div>
                        <span> - {price}</span>
                    </li>
                ))}</ul>
            </div>

            <div className='beverages'>
                <h2>Beverages: </h2>
                <ul>{beverageLists.map(({name, category, detail, price})=>(
                    <li key={name}>
                        <div className='me-28'>
                            <h3>{name}</h3>
                            <p>{category} | {detail}</p>
                        </div>
                        <span> - {price}</span>
                    </li>
                ))}</ul>
            </div>
        </div>
    </section>  
  )
}

export default Beverages