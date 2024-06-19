import { Input } from '@/components/ui/input'
import { incomeAtom } from '@/lib/store'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { handleCurrencyInputChange } from '@/lib/utils/handleCurrencyInputChange'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

const IncomeInput = () => {
  const [income, setIncome] = useAtom(incomeAtom)
  const [rawValue, setRawValue] = useState('')

  useEffect(() => {
    if (income !== '') {
      setRawValue(formatCurrency(income))
    } else {
      setRawValue('')
    }
  }, [income])

  return (
    <Input
      type="text"
      placeholder="Income"
      value={rawValue}
      onChange={(e) => handleCurrencyInputChange(e, setIncome, setRawValue)}
      className="lg:w-[12rem]"
    />
  )
}

export default IncomeInput
