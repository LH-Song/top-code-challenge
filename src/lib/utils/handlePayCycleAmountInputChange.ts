export const handlePayCycleAmountInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setAmount: (value: number | '') => void,
  setRawValue: (value: string) => void,
) => {
  const value = e.target.value

  if (value === '') {
    setAmount('')
    setRawValue('')
    return
  }

  const numericValue = value.replace(/[^0-9]/g, '')

  if (numericValue !== '') {
    const parsedValue = parseInt(numericValue, 10)
    setAmount(parsedValue)
    setRawValue(numericValue)
  } else {
    setAmount(0)
    setRawValue('')
  }
}
