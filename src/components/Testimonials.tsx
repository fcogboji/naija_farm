// Component for user testimonials to build trust
export default function Testimonials() {
    return (
      // Light green section with padding and layout
      <section className="py-16 bg-green-50 text-center px-4">
        <h2 className="text-3xl font-bold mb-10">What Users Are Saying</h2>
        
        {/* Grid layout for two testimonials */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <p className="italic">"I now earn more because I sell direct to customers!"</p>
            <p className="font-bold mt-2">– Amina, Farmer in Kano</p>
          </div>
          <div>
            <p className="italic">"The yams I got were fresher than anything I’ve ever bought in Lagos."</p>
            <p className="font-bold mt-2">– Daniel, Buyer in Lagos</p>
          </div>
        </div>
      </section>
    )
  }
  