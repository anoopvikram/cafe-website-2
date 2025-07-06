import React, { useState, useRef } from 'react'
import { sliderLists } from '../../constants'

const Menu = () => {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalItems = sliderLists.length;
    const goToSlide = (index)=>{
        const newIndex = (index + totalItems) % totalItems;

        setCurrentIndex(newIndex);
    };

    const getFoodAt = (indexOffset) =>{
        return sliderLists[(currentIndex + indexOffset + totalItems) % totalItems]
    };
    const currentFood = getFoodAt(0);
    const prevFood = getFoodAt(-1);
    const nextFood = getFoodAt(1);

  return (
    <section id="menu" aria-labelledby='menu-heading'>
        <h2 id="menu-heading" className='sr-only'>
            Menu
        </h2>

        <nav className='food-tabs' aria-label='Item Navigation'>
            {sliderLists.map((food, index) =>{
                const isActive = index === currentIndex; 

                return(
                    <button key={food.id} className={`${
                        isActive
                        ? 'text-white border-white'  
                        : 'text-white/50 border-white/50'
                    }`} onClick={()=> goToSlide(index)}>
                        {food.name}
                    </button>
                )
            })}
        </nav>

        <div className='content w-48/50'>
            <div className='arrows'>
                <button className='text-left' onClick={() =>goToSlide(currentIndex -1)}>
                    <span>{prevFood.name}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true"/>
                </button>

                <button className='text-left' onClick={() =>goToSlide(currentIndex +1)}>
                    <span>{nextFood.name}</span>
                    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true"/>
                </button>
            </div>
            <div className='food'>
                <img src={currentFood.image} className='object-contain'/ >
            </div>

            <div className='recipe'>
                <div ref={contentRef} className='info'>
                    <p>Recipe for:</p>
                    <p id="title">{currentFood.name}</p>
                </div>

                <div className='details'>
                    <h2>{currentFood.title}</h2>
                    <p>{currentFood.description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu