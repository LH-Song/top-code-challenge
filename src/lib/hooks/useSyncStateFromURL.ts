import {
  businessExpensesAtom,
  customPayCycleValueAtom,
  deductionsAtom,
  incomeAtom,
  incomeTypeAtom,
  payCycleAtom,
} from '@/lib/store'
import { useAtom } from 'jotai'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useSyncStateFromURL = () => {
  const [income, setIncome] = useAtom(incomeAtom)
  const [payCycle, setPayCycle] = useAtom(payCycleAtom)
  const [customPayCycleValue, setCustomPayCycleValue] = useAtom(customPayCycleValueAtom)
  const [incomeType, setIncomeType] = useAtom(incomeTypeAtom)
  const [deductions, setDeductions] = useAtom(deductionsAtom)
  const [businessExpenses, setBusinessExpenses] = useAtom(businessExpensesAtom)
  const searchParams = useSearchParams()

  useEffect(() => {
    const incomeParam = searchParams.get('income')
    const payCycleParam = searchParams.get('payCycle')
    const customPayCycleValueParam = searchParams.get('customPayCycleValue')
    const incomeTypeParam = searchParams.get('incomeType')
    const deductionsParam = searchParams.get('deductions')
    const businessExpensesParam = searchParams.get('businessExpenses')

    if (incomeParam !== null) setIncome(Number(incomeParam))
    if (payCycleParam !== null) setPayCycle(payCycleParam)
    if (customPayCycleValueParam !== null) setCustomPayCycleValue(Number(customPayCycleValueParam))
    if (incomeTypeParam !== null) setIncomeType(incomeTypeParam)
    if (deductionsParam !== null) setDeductions(Number(deductionsParam))
    if (businessExpensesParam !== null) setBusinessExpenses(Number(businessExpensesParam))
  }, [
    searchParams,
    setBusinessExpenses,
    setCustomPayCycleValue,
    setDeductions,
    setIncome,
    setIncomeType,
    setPayCycle,
  ])
}