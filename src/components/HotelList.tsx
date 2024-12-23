import { useState } from "react";
import { Link } from "react-router-dom";
import hotels from "../data/HotelData.json";
import "bootstrap/dist/css/bootstrap.min.css";

const HotelList = () => {
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);

  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);

  return (
    <div>
      <header className="bg-primary text-white py-3 mb-4 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <h1 className="mb-0">Sunway Hotels</h1>
            <p className="mb-0">Explore your dream destinations with us</p>
          </div>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-white"
                  onClick={handleShowContact}
                >
                  Contact Us
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-white"
                  onClick={handleShowAbout}
                >
                  About Us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mt-4">
        <h2 className="mb-4">Our Featured Hotels</h2>
        <div className="row">
          {hotels.map((hotel) => (
            <div className="col-md-6 col-lg-4 mb-4" key={hotel.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={hotel.imageUrl}
                  className="card-img-top"
                  alt={`${hotel.name}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{hotel.name}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {hotel.location}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> {hotel.rating} ⭐
                  </p>
                  <Link to={`/hotels/${hotel.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`modal fade ${showContact ? "show d-block" : ""}`}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactModalLabel">
                Contact Us
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseContact}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                For inquiries, reach out to us at{" "}
                <strong>support@sunwayHotels.com</strong>.
              </p>
              <p>Phone: +1 360 547 098</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseContact}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade ${showAbout ? "show d-block" : ""}`}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="aboutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="aboutModalLabel">
                About Us
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseAbout}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Sunway Hotels is a leading accomomodation agency dedicated to
                providing world-class accomomodation experiences. Our mission is
                to help you explore the world effortlessly.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseAbout}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Sunway Hotels. All rights reserved.
          </p>
          <p className="mb-0">
            <Link to="/terms" className="text-white">
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link to="/privacy" className="text-white">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HotelList;

{
  /*Below is the coding attempt for fetching details using Mock API*/
}
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// interface Hotel {
//   id: string;
//   name: string;
//   location: string;
//   rating: number;
//   image: string;
//   travelDates: string;
//   boardBasis: string;
// }

// const HotelsList: React.FC = () => {
//   const [hotels, setHotels] = useState<Hotel[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/api/hotels")
//       .then((res) => res.json())
//       .then((data) => {
//         setHotels(data);
//         setLoading(false);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Hotels List</h1>
//       <ul>
//         {hotels.map((hotel) => (
//           <li key={hotel.id}>
//             <img src={hotel.image} alt={hotel.name} width={100} />
//             <h2>{hotel.name}</h2>
//             <p>Location: {hotel.location}</p>
//             <p>Rating: {hotel.rating}</p>
//             <Link to={`/hotels/${hotel.id}`}>View Details</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HotelsList;
