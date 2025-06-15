import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r bg-cyan-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide hover:text-yellow-300 transition">
          🌟 EliteEstates
        </Link>

        {/* Nav links */}
        <div className="flex space-x-6 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/host/dashboard"
            className="hover:text-yellow-300 transition duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="bg-yellow-400 text-purple-900 px-4 py-1 rounded hover:bg-yellow-300 transition duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
