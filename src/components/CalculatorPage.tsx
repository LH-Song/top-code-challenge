'use client'

import React, { useRef } from 'react'
import IncomeInput from '@/components/IncomeInput'
import PayCycleSelect from '@/components/PayCycleSelect'
import IncomeTypeRadioGroup from '@/components/IncomeTypeRadioGroup'
import DeductionsInput from '@/components/DeductionsInput'
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

const CalculatorPage = ({ shareUrl }: { shareUrl: string }) => {
  const resultRef = useRef<HTMLDivElement>(null)

  return (
    <div className="h-[40vh] w-[80vw]">
      <Card>
        <CardHeader>
          <CardTitle>Income</CardTitle>
          <CardDescription>
            Enter your salary, adjust the settings and see the results in the
            summary below.
          </CardDescription>
        </CardHeader>
        <div className='flex gap-4'>
          <div>
            <div className="lg:flex">
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

          <div className='w-full'>
            <div ref={resultRef}>
              <ResultDisplay />
            </div>
            <ShareResult resultRef={resultRef} shareUrl={shareUrl} />
          </div>
        </div>

        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CalculatorPage
