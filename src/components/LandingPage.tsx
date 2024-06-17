'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import Hero from './Hero'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const LandingPage: React.FC = () => {
  const racesRef = useRef<HTMLDivElement | null>(null)
  const racesWrapperRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const races = racesRef.current!
    const racesWrapper = racesWrapperRef.current!
    const panels = gsap.utils.toArray('.races .slogan')

    const tween = gsap.to(races, {
      x: -(races.scrollWidth - window.innerWidth),
      duration: 3,
      ease: 'none',
    })

    ScrollTrigger.create({
      trigger: racesWrapper,
      start: 'top top',
      end: () => '+=' + (races.offsetWidth - innerWidth),

      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
      snap: {
        snapTo: 1 / (panels.length - 1),
        inertia: false,
        duration: { min: 0.1, max: 0.1 },
      },
    })
  }, [])

  return (
    <div className="bg-black">
      <Hero />
      <div className="racesWrapper" ref={racesWrapperRef}>
        <div className="races flex w-fit flex-nowrap lg:h-fit" ref={racesRef}>
          <div className="slogan bg-amber-500">
            <h2>Income Tax Calculator</h2>
          </div>
          <div className="slogan bg-red-700">
            <h2>Australian GST calculator</h2>
          </div>
          <div className="slogan bg-lime-600">
            <h2>slogan 3</h2>
          </div>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center text-9xl text-white">
        <Link href={'/calculator'}>Try now</Link>
      </div>
    </div>
  )
}

export default LandingPage
