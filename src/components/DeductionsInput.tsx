import { Input } from '@/components/ui/input'
import useCurrencyFormatter from '@/lib/hooks/useCurrencyFormatter'
import {
  businessExpensesAtom,
  deductionsAtom,
  incomeTypeAtom,
} from '@/lib/store'
import { handleCurrencyInputChange } from '@/lib/utils/handleCurrencyInputChange'
import { useAtom } from 'jotai'

const DeductionsInput = () => {
  const [deductions, setDeductions] = useAtom(deductionsAtom)
  const [incomeType] = useAtom(incomeTypeAtom)
  const [businessExpenses, setBusinessExpenses] = useAtom(businessExpensesAtom)
  const [deductionsRawValue, setDeductionsRawValue] =
    useCurrencyFormatter(deductions)
  const [businessExpensesRawValue, setBusinessExpensesRawValue] =
    useCurrencyFormatter(businessExpenses)

  return (
    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-12">
      {incomeType !== 'contractor' && (
        <Input
          type="text"
          placeholder="Deductions"
          value={deductionsRawValue}
          onChange={(e) =>
            handleCurrencyInputChange(e, setDeductions, setDeductionsRawValue)
          }
          className="lg:w-[12rem]"
        />
      )}
      {incomeType === 'contractor' && (
        <Input
          type="text"
          placeholder="Business expenses"
          value={businessExpensesRawValue}
          onChange={(e) =>
            handleCurrencyInputChange(
              e,
              setBusinessExpenses,
              setBusinessExpensesRawValue,
            )
          }
          className="lg:w-[12rem]"
        />
      )}
    </div>
  )
}

export default DeductionsInput
