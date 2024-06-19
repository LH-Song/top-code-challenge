'use client'

import CalculatorPage from '@/components/CalculatorPage'
import { useCalculateTax } from '@/lib/hooks/useCalculateTax'
import { useSyncStateFromURL } from '@/lib/hooks/useSyncStateFromURL'
import { Suspense, useState } from 'react'

const CalculatorPageWrapper = () => {
  const [shareUrl, setShareUrl] = useState('')
  useSyncStateFromURL()
  useCalculateTax(setShareUrl)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CalculatorPage shareUrl={shareUrl} />
    </Suspense>
  )
}

export default CalculatorPageWrapper
