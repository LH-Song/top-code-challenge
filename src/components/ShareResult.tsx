import React from 'react'
import html2canvas from 'html2canvas'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share'
import { Button } from '@/components/ui/button'

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
    <div className="mt-4">
      <Button onClick={handleScreenshot}>Download Screenshot</Button>
      <div className="mt-2 flex space-x-2">
        <FacebookShareButton url={shareUrl} hashtag="#TaxCalculator">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title="Check out my tax calculation result!"
          hashtags={['TaxCalculator']}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </div>
  )
}

export default ShareResult
