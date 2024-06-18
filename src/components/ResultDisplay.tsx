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
import { formatCurrency } from '@/lib/utils/formatCurrency'

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

  const afterTaxIncome = taxableIncome - tax

  return (
    <div className="mx-6">
      <div>Taxable income: AUD {formatCurrency(taxableIncome)}</div>
      <div>Tax: AUD {formatCurrency(tax)}</div>
      <div>After tax income: AUD {formatCurrency(afterTaxIncome)}</div>
    </div>
  )
}

export default ResultDisplay
