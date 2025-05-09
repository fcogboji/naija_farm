// src/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const links = [
    { href: '/farmer/upload', label: 'upload' },
    { href: '/products', label: 'Products' },
    { href: '/contact-us', label: 'Contact-us' },
    { href: '/dashboard', label: 'Dashboard' },
  ]
  

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-green-700">
          Naija Farm
        </Link>
        <div className="flex items-center space-x-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium hover:text-green-600 ${
                pathname === href ? 'text-green-700 font-bold' : ''
              }`}
            >
              {label}
            </Link>
          ))}
          <SignedOut>
            <Link
              href="/sign-in"
              className="bg-green-700 text-white px-4 py-1.5 rounded text-sm"
            >
              Sign In
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}
