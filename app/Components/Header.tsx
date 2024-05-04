'use client'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import { AnimatePresence } from 'framer-motion';
import Curve from './Curve';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isOpen) setIsOpen(false)
  }, [pathname])

  return (
    <>
    <div className="">

      <div className='p-4 fixed right-0 z-10 overflow-hidden'>
        <div onClick={() => {setIsOpen(!isOpen)}} className="bg-indigo-500 w-12 h-12 rounded-full cursor-pointer flex items-center justify-center">
          <div className={`burger ${isOpen ?  'burgerActive' : ""}`}></div>
        </div>
      </div>

    </div>
    <AnimatePresence mode="wait">
      {isOpen && <Navbar  />}
    </AnimatePresence>
    </>
  )
}