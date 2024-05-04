import React from 'react'
import Link from './Link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { menuSlide, menuSlideTemp } from './animation'
import Curve from './Curve'

function Navbar() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]
  return (
      <>
    <motion.div
      variants={menuSlideTemp}
      animate={"visible"}
      exit={"hidden"}
      initial="initial"
      className={clsx(` absolute right-0 w-[400px] bg-gray-800 h-screen flex items-center flex-col justify-center text-gray-200`,
)}>
      <div>
        <h2 className='text-4xl uppercase mb-12'>Navigation</h2>
      </div>
      <div className='flex flex-col gap-4 w-full '>
        {
              navItems.map((data, index) => {
                    return <Link key={index} index={index} title={data.title} href={data.href} isActive={true} />
                  })
            }
      </div>
    </motion.div>
            </>
  )
}

export default Navbar
