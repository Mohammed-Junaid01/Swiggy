// import React from 'react'
// import Container from './Container'

// export default function Cities() {
//   return (
      
//     <>
//     <Container>
//         <h1 className='text-2xl font-bold my-5 p-3'></h1>
//         <div className="flex">
//             <CityData />
//         </div>

//     </Container>
//     </>
    
//   )
// }


// function CityData(props){
//     return(
//         <>
//         <div className='hidden md:block px-4 py-1 rounded-[15px] border border-black cursor-pointer'>
//         {props.name}
//          </div>
//         </>
//     )
// }

import React from 'react';
import Container from './Container';

export default function Cities() {
  const cities = [
    "Bangalore",
    "Pune",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Kolkata",
    "Chennai",
    "Chandigarh",
    "Ahmedabad",
    "Jaipur",
    "Nagpur",
    "Jhodpur"
  ];

  return (
    <>
      <Container>
        <h1 className='text-2xl font-bold my-5 p-3'>Best Places to Eat Across Cities</h1>
        <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
          {cities.map((city, index) => (
            <CityData key={index} name={`Best Restaurants in ${city}`} />
          ))}
        </div>
        
      </Container>
    </>
  );
}

function CityData(props) {
  return (
    <div className='px-4 py-2 rounded-[15px] border border-black cursor-pointer'>
      {props.name}
    </div>
  );
}
