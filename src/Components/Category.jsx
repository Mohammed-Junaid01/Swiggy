import React, { useState } from 'react'
import Container from './Container'
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa";
import Categorys from '../data/category';

export default function Category() {
    const [slide,setSlide] = useState(0);
    
    const prevSlide = () => {
        if(slide == 0) return false;
        setSlide(slide - 3);
    }

    const nextSlide = () => {
        if(Categorys.length - 8 == slide) return false;
        setSlide(slide + 3);
    }

  return (
    <>
    <Container className="max-w-[1040px] mx-auto overflow-hidden">
        <div className="flex items-center justify-between mt-3 p-3">
    <h2 className='text-2xl font-bold'>What's on your mind?</h2>
    <div className='flex items-center gap-5'>
        <div className='cursor-pointer w-[35px] h-[35px] bg-[#e2e2e7] rounded-full flex justify-center items-center'><FaArrowLeft onClick={prevSlide} /></div>
        <div className='cursor-pointer w-[35px] h-[35px] bg-[#e2e2e7] rounded-full flex justify-center items-center'><FaArrowRight onClick={nextSlide} /></div>
    </div>
    </div>

    <div className='flex'>
      {Categorys.map((cat, index) => (
        <a key={index} href={`../data/category/${cat.path}`}>
            <div className='w-[132px] h-[180px] duration-500'
            style={{
                transform: `translateX(-${slide * 100}%)`
            }}>
          <img src={`/images/${cat.image}`} />
          </div>
        </a>
      ))}
    </div>

    </Container>
    </>
  )
}
