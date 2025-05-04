// src/app/contact-us/page.tsx

export default function ContactUsPage() {
    return (
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Customer Support</h1>
  
        <p className="mb-6 text-gray-600">
          Have a question or need help with an order? Fill out the form below or reach us directly.
        </p>
  
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
  
        <div className="mt-8 text-sm text-gray-700">
          <h2 className="font-semibold">Or reach us directly:</h2>
          <p>Email: <a href="mailto:support@naijafarmmarket.com" className="text-blue-600 underline">support@naijafarmmarket.com</a></p>
          <p>Phone: <a href="tel:+2348000000000" className="text-blue-600 underline">+234 800 000 0000</a></p>
        </div>
      </main>
    );
  }
  