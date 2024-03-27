import { data } from 'autoprefixer'
import React, { useState } from 'react'

function Products({age,data}) {
  const [a,b]= useState(false);
  return (

    <><div className='w-100 h-96 bg-zinc-700'>{age}</div>
    <div className='w-100 h-60 bg-zinc-800'>
      <h1>{data.age}</h1>
      <h1>{data.name}</h1>
      <h1>{data.passion}</h1>
      <h2 >test</h2>
      <button onClick={()=>b(!a)} className={`${a === false ? "text-red-600": "text-blue-600" } ,'m-6 p-6 bg-red text-black'`}>{a===false ? "click me to change color" : "click me to change color"}</button>
    </div>

    </>
    
  )
}

export default Products