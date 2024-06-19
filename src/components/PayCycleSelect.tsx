import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { payCycleAtom, customPayCycleValueAtom } from '@/lib/store'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { payCycles } from '@/lib/constants'
import { handlePayCycleAmountInputChange } from '@/lib/utils/handlePayCycleAmountInputChange'

const PayCycleSelect = () => {
  const [payCycle, setPayCycle] = useAtom(payCycleAtom)
  const [customPayCycleValue, setCustomPayCycleValue] = useAtom(
    customPayCycleValueAtom,
  )
  const [rawValue, setRawValue] = useState('')

  const handlePayCycleChange = (value: string) => {
    setPayCycle(value)
    if (value === 'Yearly') {
      setCustomPayCycleValue('')
    }
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <Select defaultValue="Yearly" onValueChange={handlePayCycleChange}>
        <SelectTrigger className="w-full lg:w-[8rem]">
          <SelectValue placeholder="Pay Cycle" />
        </SelectTrigger>
        <SelectContent>
          {payCycles.map((cycle) => (
            <SelectItem key={cycle.value} value={cycle.value}>
              {cycle.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {payCycle !== 'Yearly' && (
        <input
          type="number"
          placeholder="value"
          value={customPayCycleValue}
          onChange={(e) =>
            handlePayCycleAmountInputChange(
              e,
              setCustomPayCycleValue,
              setRawValue,
            )
          }
          className="max-w-[30%] rounded border border-gray-300 p-2"
        />
      )}
    </div>
  )
}

export default PayCycleSelect
