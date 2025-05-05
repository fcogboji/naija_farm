// src/components/MarketplacePreview.tsx
import Image from 'next/image'
import { products } from '@/data/products'

export default function MarketplacePreview() {
  return (
    <section className="py-16 bg-white text-center px-4">
      <h2 className="text-3xl font-bold mb-10">Sample Products</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, i) => (
          <div key={i} className="border rounded p-4">
            <div className="relative w-full h-40 mb-3">
            <Image
  src={product.image.startsWith('/') ? product.image : `/${product.image}`}
  alt={product.name}
  fill
  className="object-cover rounded"
/>


            </div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-green-600 font-bold">₦{product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
