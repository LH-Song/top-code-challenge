'use client'

import ScrollDownArrow from '@/components/ScrollDownArrow'
import { heroVideo, smallHeroVideo } from '@/lib/utils'
import { initializeHeroAnimations } from '@/lib/utils/gsapAnimations'
import { useGSAP } from '@gsap/react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState('')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 759px)')

    const handleVideoSrcSet = () => {
      setVideoSrc(mediaQuery.matches ? smallHeroVideo : heroVideo)
    }

    handleVideoSrcSet()
    mediaQuery.addEventListener('change', handleVideoSrcSet)

    return () => {
      mediaQuery.removeEventListener('change', handleVideoSrcSet)
    }
  }, [])

  useGSAP(initializeHeroAnimations, [])

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex flex-col items-center justify-center">
        <p
          id="hero"
          className="absolute bg-opacity-0 text-center text-[16vw] font-semibold text-gray-100 opacity-0 max-md:mb-10"
        >
          TaXiFy.io
        </p>
        <div className="">
          <video
            className="pointer-events-none h-screen object-cover"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex translate-y-20 flex-col items-center text-white opacity-0"
      >
        <ScrollDownArrow />
      </div>
    </section>
  )
}

export default Hero
