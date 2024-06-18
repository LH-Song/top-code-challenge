'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef, useEffect } from 'react'
import Hero from './Hero'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const LandingPage: React.FC = () => {
  const racesRef = useRef<HTMLDivElement | null>(null)
  const racesWrapperRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const races = racesRef.current!
    const racesWrapper = racesWrapperRef.current!
    const h2Elements = races.querySelectorAll('h2')

    h2Elements.forEach((h2, index) => {
      const speed = 1 + index * 0.4 

      gsap.to(h2, {
        x: -1.3 * window.innerWidth * speed,
        scale: 4.5,
        y: 200,
        delay: 1.5,
        scrollTrigger: {
          fastScrollEnd: true,
          trigger: racesWrapper,
          start: 'top top',
          end: () => '+=' + (races.offsetWidth - innerWidth),
          scrub: true,
          markers: true,
        },
      })
    })

    ScrollTrigger.create({
      trigger: racesWrapper,
      start: 'top top',
      end: () => '+=' + (races.offsetWidth - innerWidth),
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
    })
  }, [])

  return (
    <div className="bg-black">
      <Hero />
      <div className="racesWrapper" ref={racesWrapperRef}>
        <div className="races flex w-fit flex-nowrap lg:h-fit" ref={racesRef}>
          <div className="slogan flex flex-col space-y-12 bg-black text-white">
            <h2>
              Income Tax{' '}
              <span className="z-50 text-amber-500">NeEd HeLp ?</span>
            </h2>
            <h2>Income Tax Calculator</h2>
            <h2>Income Tax Calculator</h2>
            <h2>Income Tax Calculator</h2>
            <h2>Income Tax Calculator</h2>
          </div>
          <div className="slogan flex flex-col space-y-12 bg-black text-white">
            <h2>Income Tax Calculator</h2>
            <h2>Income Tax Calculator</h2>
            <h2>Income Tax Calculator</h2>
            <h2>Income Tax Calculator</h2>
            <h2>Income Tax Calculator</h2>
          </div>
          <div className="slogan flex flex-col space-y-12 bg-black text-white">
            <h2>Income Tax Calculator</h2>
            <h2>Income Tax Calculator</h2>
            <h2>Income Tax Calculator</h2>
            <h2>Income Tax Calculator</h2>
            <h2>Income Tax Calculator</h2>
          </div>
        </div>
      </div>
      <div className="flex-col flex  h-screen items-start justify-center text-9xl text-white">
        <Link href={'/calculator'} className='animate-bounce'>TrY NoW</Link>
        <h2>
         <span className="z-50 text-amber-500 text-[24vw] lg:text-[18vw]">wE gOTcHa!</span>
        </h2>
      </div>
    </div>
  )
}

export default LandingPage
