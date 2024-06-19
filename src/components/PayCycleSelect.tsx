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

const PayCycleSelect = () => {
  const [payCycle, setPayCycle] = useAtom(payCycleAtom)
  const [customPayCycleValue, setCustomPayCycleValue] = useAtom(
    customPayCycleValueAtom,
  )

  const handlePayCycleChange = (value: string) => {
    setPayCycle(value)
    if (value === 'Yearly') {
      setCustomPayCycleValue('') 
    }
  }

  return (
    <div className='flex items-center justify-center gap-2'>
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
          onChange={(e) => setCustomPayCycleValue(Number(e.target.value))}
          className="rounded border border-gray-300 p-2 w-[4vw]"
        />
      )}
    </div>
  )
}

export default PayCycleSelect
