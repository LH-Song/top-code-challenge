import React from 'react'
import { useShowIncomeRecords } from '@/lib/hooks/useShowIncomeRecords'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { formatDate } from '@/lib/utils/formatDate'
import { Separator } from './ui/separator'

const MyIncomeRecords = () => {
  const { records, isLoading, isError, isAuthenticated } =
    useShowIncomeRecords()

  if (isError) return <div className="w-1/2 px-6">Failed to load records</div>
  if (isLoading) return <div className="w-1/2 px-6">Loading...</div>

  return (
    <div className="w-1/2 px-6">
      <div className="flex items-center justify-start gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 text-amber-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          />
        </svg>
        <span>Recent records</span>
      </div>

      {!isAuthenticated ? (
        <div className="mt-4">
          <div>
            Please <span className="text-amber-500">log in </span>
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
