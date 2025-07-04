import React from 'react'

export const About = () => {
  return (
    <section id="about" className='w-49/50'>
        <div className='mb-16 md:px-2 px-5'>
            <div className='content'>
                <div className='md:col-span-8'>
                    <p className='badge'>Best Food</p>
                    <h2>Where great coffee meets good conversations and better memories </h2>
                </div>

                <div className='sub-content'>
                    <p>At Thorn & Petals, we believe a good cup of coffee is more than just a drink — it’s a moment. A space where people meet, stories are shared, and memories are made. Every sip here comes with a side of warmth, laughter, and good company.</p>
                    <div>
                        <p className='md:text-3xl text-xl font-bold'>
                            <span>4.5</span>/5
                        </p>
                        <p className='text-sm text-white-100'>
                            More than +5000 customers
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='top-grid'>
            <div className='md:col-span-3'>
                <div className='noisy'>
                    <img src="/images/abt1.webp" alt="grid-img-1"/>
                </div>
            </div>

            <div className='md:col-span-6'>
                <div className='noisy'>
                    <img src="/images/abt3.webp" alt="grid-img-3"/>
                </div>
            </div>
             
            <div className='md:col-span-3'>
                <div className='noisy'>
                    <img src="/images/abt5.webp" alt="grid-img-5"/>
                </div>
            </div>
        </div>
        <div className='bottom-grid'>
            <div className='md:col-span-8'>
                <div className='noisy'>
                    <img src="/images/abt2.webp" alt="grid-img-2"/>
                </div>
            </div>
            <div className='md:col-span-4'>
                <div className='noisy'>
                    <img src="/images/abt4.webp" alt="grid-img-4"/>
                </div>
            </div>
        </div>
    </section>
  )
}
