'use client'
import Banner from '@/components/Banner'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const calculatorLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center overflow-y-scroll bg-calculator-background bg-cover bg-center shadow">
        <div className="max-w-9xl px-4 py-5 sm:p-6">
          <Banner />
          {children}
        </div>
      </div>
    </>
  )
}

export default calculatorLayout
