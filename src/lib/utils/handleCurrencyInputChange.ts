export const handleCurrencyInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setIncome: (value: number) => void,
  setRawValue: (value: string) => void,
) => {
  const value = e.target.value

  if (value === '') {
    setIncome(0)
    setRawValue('')
    return
  }

  const numericValue = value.replace(/[^0-9.]/g, '')

  if ((numericValue.match(/\./g) || []).length > 1) {
    return
  }

  if (numericValue !== '') {
    const parsedValue = parseFloat(numericValue)
    setIncome(parsedValue)
    setRawValue(numericValue)
  } else {
    setIncome(0)
    setRawValue('')
  }
}
