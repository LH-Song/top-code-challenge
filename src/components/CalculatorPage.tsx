'use client'

import React, { useRef } from 'react'
import IncomeInput from '@/components/IncomeInput'
import PayCycleSelect from '@/components/PayCycleSelect'
import IncomeTypeRadioGroup from '@/components/IncomeTypeRadioGroup'
import DeductionsInput from '@/components/DeductionsInput'
import ResultDisplay from '@/components/ResultDisplay'
import ShareResult from '@/components/ShareResult'

const CalculatorPage = ({ shareUrl }: { shareUrl: string }) => {
  const resultRef = useRef<HTMLDivElement>(null)

  return (
    <div className="p-4">
      <IncomeInput />
      <PayCycleSelect />
      <IncomeTypeRadioGroup />
      <DeductionsInput />
      <div ref={resultRef}>
        <ResultDisplay />
      </div>
      <ShareResult resultRef={resultRef} shareUrl={shareUrl} />
    </div>
  )
}

export default CalculatorPage
