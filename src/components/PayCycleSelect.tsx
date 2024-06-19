import React, { useState, useEffect } from 'react'
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
  const [rawValue, setRawValue] = useState('')
  const [maxValue, setMaxValue] = useState(0)

  useEffect(() => {
    setRawValue(
      customPayCycleValue !== '' ? customPayCycleValue.toString() : '',
    )
  }, [customPayCycleValue])

  useEffect(() => {
    const maxValues: { [key: string]: number } = {
      Yearly: 1,
      Monthly: 12,
      Fortnightly: 26,
      Weekly: 52,
      Daily: 260,
      Hourly: 2080,
    }

    setMaxValue(maxValues[payCycle] || 0)
  }, [payCycle])

  const handlePayCycleChange = (value: string) => {
    setPayCycle(value)
    setCustomPayCycleValue('')

    const maxValues: { [key: string]: number } = {
      Yearly: 1,
      Monthly: 12,
      Fortnightly: 26,
      Weekly: 52,
      Daily: 260,
      Hourly: 2080,
    }

    setMaxValue(maxValues[value] || 0)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(
      Math.max(parseInt(e.target.value, 10) || 0, 0),
      maxValue,
    )
    setCustomPayCycleValue(value)
    setRawValue(value.toString())
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <Select value={payCycle} onValueChange={handlePayCycleChange}>
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
          placeholder="Value"
          value={rawValue}
          max={maxValue}
          onChange={handleInputChange}
          className="max-w-[30%] rounded border border-gray-300 p-2"
        />
      )}
    </div>
  )
}

export default PayCycleSelect
