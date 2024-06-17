'use client'

import React from 'react'
import IncomeInput from '@/components/IncomeInput'
import PayCycleSelect from '@/components/PayCycleSelect'
import IncomeTypeRadioGroup from '@/components/IncomeTypeRadioGroup'
import DeductionsInput from '@/components/DeductionsInput'
import ResultDisplay from '@/components/ResultDisplay'

const CalculatorPage = () => {
  return (
    <>
      <IncomeInput />
      <PayCycleSelect />
      <IncomeTypeRadioGroup />
      <DeductionsInput />
      <ResultDisplay />
    </>
  )
}

export default CalculatorPage
