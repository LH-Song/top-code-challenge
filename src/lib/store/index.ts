import { atom } from 'jotai'

export const incomeAtom = atom<number | ''>('')
export const payCycleAtom = atom<string>('Yearly')
export const incomeTypeAtom = atom<string>('full-time')
export const deductionsAtom = atom<number>(0)
export const businessExpensesAtom = atom<number>(0)
export const taxableIncomeAtom = atom<number>(0)
export const taxAtom = atom<number>(0)
export const percentileAtom = atom<number>(0)