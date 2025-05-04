// Import reusable UI components used on the homepage
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import MarketplacePreview from '@/components/MarketplacePreview'
import SecurePayments from '@/components/SecurePayments'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'


// Default export function that renders the homepage layout
export default function Home() {
  return (
    // Main wrapper for the homepage with text color styling
    <main className="text-gray-900">
      {/* Top section of the landing page */}
      <Hero />
      
      {/* Section explaining how the platform works */}
      <HowItWorks />
      
      {/* Benefits for both farmers and buyers */}
      <Benefits />
      
      {/* Preview section showing sample products */}
      <MarketplacePreview />

      
      {/* Explains secure Stripe-powered payments */}
      <SecurePayments />
      
      
      {/* Displays testimonials from real users */}
      <Testimonials />
      
      {/* Bottom section of the page with links */}
      <Footer />
    </main>
  )
}
