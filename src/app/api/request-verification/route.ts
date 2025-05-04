import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'

export async function POST() {
  const { userId } = await auth()
  if (!userId) return new Response("Unauthorized", { status: 401 })

  const user = await prisma.user.findUnique({ where: { clerkId: userId } })
  if (!user || user.isVerifiedFarmer)
    return new Response("Not allowed", { status: 403 })

  await prisma.verificationRequest.upsert({
    where: { userId: user.id },
    update: {},
    create: { userId: user.id },
  })

  return new Response("Request submitted", { status: 200 })
}
