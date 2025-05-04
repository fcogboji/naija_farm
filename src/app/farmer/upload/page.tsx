import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import UploadForm from './UploadForm'
import { prisma } from '@/lib/db'

export default async function UploadPage() {
  const user = await currentUser()
  if (!user) return redirect('/sign-in')

  const dbUser = await prisma.user.findUnique({ where: { clerkId: user.id } })
  if (!dbUser || !dbUser.isVerifiedFarmer) {
    return <div className="p-6 text-red-500">You must be a verified farmer to upload products.</div>
  }

  return <UploadForm farmerId={dbUser.id} />
}
