'use client'

import { slogans1, slogans2, slogans3 } from '@/lib/constants'; 
import { animateHeading } from '@/lib/utils/gsapAnimations'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import React, { useRef } from 'react'
import Hero from './Hero'
import ScrollDownIndicator from './ScrollDownIndicator'
import SloganGroup from './SloganGroup'

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
      animateHeading(h2 as HTMLElement, speed, racesWrapper)
    })

    ScrollTrigger.create({
      trigger: racesWrapper,
      start: 'top top',
      end: () => '+=' + (races.scrollWidth - window.innerWidth),
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: false,
    })
  }, [])

  return (
    <>
      <div className="bg-black">
        <ScrollDownIndicator />

        <Hero />
        <div className="racesWrapper" ref={racesWrapperRef}>
          <div className="races flex w-fit flex-nowrap lg:h-fit" ref={racesRef}>
            <SloganGroup slogans={slogans1} isFirstGroup={true} />
            <SloganGroup slogans={slogans2} />
            <SloganGroup slogans={slogans3} />
          </div>
        </div>
        <div className="flex h-screen flex-col items-start justify-center text-9xl text-white">
          <Link href={'/calculator'} className="animate-bounce">
            TrY NoW
          </Link>
          <h2>
            <span className="z-50 text-[24vw] text-amber-500 lg:text-[18vw]">
              wE gOTcHa!
            </span>
          </h2>
        </div>
      </div>
    </>
  )
}

export default LandingPage
