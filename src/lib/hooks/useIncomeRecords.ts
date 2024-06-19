import useSWR, { mutate } from 'swr'

interface IncomeRecord {
  afterTaxIncome: number
  createdAt: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useIncomeRecords = () => {
  const { data, error } = useSWR<IncomeRecord[]>('/api/records', fetcher)

  return {
    records: data,
    isLoading: !error && !data,
    isError: error,
    mutateRecords: () => mutate('/api/records'),
  }
}
