import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import {
  deductionsAtom,
  incomeTypeAtom,
  businessExpensesAtom,
} from '@/lib/store'
import { Input } from '@/components/ui/input'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { handleCurrencyInputChange } from '@/lib/utils/handleCurrencyInputChange'

const DeductionsInput = () => {
  const [deductions, setDeductions] = useAtom(deductionsAtom)
  const [incomeType] = useAtom(incomeTypeAtom)
  const [businessExpenses, setBusinessExpenses] = useAtom(businessExpensesAtom)
  const [deductionsRawValue, setDeductionsRawValue] = useState('')
  const [businessExpensesRawValue, setBusinessExpensesRawValue] = useState('')

  useEffect(() => {
    if (deductions !== 0) {
      setDeductionsRawValue(formatCurrency(deductions))
    } else {
      setDeductionsRawValue('')
    }
  }, [deductions])

  useEffect(() => {
    if (businessExpenses !== 0) {
      setBusinessExpensesRawValue(formatCurrency(businessExpenses))
    } else {
      setBusinessExpensesRawValue('')
    }
  }, [businessExpenses])

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <Input
        type="text"
        placeholder="Deductions"
        value={deductionsRawValue}
        onChange={(e) =>
          handleCurrencyInputChange(e, setDeductions, setDeductionsRawValue)
        }
        className="lg:w-[12rem]"
      />
      {incomeType === 'contractor' && (
        <Input
          type="text"
          placeholder="Business expenses"
          value={businessExpensesRawValue}
          onChange={(e) =>
            handleCurrencyInputChange(
              e,
              setBusinessExpenses,
              setBusinessExpensesRawValue,
            )
          }
          className="lg:w-[12rem]"
        />
      )}
    </div>
  )
}

export default DeductionsInput
