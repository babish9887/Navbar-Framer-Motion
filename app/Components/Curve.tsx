import React from 'react'

function Curve() {
      const initialPath=`M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
  return (
    <svg className='left-[-100px] absolute w-[100px] h-screen bg-gray-800'>
      <path d={initialPath}></path>
    </svg>
  )
}

export default Curve