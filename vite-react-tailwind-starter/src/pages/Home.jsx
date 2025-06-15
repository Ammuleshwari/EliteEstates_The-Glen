
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import { FaMapMarkerAlt, FaRupeeSign, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const defaultListings = [
  {
    _id: "1",
    title: "4 Bedroom Double Storey Townhouse",
    location: "Accra, Greater Accra",
    price: "230,000",
    type: "House",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    size: "240sqft",
    beds: 4,
    baths: 4,
    agent: "Dwellys Properties",
  },
  {
    _id: "2",
    title: "4 Bedroom Double Storey Townhouse",
    location: "Accra, Greater Accra",
    price: "80,000",
    type: "Apartment",
    status: "For Rent",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    size: "240sqft",
    beds: 4,
    baths: 4,
    agent: "Dwellys Properties",
  },
  {
    _id: "3",
    title: "4 Bedroom Double Storey Townhouse",
    location: "Accra, Greater Accra",
    price: "40,000",
    type: "Condo",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    size: "240sqft",
    beds: 4,
    baths: 4,
    agent: "Dwellys Properties",
  },
];

export default function Home() {
  const [listings, setListings] = useState(defaultListings);

  useEffect(() => {
    api
      .get("/listings")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setListings(res.data);
        }
      })
      .catch((err) => {
        console.error("API not reachable, showing default listings.");
      });
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
        Dwellys Exclusives
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Best deals and offers at a glance. Here are our most trendy properties for today
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {listings.map((listing) => (
          <Link
            to={`/listing/${listing._id}`}
            key={listing._id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-2 left-2 space-y-1">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {listing.status}
                </span>
                <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                  <HiLightningBolt className="text-white text-sm" />
                </span>
              </div>
              <span className="absolute top-2 right-2 bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                {listing.type}
              </span>
              <div className="absolute bottom-2 left-2">
                <span className="bg-teal-600 text-white px-4 py-1 rounded-full font-semibold">
                  ₹{listing.price}
                </span>
              </div>
              <div className="absolute bottom-2 right-2">
                <span className="bg-white rounded-full p-2 shadow">
                  ❤️
                </span>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center text-gray-600 text-sm mb-1">
                <FaMapMarkerAlt className="text-pink-500 mr-1" /> {listing.location}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {listing.title}
              </h3>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <img
                  src="https://randomuser.me/api/portraits/lego/5.jpg"
                  className="w-5 h-5 rounded-full mr-2"
                  alt="agent"
                />
                {listing.agent}
                <span className="ml-auto flex items-center">
                  <FaRupeeSign className="mr-1 text-green-600" /> ₹{listing.price}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 border-t pt-2">
                <span className="flex items-center">
                  <FaRulerCombined className="mr-1" /> {listing.size}
                </span>
                <span className="flex items-center">
                  <FaBed className="mr-1" /> {listing.beds}
                </span>
                <span className="flex items-center">
                  <FaBath className="mr-1" /> {listing.baths}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
