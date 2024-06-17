'use client'

import React, { Suspense, useState } from 'react'
import CalculatorPage from '@/components/CalculatorPage'
import { useSyncStateFromURL } from '@/lib/hooks/useSyncStateFromURL'
import { useCalculateTax } from '@/lib/hooks/useCalculateTax'

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
