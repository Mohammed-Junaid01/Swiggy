import React from 'react'
import Headers from './Components/Headers'
import Category from './Components/Category'
import Restorant from './Components/Restorant'
import Food from './Components/Food'
import Cities from './Components/Cities'
import Near from './Components/Near'
import Explore from './Components/Explore'
import Download from './Components/Download'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
    <Headers />
    <Category />
    <hr className='my-3' />
    <Restorant />
    <hr className='my-2 mb-6' />
    <Food />
    <hr className='my-2 mb-6' />
    <Cities />
    <Near />
    <Explore />
    <Download />
    <Footer />
    </>
  )
}
