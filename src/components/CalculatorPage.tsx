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
import { useRef } from 'react'
import ResultCompare from './ResultCompare'

const CalculatorPage = ({ shareUrl }: { shareUrl: string }) => {
  const resultRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Card ref={resultRef}>
        <CardHeader>
          <CardTitle>Income</CardTitle>
          <CardDescription>
            Enter your salary, adjust the settings and see the results in the
            summary below.
          </CardDescription>
        </CardHeader>

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

        <div className="flex w-full flex-col gap-6">
          <div>
            <ResultDisplay />
          </div>
          <ResultCompare />
        </div>

        <div className="flex w-full flex-col justify-end gap-6 lg:flex-row">
          <ShareResult resultRef={resultRef} shareUrl={shareUrl} />
        </div>

        <CardFooter></CardFooter>
      </Card>
    </>
  )
}

export default CalculatorPage
