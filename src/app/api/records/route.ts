import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import authOptions from '../auth/[...nextauth]/options'
import prisma from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const session = await getServerSession({ req, ...authOptions })

  if (!session) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
  }

  try {
    const records = await prisma.incomeRecord.findMany({
      where: { userId: session.user.id! },
      orderBy: { createdAt: 'desc' },
      take: 5,
    })
    return NextResponse.json(records, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to retrieve income records' },
      { status: 500 },
    )
  }
}
