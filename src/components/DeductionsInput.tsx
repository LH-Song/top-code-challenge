import React from 'react'
import { useAtom } from 'jotai'
import {
  deductionsAtom,
  incomeTypeAtom,
  businessExpensesAtom,
} from '@/lib/store'
import { Input } from '@/components/ui/input'

const DeductionsInput = () => {
  const [deductions, setDeductions] = useAtom(deductionsAtom)
  const [incomeType] = useAtom(incomeTypeAtom)
  const [businessExpenses, setBusinessExpenses] = useAtom(businessExpensesAtom)

  return (
    <>
      <Input
        type="number"
        placeholder="Deductions"
        value={deductions}
        onChange={(e) => setDeductions(e.target.value)}
        className="mb-4"
      />
      {incomeType === 'contractor' && (
        <Input
          type="number"
          placeholder="Business expenses"
          value={businessExpenses}
          onChange={(e) => setBusinessExpenses(e.target.value)}
          className="mb-4"
        />
      )}
    </>
  )
}

export default DeductionsInput
