import CalculatorPageWrapper from '@/components/CalculatorPageWrapper'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CalculatorPageWrapper />
    </Suspense>
  )
}
