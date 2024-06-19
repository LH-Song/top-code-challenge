import { payCycleFactors } from '@/lib/constants'
import {
  businessExpensesAtom,
  customPayCycleValueAtom,
  deductionsAtom,
  incomeAtom,
  incomeTypeAtom,
  payCycleAtom,
  taxableIncomeAtom,
  taxAtom,
} from '@/lib/store'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import {
  calculateAnnualIncome,
  calculateTax,
  calculateTaxableIncome,
} from '@/lib/utils/taxCalculator'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

const ResultDisplay = () => {
  const [income] = useAtom(incomeAtom)
  const [payCycle] = useAtom(payCycleAtom)
  const [incomeType] = useAtom(incomeTypeAtom)
  const [deductions] = useAtom(deductionsAtom)
  const [businessExpenses] = useAtom(businessExpensesAtom)
  const [taxableIncome, setTaxableIncome] = useAtom(taxableIncomeAtom)
  const [tax, setTax] = useAtom(taxAtom)
  const [customPayCycleValue] = useAtom(customPayCycleValueAtom)

  useEffect(() => {
    if (income === '') return

    const annualIncome = calculateAnnualIncome(
      Number(income),
      payCycle as keyof typeof payCycleFactors,
      customPayCycleValue !== '' ? Number(customPayCycleValue) : undefined,
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
    customPayCycleValue,
    incomeType,
    deductions,
    businessExpenses,
    setTaxableIncome,
    setTax,
  ])

  const afterTaxIncome = taxableIncome - tax

  return (
    <div className="mx-6 text-xs">
      <div>Taxable income: AUD {formatCurrency(taxableIncome)}</div>
      <div>Tax: AUD {formatCurrency(tax)}</div>
      <div>After tax income: AUD {formatCurrency(afterTaxIncome)}</div>
    </div>
  )
}

export default ResultDisplay
