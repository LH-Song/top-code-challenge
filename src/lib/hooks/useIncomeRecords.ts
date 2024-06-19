import useSWR, { mutate } from 'swr'

interface IncomeRecord {
  afterTaxIncome: number
  createdAt: string
}

const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (response.status === 401) {
    throw new Error('Not authenticated')
  }
  return response.json()
}

export const useIncomeRecords = () => {
  const { data, error } = useSWR<IncomeRecord[]>('/api/records', fetcher)

  const isAuthenticated = !(error && error.message === 'Not authenticated')

  return {
    records: data,
    isLoading: !error && !data,
    isError: error && error.message !== 'Not authenticated',
    isAuthenticated,
    mutateRecords: () => mutate('/api/records'),
  }
}
