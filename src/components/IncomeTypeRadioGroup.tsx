import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { incomeTypes } from '@/lib/constants'
import { incomeTypeAtom } from '@/lib/store'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

const IncomeTypeRadioGroup = () => {
  const [incomeType, setIncomeType] = useAtom(incomeTypeAtom)

  useEffect(() => {
    setIncomeType(incomeType)
  }, [incomeType, setIncomeType])

  return (
    <RadioGroup
      value={incomeType}
      onValueChange={(value) => setIncomeType(value)}
    >
      {incomeTypes.map((type) => (
        <div key={type.value} className="flex items-center space-x-2">
          <RadioGroupItem
            className={`${incomeType === '' ? 'border-amber-500' : ''}`}
            value={type.value}
            id={`r${type.value}`}
          />
          <Label htmlFor={`r${type.value}`}>{type.label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}

export default IncomeTypeRadioGroup
