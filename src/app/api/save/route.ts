import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import authOptions from '../auth/[...nextauth]/options'
import prisma from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const session = await getServerSession({ req, ...authOptions })

  if (!session) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
  }

  const { afterTaxIncome } = await req.json()

  if (!afterTaxIncome) {
    return NextResponse.json(
      { message: 'Missing afterTaxIncome' },
      { status: 400 },
    )
  }

  try {
    const record = await prisma.incomeRecord.create({
      data: {
        userId: session.user.id!,
        afterTaxIncome: parseFloat(afterTaxIncome),
      },
    })
    return NextResponse.json(record, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to save income record' },
      { status: 500 },
    )
  }
}
