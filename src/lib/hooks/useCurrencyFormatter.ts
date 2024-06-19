import { useState, useEffect } from 'react'
import { formatCurrency } from '@/lib/utils/formatCurrency'

const useCurrencyFormatter = (value: number) => {
  const [formattedValue, setFormattedValue] = useState('')

  useEffect(() => {
    if (value !== 0) {
      setFormattedValue(formatCurrency(value))
    } else {
      setFormattedValue('')
    }
  }, [value])

  return [formattedValue, setFormattedValue] as const
}

export default useCurrencyFormatter
