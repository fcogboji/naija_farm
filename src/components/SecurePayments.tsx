// Component describing secure payment model
export default function SecurePayments() {
    return (
      // Green section with heading and subtext
      <section className="py-16 bg-green-100 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Safe, Secure Payments</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Powered by Stripe, all payments are held safely in escrow until your order is delivered.
        </p>
      </section>
    )
  }
  