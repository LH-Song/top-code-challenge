import React, { useState, useEffect } from 'react'

const ScrollDownIndicator: React.FC = () => {
  const [isScrollable, setIsScrollable] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)
  const [isPast100vh, setIsPast100vh] = useState(false)

  useEffect(() => {
    const checkScrollable = () => {
      if (document.body.scrollHeight > window.innerHeight) {
        setIsScrollable(true)
      } else {
        setIsScrollable(false)
      }
    }

    const checkScrollPosition = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsPast100vh(true)
      } else {
        setIsPast100vh(false)
      }

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setIsAtBottom(true)
      } else {
        setIsAtBottom(false)
      }
    }

    checkScrollable()
    checkScrollPosition()

    window.addEventListener('resize', checkScrollable)
    window.addEventListener('scroll', checkScrollPosition)

    return () => {
      window.removeEventListener('resize', checkScrollable)
      window.removeEventListener('scroll', checkScrollPosition)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 transform flex-col items-center text-amber-500 transition-opacity duration-1000 ${
        isScrollable && !isAtBottom && isPast100vh ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex animate-bounce flex-col items-center">
        <p className="text-xl font-normal">scroll down</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 duration-1000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
    </div>
  )
}

export default ScrollDownIndicator
