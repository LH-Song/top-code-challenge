import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { incomeAtom, taxAtom, percentileAtom } from '@/lib/store'
import { Progress } from '@/components/ui/progress'
import incomeData from '@/lib/data/incomeData.json'
import { formatCurrency } from '@/lib/utils/formatCurrency'

const ResultCompare = () => {
  const [income] = useAtom(incomeAtom)
  const [tax] = useAtom(taxAtom)
  const [percentile, setPercentile] = useAtom(percentileAtom)

  useEffect(() => {
    if (income !== '' && !isNaN(income) && !isNaN(tax)) {
      const afterTaxIncome =
        (typeof income === 'number' ? income : parseFloat(income)) - tax
      setPercentile(calculatePercentile(afterTaxIncome))
    }
  }, [income, tax, setPercentile])

  const calculatePercentile = (income: number) => {
    for (let i = 0; i < incomeData.incomeData.length; i++) {
      if (income < incomeData.incomeData[i].income) {
        return incomeData.incomeData[i - 1]?.percentile || 0
      }
    }
    return 100
  }

  const afterTaxIncome =
    (typeof income === 'number' ? income : parseFloat(income)) - tax

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
