import React from 'react'

interface SloganGroupProps {
  slogans: string[]
  isFirstGroup?: boolean
}

const SloganGroup: React.FC<SloganGroupProps> = ({ slogans, isFirstGroup }) => {
  return (
    <div className="slogan flex flex-col space-y-12 bg-black text-white">
      {slogans.map((slogan, index) => (
        <h2 key={index}>
          {index === 0 ? (
            <span
              className={`pl-[24vw] ${isFirstGroup ? 'z-50 text-amber-500 opacity-100' : ''}`}
            >
              {slogan}
            </span>
          ) : (
            slogan
          )}
        </h2>
      ))}
    </div>
  )
}

export default SloganGroup
