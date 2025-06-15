
import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function HostDashboard() {
  const [myListings, setMyListings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    api.get("/listings", {
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      const userId = JSON.parse(atob(token.split('.')[1])).id;
      setMyListings(res.data.filter(l => l.host._id === userId));
    });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Listings</h2>
      {myListings.map((l) => (
        <div key={l._id} className="border p-2 mb-2">
          <p>{l.title} - ₹{l.price}</p>
        </div>
      ))}
    </div>
  );
}
