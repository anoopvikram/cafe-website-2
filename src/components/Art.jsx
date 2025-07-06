import { featureLists, goodLists } from "../../constants"
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import { useMediaQuery } from 'react-responsive';

export const Art = () => {
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(()=>{
        const start = isMobile? 'top 20%' : 'top top';

        const maskTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true,
            }
        })
        maskTimeline
        .to('.will-fade', {
            opacity: 0, stagger: 0.2, ease: 'Power1.inOut'
        })

        .to('.masked-img', {
            scale: 1.3, maskPosition:'center', maskSize: '400%', duration: 1, ease: 'power1.inOut'
        })

        .to('#masked-content', {
            opacity: 1, duration: 1, ease: 'power1.inOut'}, )
    })
  return (
    <section id="art">
        <div className="container mx-auto h-full pt-20">
            <h2 className="will-fade">The ART</h2>
            <div className="content">
                <ul className="space-y-4 will-fade">
                    {goodLists.map((feature, index)=>(
                        <li key={index} className="flex items-center gap-2">
                            <img src="/images/check.png" alt="check"/>
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>

                <div className="coffee-img ">
                    <img 
                        src="/images/under-img.png"
                        alt="under-image"
                        className="abs-center masked-img object-contain "

                    />
                </div>

                <ul className="space-y-4 will-fade">
                    {featureLists.map((feature, index)=>(
                        <li key={index} className="flex items-center gap-2">
                            <img src="/images/check.png" alt="check"/>
                            <p className="md:w-fit w-60">{feature}</p>
                        </li>
                    ))}
                </ul> 
            </div>
            <div className="masked-container">
                <h2 className="will-fade">Sip-Worthy perfection</h2>
                <div id="masked-content">
                    <h3>Made with Craft, Poured with Passion</h3>  
                    <p>A warm cappuccino, a golden croissant, and the soft scent of cinnamon — a quiet café moment.</p>   
                </div>
            </div>
        </div>
    </section>
  )
}
