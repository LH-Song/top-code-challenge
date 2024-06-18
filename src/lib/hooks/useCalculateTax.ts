import { payCycleFactors } from '@/lib/constants'
import {
  businessExpensesAtom,
  deductionsAtom,
  incomeAtom,
  incomeTypeAtom,
  payCycleAtom,
  taxableIncomeAtom,
  taxAtom,
} from '@/lib/store'
import {
  calculateAnnualIncome,
  calculateTax,
  calculateTaxableIncome,
} from '@/lib/utils/taxCalculator'
import { useAtom } from 'jotai'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export const useCalculateTax = (setShareUrl: (url: string) => void) => {
  const [income, setIncome] = useAtom(incomeAtom)
  const [payCycle] = useAtom(payCycleAtom)
  const [incomeType] = useAtom(incomeTypeAtom)
  const [deductions] = useAtom(deductionsAtom)
  const [businessExpenses] = useAtom(businessExpensesAtom)
  const [taxableIncome, setTaxableIncome] = useAtom(taxableIncomeAtom)
  const [tax, setTax] = useAtom(taxAtom)
  const pathname = usePathname()

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

    const params = new URLSearchParams({
      income: String(income),
      payCycle,
      incomeType,
      deductions: String(deductions),
      businessExpenses: String(businessExpenses),
    }).toString()

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    setShareUrl(`${baseUrl}${pathname}?${params}`)
  }, [
    income,
    payCycle,
    incomeType,
    deductions,
    businessExpenses,
    pathname,
    setTaxableIncome,
    setTax,
    setShareUrl,
  ])
}
