import { prisma } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function AdminVerifyPage() {
  const user = await currentUser()
  if (!user) return redirect('/sign-in')

  const dbUser = await prisma.user.findUnique({ where: { clerkId: user.id } })
  if (!dbUser?.isAdmin) return <div className="p-6">Access denied.</div>

  const requests = await prisma.verificationRequest.findMany({
    include: { user: true },
  })

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Pending Farmer Verification</h2>
      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map(req => (
            <li key={req.id} className="border p-4 rounded shadow">
              <p>Email: {req.user.email}</p>
              <form action={`/admin/verify/${req.userId}`} method="POST" className="space-x-2 mt-2">
                <button name="action" value="approve" className="bg-green-600 text-white px-4 py-1 rounded">Approve</button>
                <button name="action" value="reject" className="bg-red-600 text-white px-4 py-1 rounded">Reject</button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
