import React from 'react'
import Container from './Container'

export default function Explore() {
  return (
    <>
    <Container>
    <h1 className='text-3xl font-bold mt-9 mb-2 p-3'>Explore Every Restaurants Near Me</h1>
    <div className="flex flex-wrap justify-between">
    <div className='px-4 py-2 mt-3 rounded-[15px] border border-black cursor-pointer w-[460px] text-center'>
    Explore Restaurants Near Me
      </div>
    <div className='px-4 py-2 mt-3 rounded-[15px] border border-black cursor-pointer w-[460px] text-center'>
    Explore Top Rated Restaurants Near Me
      </div>
    </div>
    </Container>
    </>
  )
}
