'use client'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const calculatorLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{children}</div>
      </div>
    </>
  )
}

export default calculatorLayout
