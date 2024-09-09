import React from 'react'
import Container from './Container'

export default function Near() {
    const Near = [
        "Chinese Restaurant Near Me",
"South Indian Restaurant...",
"Indian Restaurant Near Me",
"Kerala Restaurant Near Me",
"Korean Restaurant Near Me",
"North Indian Restaurant...",
"Seafood Restaurant Near Me",
"Bengali Restaurant Near Me",
"Punjabi Restaurant Near Me",
"Italian Restaurant Near Me",
"Andhra Restaurant Near Me",
"Chiense Restaurant Near Me",
      ];
  return (
    <>
    <Container>
    <h1 className='text-3xl font-bold mt-9 mb-2 p-3'>Best Cuisines Near Me</h1>
        <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
          {Near.map((n, index) => (
            <NearMe key={index} name={`${n}`} />
          ))}
        </div>
    </Container>
    </>
  )
}


function NearMe(props) {
    return (
      <div className='px-4 py-2 rounded-[15px] border border-black cursor-pointer'>
        {props.name}
      </div>
    );
  }