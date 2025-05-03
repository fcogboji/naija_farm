'use client' // Enables client-side rendering for interactive components

// Import Link for client-side navigation
import Link from 'next/link'

// Hero section component export
export default function Hero() {
  return (
    // Section with background color, padding, and center alignment
    <section className="bg-green-100 py-20 text-center px-4">
      {/* Main heading with large font */}
      <h1 className="text-5xl font-bold mb-4 text-green-800">Naija Farm Marketplace</h1>
      
      {/* Subtext explaining the platform */}
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Buy fresh farm produce directly from local Nigerian farmers. Skip the middlemen, pay less, and eat fresh!
      </p>
      
      {/* Call-to-action buttons to sign up */}
      <div className="flex justify-center gap-4">
        {/* Link to buyer signup */}
        <Link href="/sign-up?role=buyer">
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Join as Buyer</button>
        </Link>
        
        {/* Link to farmer signup */}
        <Link href="/sign-up?role=farmer">
          <button className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded hover:bg-green-50">
            Join as Farmer
          </button>
        </Link>
      </div>
    </section>
  )
}
