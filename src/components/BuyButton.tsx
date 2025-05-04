'use client' // 👈 must be the first line

import { useRouter } from 'next/navigation'

export default function BuyButton({ productId }: { productId: string }) {
  const router = useRouter()

  const handleBuy = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ productId }),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    router.push(data.url)
  }

  return (
    <button onClick={handleBuy} className="bg-green-600 text-white px-4 py-2 rounded">
      Buy Now
    </button>
  )
}
