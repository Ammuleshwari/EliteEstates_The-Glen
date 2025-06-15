
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

export default function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    api.get(`/listings/${id}`).then((res) => setListing(res.data));
  }, [id]);

  const handleBooking = () => {
    const token = localStorage.getItem("token");
    api.post(
      "/bookings",
      { listing: id, date },
      { headers: { Authorization: `Bearer ${token}` } }
    ).then(() => alert("Booking successful"));
  };

  if (!listing) return <p>Loading...</p>;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
      <img src={listing.images[0]} alt="" className="rounded-md h-64 w-full object-cover" />
      <h1 className="text-3xl font-bold text-cyan-700 mt-4">{listing.title}</h1>
      <p className="text-gray-500 mb-2">{listing.location}</p>
      <p className="text-lg text-green-600 font-semibold mb-4">₹{listing.price}</p>
      <p className="text-gray-700">{listing.description}</p>

      <div className="mt-6 flex items-center gap-2">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded-lg w-full max-w-[200px]"
        />
        <button
          onClick={handleBooking}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
