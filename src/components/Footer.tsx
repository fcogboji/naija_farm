// Footer component with copyright
export default function Footer() {
    return (
      // Green background footer with white text
      <footer className="bg-green-700 text-white py-8 text-center mb-0">
        {/* Dynamic year */}
        <p>&copy; {new Date().getFullYear()} Naija Farm Marketplace</p>
        
        {/* Navigation links in the footer */}
        <div className="flex justify-center gap-6 mt-4 text-sm mb-0">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </footer>
    )
  }
  