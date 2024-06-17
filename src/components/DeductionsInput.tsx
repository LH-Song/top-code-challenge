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
    <div className="flex flex-col gap-6 lg:gap-12 lg:flex-row">
      <Input
        type="number"
        placeholder="Deductions"
        value={deductions}
        onChange={(e) => setDeductions(e.target.value)}
        className="lg:w-[12rem]"
      />
      {incomeType === 'contractor' && (
        <Input
          type="number"
          placeholder="Business expenses"
          value={businessExpenses}
          onChange={(e) => setBusinessExpenses(e.target.value)}
          className="lg:w-[12rem]"
        />
      )}
    </div>
  )
}

export default DeductionsInput
