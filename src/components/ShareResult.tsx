import { Button } from '@/components/ui/button'
import html2canvas from 'html2canvas'
import { TwitterIcon, TwitterShareButton } from 'next-share'
import React from 'react'

const ShareResult = ({
  resultRef,
  shareUrl,
}: {
  resultRef: React.RefObject<HTMLDivElement>
  shareUrl: string
}) => {
  const handleScreenshot = async () => {
    if (resultRef.current) {
      const canvas = await html2canvas(resultRef.current)
      const image = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = image
      link.download = 'result.png'
      link.click()
    }
  }

  return (
    <div className="w-full gap-4 space-y-4 p-4 lg:flex lg:flex-row lg:justify-between lg:gap-0 lg:space-y-0">
      <Button
        onClick={handleScreenshot}
        className="w-[50vw] justify-start bg-white text-black hover:bg-black hover:text-white lg:w-[10vw]"
      >
        download screenshot
      </Button>

      <TwitterShareButton
        url={shareUrl}
        title="Check out my tax calculation result!"
        hashtags={['TaxCalculator']}
      >
        <div className="flex w-[50vw] items-center justify-start gap-4 rounded-md bg-white px-4 py-2 text-black hover:bg-black hover:text-white lg:w-[10vw] lg:justify-end">
          <TwitterIcon size={24} round />
          <p>share on X</p>
        </div>
      </TwitterShareButton>
    </div>
  )
}

export default ShareResult
