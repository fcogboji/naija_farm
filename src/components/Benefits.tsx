// Component that displays benefits of using the platform
export default function Benefits() {
    return (
      // Section with light background and centered text
      <section className="py-16 bg-green-50 text-center px-4">
        {/* Section heading */}
        <h2 className="text-3xl font-bold mb-10">Why Use Naija Farm Marketplace?</h2>
        
        {/* Grid with 3 columns for benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Benefit for farmers */}
          <div>
            <h3 className="font-bold text-xl mb-2">For Farmers</h3>
            <p>Reach buyers directly, set your own prices, and get paid faster.</p>
          </div>
          
          {/* Benefit for buyers */}
          <div>
            <h3 className="font-bold text-xl mb-2">For Buyers</h3>
            <p>Access fresher food at better prices without middlemen markup.</p>
          </div>
          
          {/* Info about secure payments */}
          <div>
            <h3 className="font-bold text-xl mb-2">Escrow Payments</h3>
            <p>We hold payments securely and release only after successful delivery.</p>
          </div>
        </div>
      </section>
    )
  }
  