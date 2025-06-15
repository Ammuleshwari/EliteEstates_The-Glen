
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-cyan-100 to-cyan-300 text-gray-800">
      <Navbar />
      <main className="flex-grow p-6 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
