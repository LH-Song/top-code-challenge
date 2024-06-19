import { payCycleFactors, TAX_BRACKETS } from '../constants'

export const calculateAnnualIncome = (
  income: number,
  payCycle: keyof typeof payCycleFactors,
  customPayCycleValue?: number,
): number => {
  const factor =
    customPayCycleValue !== undefined && customPayCycleValue !== 0
      ? customPayCycleValue
      : payCycleFactors[payCycle]

  const adjustedCustomPayCycleValue =
    customPayCycleValue === undefined ? 0 : customPayCycleValue

  return (
    income * (customPayCycleValue !== 0 ? adjustedCustomPayCycleValue : factor)
  )
}

export const calculateTaxableIncome = (
  incomeType: string,
  annualIncome: number,
  deductions: number | string,
  businessExpenses: number | string,
): number => {
  const deduc = deductions === '' ? 0 : Number(deductions)
  const businessExp = businessExpenses === '' ? 0 : Number(businessExpenses)

  switch (incomeType) {
    case 'full-time':
    case 'part-time':
    case 'casual':
      return annualIncome - deduc
    case 'contractor':
      return annualIncome - businessExp
    default:
      return annualIncome
  }
}
export const calculateTax = (taxableIncome: number): number => {
  for (let i = TAX_BRACKETS.length - 1; i >= 0; i--) {
    const { limit, rate, base } = TAX_BRACKETS[i]
    if (taxableIncome > limit) {
      return base + (taxableIncome - limit) * rate
    }
  }
  return 0
}
