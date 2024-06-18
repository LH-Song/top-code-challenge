import React from 'react'
import { Progress } from '@/components/ui/progress'

const ResultCompare = () => {
  return (
    <div className="mt-6 space-y-6 px-6">
      <div>You have out-earned 80% of people in Australia.</div>

      <Progress value={33} />
    </div>
  )
}

export default ResultCompare
