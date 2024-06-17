import React, { useRef, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share'
import html2canvas from 'html2canvas'

const ShareResult = ({
  resultRef,
}: {
  resultRef: React.RefObject<HTMLDivElement>
}) => {
  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href)
    }
  }, [])

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
        <FacebookShareButton
          url={shareUrl}
          quote="Check out my tax calculation result!"
          hashtag="#TaxCalculator"
        >
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
