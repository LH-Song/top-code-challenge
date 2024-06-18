import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { incomeAtom, taxAtom, payCycleAtom, percentileAtom } from '@/lib/store'
import { Progress } from '@/components/ui/progress'
import incomeData from '@/lib/data/incomeData.json'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { payCycleFactors } from '@/lib/constants'

const ResultCompare = () => {
  const [income] = useAtom(incomeAtom)
  const [tax] = useAtom(taxAtom)
  const [payCycle] = useAtom(payCycleAtom)
  const [percentile, setPercentile] = useAtom(percentileAtom)

  useEffect(() => {
    if (income !== '' && !isNaN(income) && !isNaN(tax)) {
      const annualIncome = calculateAnnualIncome(income, payCycle)
      const afterTaxIncome = annualIncome - tax
      setPercentile(calculatePercentile(afterTaxIncome))
    }
  }, [income, tax, payCycle, setPercentile])

  const calculateAnnualIncome = (income: number, payCycle: string) => {
    const factor =
      payCycleFactors[payCycle as keyof typeof payCycleFactors] || 1
    return income * factor
  }

  const calculatePercentile = (income: number) => {
    for (let i = 0; i < incomeData.incomeData.length; i++) {
      if (income < incomeData.incomeData[i].income) {
        return incomeData.incomeData[i - 1]?.percentile || 0
      }
    }
    return 100
  }

  return (
    <div className="mt-6 space-y-6 px-6">
      <div>
        You have out-earned{' '}
        <span className="text-amber-500">{percentile}% </span>of people in
        Australia.
      </div>
      <Progress value={percentile} />
    </div>
  )
}

export default ResultCompare
