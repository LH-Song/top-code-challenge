import React from 'react'
import { useAtom } from 'jotai'
import { payCycleAtom } from '@/lib/store'
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

  return (
    <Select defaultValue="Yearly" onValueChange={(value) => setPayCycle(value)}>
      <SelectTrigger className="w-full lg:w-[16rem]">
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
  )
}

export default PayCycleSelect
