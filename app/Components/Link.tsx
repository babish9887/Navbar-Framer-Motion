import React from 'react'
import {motion} from 'framer-motion'
import { slide } from './animation'

function Link({isActive, title, href, index}: any) {
  return (
    <motion.div 
    variants={slide}
    animate="enter"
    exit="exit"
    initial="initial"
    custom={index}
    className='w-full h-[40px] text-3xl pl-8 '>
      <a href={href}>{title}</a>
    </motion.div>
  )
}

export default Link
