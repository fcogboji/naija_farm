// src/app/admin/verify/[userId]/route.ts


{/*import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'

export async function POST(
  req: NextRequest,
  context: { params: { userId: string } }
) {
  const { userId: clerkId } = await auth()

  if (!clerkId) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  const admin = await prisma.user.findUnique({
    where: { clerkId }
  })

  if (!admin?.isAdmin) {
    return new NextResponse("Forbidden", { status: 403 })
  }

  const form = await req.formData()
  const action = form.get('action')

  if (action === 'approve') {
    await prisma.user.update({
      where: { id: context.params.userId },
      data: { isVerifiedFarmer: true }
    })
  }

  await prisma.verificationRequest.delete({
    where: { userId: context.params.userId }
  })

  return new NextResponse("Success", { status: 200 })
} */}