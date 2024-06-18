import {
  businessExpensesAtom,
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
  const [incomeType, setIncomeType] = useAtom(incomeTypeAtom)
  const [deductions, setDeductions] = useAtom(deductionsAtom)
  const [businessExpenses, setBusinessExpenses] = useAtom(businessExpensesAtom)
  const searchParams = useSearchParams()

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
  }, [
    searchParams,
    setBusinessExpenses,
    setDeductions,
    setIncome,
    setIncomeType,
    setPayCycle,
  ])
}
