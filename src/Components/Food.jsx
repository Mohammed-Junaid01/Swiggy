import React, { useEffect, useRef, useState } from 'react';
import Container from './Container';
import Restorants from '../data/restaurantChains';
import { MdStars } from "react-icons/md";


export default function Food() {
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(componentRef.current){
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <>
      <Container>
    <div ref={componentRef} className='max-w-[1200px] mx-auto'>
        <h1 className='text-2xl font-bold mb-5 p-3'>Restaurants with online food delivery in Chhindwara</h1>
        <div className={isAtTop ? 'hidden md:block md:fixed md:top-0 md:left-0 md:z-50 md:bg-white md:md:pl-[114px] md:p-0 md:pb-3 md:w-full' : ''}>
         <div className="flex gap-3 w-full p-3 bg-white">  
          <Filter name="Filter" />
          <Filter name="Sort By" />
          <Filter name="New on Swiggy" />
          <Filter name="Ratings 4.0+" />
          <Filter name="Pure Veg" />
          <Filter name="Offers" />
          <Filter name="Rs. 300-Rs. 600" />
          <Filter name="Less than Rs. 300" />
        </div>
        </div>

        <div className="flex flex-wrap">
        {
            Restorants.map((rest,index) => (
                <div key={index} className='w-full md:w-[260px] scale-90 hover:scale-100 duration-500 mt-2' >
                    <div className='w-full md:w-[260px] h-[182px] rounded-[25px] overflow-hidden relative'>
                        <img className='object-cover w-full h-full' src={`/images/${rest.image}`} />
                        <div className="overlay absolute w-full h-full top-0 start-0">
                            <div className='text-xl font-bold text-[white] absolute bottom-1 start-2'>{rest.offer}</div>
                            </div>
                    </div>
                    <div className='text-[24px] md:text-[16px] p-3 pt-2 pb-1'>
                    <h2 className='text-xl text-[#02060ceb] font-bold'>{rest.title}</h2>
                    <div>
                    <div className='flex items-center gap-1'><MdStars fontSize={20} fill='green'/>
                    <span>{rest.rating}</span>
                    <span className='font-[400] md:font-[600]'>. {rest.minTime}-{rest.maxTime}</span>mins
                    </div>
                    <div className='text-[#02060c99] text-[16px]'>{rest.name}</div>
                    <div className='text-[#02060c99] text-[16px]'>{rest.place}</div>
                    </div>
                    </div>
                </div>
           ) )
        }
    </div>


      </div>
      </Container>
    </>
  );
}

function Filter(props) {
  return (
    <>
      <div className='hidden md:block px-4 py-1 rounded-[15px] border border-black cursor-pointer'>
        {props.name}
      </div>
    </>
  );
}
