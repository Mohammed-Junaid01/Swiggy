import React, { useState } from 'react'
import Container from './Container';
import Restorants from '../data/restaurantChains';
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa";
import { MdStars } from "react-icons/md";



export default function Restorant() {

    const [slides,setSlides] = useState(0);
    
    const prevSlide = () => {
        if(slides == 0) return false;
        setSlides(slides - 1);
    }

    const nextSlide = () => {
        if(Restorants.length - 3 == slides) return false;
        setSlides(slides + 1);
    }


  return (
    <>
    <Container className="max-w-[1040px] mx-auto overflow-hidden">
    <div className="flex items-center justify-between mt-3 p-3">
    <h2 className='text-2xl font-bold mb-5'>Top restaurant chains in Chhindwara</h2>
    <div className='flex items-center gap-5'>
        <div className='cursor-pointer w-[35px] h-[35px] bg-[#e2e2e7] rounded-full flex justify-center items-center'><FaArrowLeft onClick={prevSlide} /></div>
        <div className='cursor-pointer w-[35px] h-[35px] bg-[#e2e2e7] rounded-full flex justify-center items-center'><FaArrowRight onClick={nextSlide} /></div>
    </div>
    </div>

    <div className="flex">
        {
            Restorants.map((rest,index) => (
                <div key={index} className='w-[273px] m-[10px] scale-90 hover:scale-100 duration-500' style={{
                    transform: `translateX(-${slides * 100}%)`
                }}>
                    <div className='w-[273px] h-[182px] rounded-[25px] overflow-hidden relative'>
                        <img className='object-cover w-full h-full' src={`/images/${rest.image}`} />
                        <div className="overlay absolute w-full h-full top-0 start-0">
                            <div className='text-xl font-bold text-[white] absolute bottom-1 start-2'>{rest.offer}</div>
                            </div>
                    </div>
                    <div className='p-3 pt-2 pb-1'>
                    <h2 className='text-xl text-[#02060ceb] font-bold'>{rest.title}</h2>
                    <div>
                    <div className='flex items-center gap-1'><MdStars fontSize={20} fill='green'/>
                    <span>{rest.rating}</span>
                    <span className='font-[600]'>. {rest.minTime}-{rest.maxTime}</span>mins
                    </div>
                    <div className='text-[#02060c99] text-[16px]'>{rest.name}</div>
                    <div className='text-[#02060c99] text-[16px]'>{rest.place}</div>
                    </div>
                    </div>
                </div>
           ) )
        }
    </div>


    </Container>
    </>
  )
}
