import React from 'react'
import { useShowIncomeRecords } from '@/lib/hooks/useShowIncomeRecords'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { formatDate } from '@/lib/utils/formatDate'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'
import { IncomeIcon } from './icon'

const MyIncomeRecords = () => {
  const { records, isLoading, isError, isAuthenticated } =
    useShowIncomeRecords()

  if (isError) return <div className="w-1/2 px-6">Failed to load records</div>
  if (isLoading) return <div className="w-1/2 px-6">Loading...</div>

  return (
    <div className="w-1/2 px-6">
      <div className="flex items-center justify-end gap-2">
        <IncomeIcon />
        <span>Recent records</span>
      </div>

      {!isAuthenticated ? (
        <div className="mt-4 text-right">
          <div>
            Please
            <Button
              variant="ghost"
              className="h-5 p-2 text-amber-500"
              onClick={() => signIn()}
            >
              log in
            </Button>
            <br />
            to review your records.
          </div>
        </div>
      ) : records && records.length > 0 ? (
        <div className="mt-4 text-xs">
          <ul>
            {records.map((record, index) => (
              <React.Fragment key={index}>
                <li>
                  <div className="flex justify-between">
                    <div>after tax income:</div>
                    <div>{formatCurrency(record.afterTaxIncome)}</div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <div>date:</div>
                    <div>{formatDate(record.createdAt)}</div>
                  </div>
                </li>
                <Separator />
              </React.Fragment>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-4">
          <p>
            <span className="text-amber-500">NO </span> records yet. <br />
            Calculate your income and <br />
            hit the
            <span className="text-amber-500"> SAVE</span> button below. <br />
          </p>
        </div>
      )}
    </div>
  )
}

export default MyIncomeRecords
