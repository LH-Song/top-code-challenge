import { useAtom } from 'jotai'
import { afterTaxIncomeAtom } from '@/lib/store'
import { useSession } from 'next-auth/react'
import { useToast } from '@/components/ui/use-toast'

const useSaveIncomeRecord = () => {
  const [afterTaxIncome] = useAtom(afterTaxIncomeAtom)
  const { data: session } = useSession()
  const { toast } = useToast()

  const saveIncomeRecord = async () => {
    if (!session) {
      console.error('User is not authenticated')
      return
    }
    const response = await fetch('/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ afterTaxIncome: afterTaxIncome.toString() }),
    })

    if (!response.ok) {
      console.error('Failed to save income record')
    } else {
      toast({
        variant: 'success',
        description:
          'Record successfully added. Please click "Recent Records" to view.',
      })
    }
  }

  return { saveIncomeRecord }
}

export default useSaveIncomeRecord
