import { Progress } from '@/components/ui/progress'
import { payCycleFactors } from '@/lib/constants'
import mockIncomeData from '@/lib/data/mockIncomeData.json'
import { incomeAtom, payCycleAtom, percentileAtom, taxAtom } from '@/lib/store'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

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
    for (let i = 0; i < mockIncomeData.mockIncomeData.length; i++) {
      if (income < mockIncomeData.mockIncomeData[i].income) {
        return mockIncomeData.mockIncomeData[i - 1]?.percentile || 0
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
