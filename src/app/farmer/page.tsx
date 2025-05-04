'use client'

import { useState } from 'react'

export function VerificationRequestButton({ alreadyRequested }: { alreadyRequested: boolean }) {
  const [status, setStatus] = useState(alreadyRequested ? 'requested' : 'idle')

  const handleClick = async () => {
    const res = await fetch('/api/request-verification', { method: 'POST' })
    if (res.ok) setStatus('requested')
  }

  return (
    <button
      disabled={status === 'requested'}
      onClick={handleClick}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
    >
      {status === 'requested' ? 'Verification Requested' : 'Request Verification'}
    </button>
  )
}
