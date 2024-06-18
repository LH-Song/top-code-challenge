'use client'

import DeductionsInput from '@/components/DeductionsInput'
import IncomeInput from '@/components/IncomeInput'
import IncomeTypeRadioGroup from '@/components/IncomeTypeRadioGroup'
import PayCycleSelect from '@/components/PayCycleSelect'
import ResultDisplay from '@/components/ResultDisplay'
import ShareResult from '@/components/ShareResult'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { SignInButton, SignOutButton } from './buttons'
import ResultCompare from './ResultCompare'
import { Button } from './ui/button'
import { useAtom } from 'jotai'
import { afterTaxIncomeAtom } from '@/lib/store'
import { IncomeRecord } from '@/types/incomeRecord'
import { useSession } from 'next-auth/react'
import MyIncomeRecords from './MyIncomeRecords'


const CalculatorPage = ({ shareUrl }: { shareUrl: string }) => {
  const resultRef = useRef<HTMLDivElement>(null)
  const [afterTaxIncome] = useAtom(afterTaxIncomeAtom)
  const [records, setRecords] = useState<IncomeRecord[]>([])
  const { data: session } = useSession()
  
  const handleSave = async () => {
    if (!session) {
      console.error('User is not authenticated')
      return
    }
    const response = await fetch('/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ afterTaxIncome: afterTaxIncome.toString() }),
    })
  
    if (!response.ok) {
      console.error('Failed to save income record')
    }
  }

  const fetchRecords = async () => {
    const response = await fetch('/api/records')
    if (response.ok) {
      const data = await response.json()
      setRecords(data.records)
    } else {
      console.error('Failed to fetch income records')
    }
  }

  return (
    <>
      <Card ref={resultRef} className="text-sm">
        <CardHeader>
          <CardTitle>Income</CardTitle>
          <CardDescription>
            Enter your salary, adjust the settings and see the results in the
            summary below.
          </CardDescription>
        </CardHeader>

        <div>
          <div className="lg:flex justify-between">
            <CardContent>
              <IncomeInput />
            </CardContent>
            <CardContent>
              <PayCycleSelect />
            </CardContent>
          </div>
          <CardContent>
            <IncomeTypeRadioGroup />
          </CardContent>
          <CardContent>
            <DeductionsInput />
          </CardContent>
        </div>

        <div className="flex w-full flex-col gap-6">
          <div className='lg:flex-row flex flex-col justify-between gap-4'>
            <ResultDisplay />
            <MyIncomeRecords />
          </div>
          <ResultCompare />
        </div>

        <div className="flex w-full flex-col justify-end lg:flex-row">
          <ShareResult resultRef={resultRef} shareUrl={shareUrl} />
        </div>

        <CardFooter className="flex justify-between">
          <Link href={'/'} className="flex items-end gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-amber-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="text-sm">home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger>
                <SignInButton />
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="flex w-full flex-col justify-between gap-2 rounded-2xl"
              >
                <div className="flex w-full justify-between gap-2">
                  <Button variant="outline" onClick={handleSave}>
                    save
                  </Button>
                  <SignOutButton />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}

export default CalculatorPage
