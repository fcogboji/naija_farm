// src/app/products/page.tsx
import { prisma } from '@/lib/db'
import BuyButton from '@/components/BuyButton'

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    include: {
      farmer: true, // Optional: if you want to show farmer info
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
            <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover rounded mb-2" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="font-bold mt-2">₦{product.price.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-1">
             By {(product.farmer as any)?.name || 'Unknown Farmer'}
            </p>
          {/* ✅ Fix here: pass the product ID */}
          <BuyButton productId={product.id} />
          </div>
        ))}
      </div>
    </div>
  )
}
