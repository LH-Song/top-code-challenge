'use client'

import CalculatorPage from '@/components/CalculatorPage'
import { useCalculateTax } from '@/lib/hooks/useCalculateTax'
import { useSyncStateFromURL } from '@/lib/hooks/useSyncStateFromURL'
import { useState } from 'react'

const CalculatorPageWrapper = () => {
  const [shareUrl, setShareUrl] = useState('')
  useSyncStateFromURL()
  useCalculateTax(setShareUrl)

  return <CalculatorPage shareUrl={shareUrl} />
}

export default CalculatorPageWrapper
