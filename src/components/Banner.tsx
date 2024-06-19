import { DotIcon } from './icon'

const Banner = () => {
  return (
    <div className="flex items-center gap-x-6 rounded-t-md bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <strong className="font-semibold">Taxify.io</strong>
          <DotIcon /> Join Us Now For Absolutely Nothing
          <DotIcon /> DO NOT CLICK HERE !
        </a>
      </p>
      <div className="flex flex-1 justify-end"></div>
    </div>
  )
}

export default Banner
