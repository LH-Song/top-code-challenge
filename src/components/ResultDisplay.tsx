import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import {
  incomeAtom,
  payCycleAtom,
  incomeTypeAtom,
  deductionsAtom,
  businessExpensesAtom,
  taxableIncomeAtom,
  taxAtom,
} from '@/lib/store'
import {
  calculateAnnualIncome,
  calculateTaxableIncome,
  calculateTax,
} from '@/lib/utils/taxCalculator'
import { payCycleFactors } from '@/lib/constants'

const ResultDisplay = () => {
  const [income] = useAtom(incomeAtom)
  const [payCycle] = useAtom(payCycleAtom)
  const [incomeType] = useAtom(incomeTypeAtom)
  const [deductions] = useAtom(deductionsAtom)
  const [businessExpenses] = useAtom(businessExpensesAtom)
  const [taxableIncome, setTaxableIncome] = useAtom(taxableIncomeAtom)
  const [tax, setTax] = useAtom(taxAtom)

  useEffect(() => {
    if (income === '') return

    const annualIncome = calculateAnnualIncome(
      Number(income),
      payCycle as keyof typeof payCycleFactors,
    )
    const taxable = calculateTaxableIncome(
      incomeType,
      annualIncome,
      deductions,
      businessExpenses,
    )
    setTaxableIncome(taxable)
    const taxAmount = calculateTax(taxable)
    setTax(taxAmount)
  }, [
    income,
    payCycle,
    incomeType,
    deductions,
    businessExpenses,
    setTaxableIncome,
    setTax,
  ])

  return (
    <div className="mx-6">
      <div>Taxable Income: AUD${taxableIncome}</div>
      <div>Tax: AUD${tax}</div>
    </div>
  )
}

export default ResultDisplay
