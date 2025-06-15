
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });
  const nav = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) return alert("All fields are required");

    try {
      await api.post("/auth/register", form);
      nav("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">Register</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          name="role"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="user">User</option>
          <option value="host">Host</option>
        </select>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg hover:shadow-lg transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}
