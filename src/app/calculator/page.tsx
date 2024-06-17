'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import IncomeInput from '@/components/IncomeInput'
import PayCycleSelect from '@/components/PayCycleSelect'
import IncomeTypeRadioGroup from '@/components/IncomeTypeRadioGroup'
import DeductionsInput from '@/components/DeductionsInput'
import ResultDisplay from '@/components/ResultDisplay'
import ShareResult from '@/components/ShareResult'
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

const CalculatorPage = () => {
  const resultRef = useRef<HTMLDivElement>(null)
  const [income, setIncome] = useAtom(incomeAtom)
  const [payCycle, setPayCycle] = useAtom(payCycleAtom)
  const [incomeType, setIncomeType] = useAtom(incomeTypeAtom)
  const [deductions, setDeductions] = useAtom(deductionsAtom)
  const [businessExpenses, setBusinessExpenses] = useAtom(businessExpensesAtom)
  const [taxableIncome, setTaxableIncome] = useAtom(taxableIncomeAtom)
  const [tax, setTax] = useAtom(taxAtom)
  const [shareUrl, setShareUrl] = useState('')
  const searchParams = useSearchParams()
  const pathname = usePathname()

  useEffect(() => {
    const incomeParam = searchParams.get('income')
    const payCycleParam = searchParams.get('payCycle')
    const incomeTypeParam = searchParams.get('incomeType')
    const deductionsParam = searchParams.get('deductions')
    const businessExpensesParam = searchParams.get('businessExpenses')

    if (incomeParam) setIncome(Number(incomeParam))
    if (payCycleParam) setPayCycle(payCycleParam)
    if (incomeTypeParam) setIncomeType(incomeTypeParam)
    if (deductionsParam) setDeductions(Number(deductionsParam))
    if (businessExpensesParam)
      setBusinessExpenses(Number(businessExpensesParam))
  }, [searchParams])

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
  }, [income, payCycle, incomeType, deductions, businessExpenses, pathname])

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
