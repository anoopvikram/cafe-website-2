import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import React from 'react'
import gsap from 'gsap';
import {useRef} from 'react'
import {useMediaQuery} from 'react-responsive'

const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {
        const heroSplit = new SplitText('.title', {type: 'chars words'});
        const paraSplit = new SplitText('.subtitle', {type: 'lines'});

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })

        gsap.from(paraSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
            .to('.right-leaf', {y: 200}, 0)
            .to('.left-leaf', {y: -200}, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true
            }
        })

        videoRef.current.onloadedmetadata = () =>{
            tl.to(videoRef.current,{
                currentTime: videoRef.current.duration
            })
        } 
    }, []);
  return (
    <>
        <section id="hero" className='noisy'>
            <h1 className='title'>HILLBREW</h1>

            <img src="images/hero-left-leaf.png" alt="left-leaf" className='left-leaf'/>
            <img src="images/hero-right-leaf.png" alt="right-leaf" className='right-leaf'/>

            <div className='body'>
                <div className='content'>
                    <div className='space-y-5 hidden md:block'>
                        <p>Brewed for Moments That Matter.</p>
                        <p className='subtitle'>
                            Pour yourself  <br/> a sip of sunshine
                        </p>
                    </div>

                    <div className='view-menu'>
                        <p className='subtitle'>At Thorn and Petals, every cup is a pause, a conversation, a little warmth. More than coffee — it’s a moment worth savoring.</p>
                        <a href="#menu">View Menu</a>
                    </div>
                </div>
            </div>
        </section>
        <div className='video absolute inset-0'>
            <video 
            src="/videos/output.mp4" 
            ref={videoRef}
            muted
            playsInline
            preload='auto'
            />
        </div>
    </>
  )
}

export default Hero