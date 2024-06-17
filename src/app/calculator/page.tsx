'use client'

import React, {
  useState,
  useEffect,
} from 'react'
import { Input } from '@/components/ui/input'
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

const calculateAnnualIncome = (
  income: number,
  payCycle: string,
): number => {
  const payCycleFactors: { [key: string]: number } = {
    Monthly: 12,
    Fortnightly: 26,
    Weekly: 52,
    Daily: 260, // Assuming 5 workdays a week
    Hourly: 2080, // Assuming 40 hours a week
    Yearly: 1,
  }
  return (
    income * payCycleFactors[payCycle]
  )
}

const calculateTaxableIncome = (
  incomeType: string,
  annualIncome: number,
  deductions: number,
  businessExpenses: number,
): number => {
  switch (incomeType) {
    case 'full-time':
    case 'part-time':
    case 'casual':
      return annualIncome - deductions
    case 'contractor':
      return (
        annualIncome - businessExpenses
      )
    default:
      return annualIncome
  }
}

const calculateTax = (
  taxableIncome: number,
): number => {
  if (taxableIncome <= 18200) return 0
  if (taxableIncome <= 45000)
    return (
      (taxableIncome - 18200) * 0.19
    )
  if (taxableIncome <= 120000)
    return (
      5092 +
      (taxableIncome - 45000) * 0.325
    )
  if (taxableIncome <= 180000)
    return (
      29467 +
      (taxableIncome - 120000) * 0.37
    )
  return (
    51667 +
    (taxableIncome - 180000) * 0.45
  )
}

const CalculatorPage = () => {
  const [income, setIncome] = useState<
    number | ''
  >('')
  const [payCycle, setPayCycle] =
    useState<string>('Yearly')
  const [incomeType, setIncomeType] =
    useState<string>('full-time')
  const [deductions, setDeductions] =
    useState<number | string>('')
  const [
    businessExpenses,
    setBusinessExpenses,
  ] = useState<number | string>('')
  const [
    taxableIncome,
    setTaxableIncome,
  ] = useState<number>(0)
  const [tax, setTax] =
    useState<number>(0)

  useEffect(() => {
    if (income === '') return

    const annualIncome =
      calculateAnnualIncome(
        Number(income),
        payCycle,
      )
    const taxable =
      calculateTaxableIncome(
        incomeType,
        annualIncome,
        Number(deductions) || 0,
        Number(businessExpenses) || 0,
      )
    setTaxableIncome(taxable)
    const taxAmount =
      calculateTax(taxable)
    setTax(taxAmount)
  }, [
    income,
    payCycle,
    incomeType,
    deductions,
    businessExpenses,
  ])

  return (
    <div className="p-4">
      <Input
        type="number"
        placeholder="Income"
        value={income}
        onChange={(e) =>
          setIncome(
            e.target.value !== ''
              ? Number(e.target.value)
              : '',
          )
        }
        className="mb-4"
      />

      <Select
        defaultValue="Yearly"
        onValueChange={(value) =>
          setPayCycle(value)
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Pay Cycle" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Yearly">
            Yearly
          </SelectItem>
          <SelectItem value="Monthly">
            Monthly
          </SelectItem>
          <SelectItem value="Fortnightly">
            Fortnightly
          </SelectItem>
          <SelectItem value="Weekly">
            Weekly
          </SelectItem>
          <SelectItem value="Daily">
            Daily
          </SelectItem>
          <SelectItem value="Hourly">
            Hourly
          </SelectItem>
        </SelectContent>
      </Select>

      <RadioGroup
        defaultValue="full-time"
        onValueChange={(value) =>
          setIncomeType(value)
        }
      >
        {[
          'full-time',
          'part-time',
          'casual',
          'contractor',
        ].map((type, index) => (
          <div
            key={index}
            className="flex items-center space-x-2"
          >
            <RadioGroupItem
              value={type}
              id={`r${index + 1}`}
            />
            <Label
              htmlFor={`r${index + 1}`}
            >
              {type
                .charAt(0)
                .toUpperCase() +
                type.slice(1)}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <Input
        type="number"
        placeholder="Deductions"
        value={deductions}
        onChange={(e) =>
          setDeductions(e.target.value)
        }
        className="mb-4"
      />

      {incomeType === 'contractor' && (
        <Input
          type="number"
          placeholder="Business expenses"
          value={businessExpenses}
          onChange={(e) =>
            setBusinessExpenses(
              e.target.value,
            )
          }
          className="mb-4"
        />
      )}

      <div className="mt-4">
        <div>
          Taxable Income:{' '}
          {taxableIncome}
        </div>
        <div>Income Tax: {tax}</div>
      </div>
    </div>
  )
}

export default CalculatorPage
