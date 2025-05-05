// src/app/products/page.tsx
import { prisma } from '@/lib/db'
import BuyButton from '@/components/BuyButton'
import Image from 'next/image'
import { Product, Farmer } from '@prisma/client'

type ProductWithFarmer = Product & {
  farmer: Farmer | null
}

export default async function ProductsPage() {
  const products: ProductWithFarmer[] = await prisma.product.findMany({
    include: {
      farmer: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-2">All Farm Products</h1>
      <p className="mb-6">Browse all available items listed by our verified farmers.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow-sm">
            <div className="relative w-full h-48 mb-2">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="font-bold mt-2">₦{product.price.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-1">
              By {product.farmer?.name || 'Unknown Farmer'}
            </p>
            <BuyButton productId={product.id} />
          </div>
        ))}
      </div>
    </div>
  )
}
