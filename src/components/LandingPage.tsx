'use client'

import { slogans1, slogans2, slogans3 } from '@/lib/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import React, { useRef } from 'react'
import Hero from './Hero'
import ScrollDownIndicator from './ScrollDownIndicator'
import SloganGroup from './SloganGroup'
import {
  animateSloganGroup,
  verticalScrollTrigger,
} from '@/lib/utils/gsapAnimations'

gsap.registerPlugin(ScrollTrigger)

const LandingPage: React.FC = () => {
  const panelsRef = useRef<HTMLDivElement | null>(null)
  const panelsWrapperRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const panels = panelsRef.current!
    const panelsWrapper = panelsWrapperRef.current!
    const h2Elements = panels.querySelectorAll('h2') as NodeListOf<HTMLElement>

    animateSloganGroup(h2Elements, panelsWrapper)
    verticalScrollTrigger(panelsWrapper)
  }, [])

  return (
    <>
      <div className="bg-black">
        <ScrollDownIndicator />

        <Hero />
        <div className="panelsWrapper" ref={panelsWrapperRef}>
          <div
            className="panels flex w-fit flex-nowrap lg:h-fit"
            ref={panelsRef}
          >
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
