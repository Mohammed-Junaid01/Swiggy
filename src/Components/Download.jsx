import React from 'react'
import Container from './Container'

export default function Download() {
  return (
    <>
    <div className="bg-[#f0f0f5] mt-10">
    <Container>
        <div className="flex flex-wrap justify-center md:justify-between py-14 items-center">
            <div className='w-[100%] p-2 md:w-[44%] text-[16px] md:text-[28px] font-[800] text-[#02060cbf]'>
            For better experience,download the Swiggy app now
            </div>
            <div className='flex w-[100%] p-2 md:w-[44%] justify-between'>
                <div><img className='w-[220px]' src="/images/play_store.png" alt="" /></div>
                <div><img className='w-[220px]' src="/images/app_store.png" alt="" /></div>
            </div>
        </div>
    </Container>
    </div>
    </>
  )
}
