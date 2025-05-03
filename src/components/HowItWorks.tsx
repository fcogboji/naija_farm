// Component that explains how the marketplace process works
export default function HowItWorks() {
    // Array of step objects with title and description
    const steps = [
      { title: '1. Farmers Register', desc: 'Verified farmers sign up and upload their produce.' },
      { title: '2. Buyers Order', desc: 'City customers browse listings and make secure payments.' },
      { title: '3. Delivery Happens', desc: 'Farmers deliver products directly to buyers.' },
      { title: '4. Payment Released', desc: 'You get paid only after delivery is confirmed.' },
    ]
  
    return (
      // Section layout with padding and center alignment
      <section className="py-16 bg-white text-center px-4">
        {/* Section heading */}
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        
        {/* Grid layout to display each step */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map(step => (
            // Card for each step
            <div key={step.title} className="p-6 border rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  