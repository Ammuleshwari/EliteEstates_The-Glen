import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Footer className="bg-gradient-to-br from-blue-900 to-cyan-800 text-white pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        <div>
          <h2 className="text-xl font-semibold mb-4">🏡 RealEstate</h2>
          <p className="text-gray-300">
            Helping you find the best homes and apartments across cities. Trusted by thousands of users every day.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-cyan-300 transition" />
            <FaTwitter className="hover:text-cyan-300 transition" />
            <FaInstagram className="hover:text-cyan-300 transition" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-cyan-300 transition">Home</a></li>
            <li><a href="/login" className="hover:text-cyan-300 transition">Login</a></li>
            <li><a href="/register" className="hover:text-cyan-300 transition">Register</a></li>
            <li><a href="/host/dashboard" className="hover:text-cyan-300 transition">Dashboard</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Property Listing</li>
            <li>Property Booking</li>
            <li>Agent Assistance</li>
            <li>Host Management</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-300" /> Mumbai, India
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-300" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-300" /> support@realestate.com
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-cyan-600 my-6 mx-4" />

      <p className="text-center text-gray-400 text-sm px-4">
        © {new Date().getFullYear()} RealEstate. All rights reserved.
      </p>
    </Footer>
  );
}
