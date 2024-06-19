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
import useSaveIncomeRecord from '@/lib/hooks/useSaveIncomeRecord'
import Link from 'next/link'
import { useRef } from 'react'
import { SignInButton, SignOutButton } from './buttons'
import MyIncomeRecords from './MyIncomeRecords'
import PayCycleInfo from './PayCycleInfo'
import ResultCompare from './ResultCompare'
import { Button } from './ui/button'
import { HomeIcon } from '@/components/icon'

const CalculatorPage = ({ shareUrl }: { shareUrl: string }) => {
  const resultRef = useRef<HTMLDivElement>(null)
  const { saveIncomeRecord } = useSaveIncomeRecord()

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
          <div className="justify-between lg:flex">
            <CardContent>
              <IncomeInput />
            </CardContent>
            <CardContent>
              <PayCycleSelect />
            </CardContent>
          </div>
          <CardContent className="p-0">
            <div className="justify-between p-0 lg:flex">
              <CardContent>
                <IncomeTypeRadioGroup />
              </CardContent>

              <CardContent>
                <PayCycleInfo />
              </CardContent>
            </div>
          </CardContent>
          <CardContent>
            <DeductionsInput />
          </CardContent>
        </div>

        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
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
            <HomeIcon />
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
                  <Button variant="outline" onClick={saveIncomeRecord}>
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
