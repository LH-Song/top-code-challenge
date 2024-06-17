import React from 'react'
import { useAtom } from 'jotai'
import { incomeTypeAtom } from '@/lib/store'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { incomeTypes } from '@/lib/constants'

const IncomeTypeRadioGroup = () => {
  const [incomeType, setIncomeType] = useAtom(incomeTypeAtom)

  return (
    <RadioGroup
      defaultValue="full-time"
      onValueChange={(value) => setIncomeType(value)}
    >
      {incomeTypes.map((type) => (
        <div key={type.value} className="flex items-center space-x-2">
          <RadioGroupItem value={type.value} id={`r${type.value}`} />
          <Label htmlFor={`r${type.value}`}>{type.label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}

export default IncomeTypeRadioGroup