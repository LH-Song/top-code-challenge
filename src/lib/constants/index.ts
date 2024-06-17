export const payCycleFactors = {
  Monthly: 12,
  Fortnightly: 26,
  Weekly: 52,
  Daily: 260, // Assuming 5 workdays a week
  Hourly: 2080, // Assuming 40 hours a week
  Yearly: 1,
}

export const TAX_BRACKETS = [
  { limit: 18200, rate: 0, base: 0 },
  { limit: 45000, rate: 0.19, base: 0 },
  {
    limit: 120000,
    rate: 0.325,
    base: 5092,
  },
  {
    limit: 180000,
    rate: 0.37,
    base: 29467,
  },
  {
    limit: Infinity,
    rate: 0.45,
    base: 51667,
  },
]

export const payCycles = [
  { value: 'Yearly', label: 'Yearly' },
  {
    value: 'Monthly',
    label: 'Monthly',
  },
  {
    value: 'Fortnightly',
    label: 'Fortnightly',
  },
  { value: 'Weekly', label: 'Weekly' },
  { value: 'Daily', label: 'Daily' },
  { value: 'Hourly', label: 'Hourly' },
]

export const incomeTypes = [
  {
    value: 'full-time',
    label: 'Full-time',
  },
  {
    value: 'part-time',
    label: 'Part-time',
  },
  { value: 'casual', label: 'Casual' },
  {
    value: 'contractor',
    label: 'Contractor',
  },
]
