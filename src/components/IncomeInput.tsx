import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { incomeAtom } from '@/lib/store'
import { Input } from '@/components/ui/input'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { handleCurrencyInputChange } from '@/lib/utils/handleCurrencyInputChange'

const IncomeInput = () => {
  const [income, setIncome] = useAtom(incomeAtom)
  const [rawValue, setRawValue] = useState('')

  useEffect(() => {
    if (income !== '') {
      setRawValue(formatCurrency(income))
    } else {
      setRawValue('')
    }
  }, [income])

  return (
    <Input
      type="text"
      placeholder="Income"
      value={rawValue}
      onChange={(e) => handleCurrencyInputChange(e, setIncome, setRawValue)}
      className="lg:w-[12rem]"
    />
  )
}

export default IncomeInput
