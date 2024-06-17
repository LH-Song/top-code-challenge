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
    <div className="mx-4 mt-4 gap-8 lg:flex lg:flex-col space-y-6 lg:space-y-0">
      <Button
        onClick={handleScreenshot}
        className="w-[12rem] bg-white text-black hover:bg-black hover:text-white justify-start"
      >
        Download Snapshot
      </Button>

      <TwitterShareButton
        url={shareUrl}
        title="Check out my tax calculation result!"
        hashtags={['TaxCalculator']}
      >
        <Button className="flex w-[12rem] items-center justify-start gap-4 bg-white text-black hover:bg-black hover:text-white">
          <TwitterIcon size={32} round />
          <p>Share on X</p>
        </Button>
      </TwitterShareButton>
    </div>
  )
}

export default ShareResult
