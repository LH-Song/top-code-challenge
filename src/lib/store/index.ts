import { atom } from 'jotai'

export const incomeAtom = atom<number | ''>('')
export const payCycleAtom = atom<string>('Yearly')
export const incomeTypeAtom = atom<string>('full-time')
export const deductionsAtom = atom<number | string>('')
export const businessExpensesAtom = atom<number | string>('')
export const taxableIncomeAtom = atom<number>(0)
export const taxAtom = atom<number>(0)
