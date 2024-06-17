'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '@/lib/utils'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState('')

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    handleVideoSrcSet()
    window.addEventListener('resize', handleVideoSrcSet)
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2.9, duration: 2 })
    gsap.to('#cta', {
      opacity: 1,
      y: -150,
      delay: 2.9,
      duration: 1.5,
    })
  }, [])

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex flex-col items-center justify-center">
        <p
          id="hero"
          className="absolute bg-opacity-0 text-center text-[16vw] font-semibold text-gray-100 opacity-0 max-md:mb-10"
        >
          Taxify.io
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
        className="flex translate-y-20 flex-col items-center opacity-0"
      >
        <p className="animate-bounce text-xl font-normal text-white">
          Scroll down
        </p>
      </div>
    </section>
  )
}

export default Hero
