import { NextRequest } from 'next/server'
import { auth } from '@clerk/nextjs/server'

import { prisma } from '@/lib/db'

export async function POST(req: NextRequest, { params }: { params: { userId: string } }) {
  const { userId: clerkId } = await auth()
  if (!clerkId) return new Response("Unauthorized", { status: 401 })

  const admin = await prisma.user.findUnique({ where: { clerkId } })
  if (!admin?.isAdmin) return new Response("Forbidden", { status: 403 })

  const form = await req.formData()
  const action = form.get('action')

  if (action === 'approve') {
    await prisma.user.update({
        where: { id: params.userId },
        data: { isVerifiedFarmer: true } // ✅ Correct field name
      })
      
  }

  await prisma.verificationRequest.delete({ where: { userId: params.userId } })

  return new Response("Success", { status: 200 })
}
