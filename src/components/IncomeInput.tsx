import { Input } from '@/components/ui/input'
import { incomeAtom } from '@/lib/store'
import { handleCurrencyInputChange } from '@/lib/utils/handleCurrencyInputChange'
import { useAtom } from 'jotai'
import useCurrencyFormatter from '@/lib/hooks/useCurrencyFormatter'

const IncomeInput = () => {
  const [income, setIncome] = useAtom(incomeAtom)
  const numericIncome = typeof income === 'number' ? income : 0
  const [formattedValue, setFormattedValue] =
    useCurrencyFormatter(numericIncome)

  return (
    <Input
      type="text"
      placeholder="Income"
      value={formattedValue}
      onChange={(e) =>
        handleCurrencyInputChange(e, setIncome, setFormattedValue)
      }
      className="lg:w-[12rem]"
    />
  )
}

export default IncomeInput
