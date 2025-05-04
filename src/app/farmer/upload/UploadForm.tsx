'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UploadForm({ farmerId }: { farmerId: string }) {
  const router = useRouter()
  const [form, setForm] = useState({ title: '', description: '', price: '', imageUrl: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ ...form, farmerId }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      router.push('/dashboard') // redirect after success
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-xl space-y-4">
      <input name="title" onChange={handleChange} placeholder="Title" required className="input" />
      <textarea name="description" onChange={handleChange} placeholder="Description" required className="input" />
      <input name="price" onChange={handleChange} placeholder="Price" type="number" required className="input" />
      <input name="imageUrl" onChange={handleChange} placeholder="Image URL" required className="input" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Upload</button>
    </form>
  )
}
