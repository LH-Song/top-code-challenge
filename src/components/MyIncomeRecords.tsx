import React, { useState } from 'react'
import { Button } from './ui/button'

interface IncomeRecord {
  afterTaxIncome: number
  createdAt: string
}

const MyIncomeRecords = () => {
  const [records, setRecords] = useState<IncomeRecord[]>([])

  const fetchRecords = async () => {
    try {
      const response = await fetch('/api/records')
      if (response.ok) {
        const data = await response.json()
        setRecords(data)
      } else {
        console.error('Failed to fetch income records')
      }
    } catch (error) {
      console.error('An error occurred while fetching income records', error)
    }
  }

  return (
    <div className='px-6'>
      <Button variant="outline" onClick={fetchRecords}>
        Show recent income records
      </Button>

      {records.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm text-amber-500">
            My 5 recent saved income records
          </h3>
          <ul>
            {records.map((record, index) => (
              <li key={index}>{record.afterTaxIncome}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MyIncomeRecords
