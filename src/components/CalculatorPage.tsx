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
import { Separator } from '@/components/ui/separator'

const CalculatorPage = ({ shareUrl }: { shareUrl: string }) => {
  const resultRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-[80vw] lg:h-[40vh]">
      <Card ref={resultRef}>
        <CardHeader>
          <CardTitle>Income</CardTitle>
          <CardDescription>
            Enter your salary, adjust the settings and see the results in the
            summary below.
          </CardDescription>
        </CardHeader>
        <div className="gap-14 lg:flex">
          <div className="">
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
          <Separator orientation="vertical" className="h-auto" />

          <div className="flex flex-col gap-6">
            <div>
              <ResultDisplay />
            </div>
            <ShareResult resultRef={resultRef} shareUrl={shareUrl} />
          </div>
          <Separator orientation="vertical" className="w-10vw h-auto" />
          <div className="flex flex-col gap-6">
            <ResultDisplay />
          </div>
        </div>

        <CardFooter></CardFooter>
      </Card>
    </div>
  )
}

export default CalculatorPage
