import React from 'react'

const ScrollDownArrow: React.FC = () => (
  <div className="flex animate-bounce flex-col items-center">
    <p className="text-xl font-normal">scroll down</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
      />
    </svg>
  </div>
)

export default ScrollDownArrow
