import React from 'react'
import { useAtom } from 'jotai'
import { incomeAtom } from '@/lib/store'
import { Input } from '@/components/ui/input'

const IncomeInput = () => {
  const [income, setIncome] = useAtom(incomeAtom)

  return (
    <Input
      type="number"
      placeholder="Income"
      value={income}
      onChange={(e) =>
        setIncome(e.target.value !== '' ? Number(e.target.value) : '')
      }
      className="mb-4"
    />
  )
}

export default IncomeInput
