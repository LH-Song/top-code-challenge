'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Label } from '@/components/ui/label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const CalculatorPage = () => {
  return (
    <>
      <Input
        type="number"
        placeholder="income"
      />

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Pay Cycle" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Monthly">
            MonthlyWeeklyDailyHourly
          </SelectItem>
          <SelectItem value="Fortnightly">
            Fortnightly
          </SelectItem>
          <SelectItem value="system">
            System
          </SelectItem>
          <SelectItem value="system">
            System
          </SelectItem>
          <SelectItem value="system">
            System
          </SelectItem>
        </SelectContent>
      </Select>

      <RadioGroup defaultValue="full-time">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="full-time"
            id="r1"
          />
          <Label htmlFor="r2">
            Full-time
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="part-time"
            id="r2"
          />
          <Label htmlFor="r2">
            Part-time
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="casual"
            id="r3"
          />
          <Label htmlFor="r3">
            Casual
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="contractor"
            id="r4"
          />
          <Label htmlFor="r4">
            Contractor
          </Label>
        </div>
      </RadioGroup>
    </>
  )
}

export default CalculatorPage
