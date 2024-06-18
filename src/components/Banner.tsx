const Banner = () => {
  return (
    <div className="flex items-center gap-x-6 rounded-t-md bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <strong className="font-semibold">Taxify.io</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Join Us Now For Absolutely Nothing
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          DO NOT CLICK HERE !
        </a>
      </p>
      <div className="flex flex-1 justify-end"></div>
    </div>
  )
}

export default Banner
