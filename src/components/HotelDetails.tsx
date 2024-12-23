import { useParams, useNavigate } from "react-router-dom";
import hotels from "../data/HotelData.json";

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const hotel = id ? hotels.find((h) => h.id === parseInt(id)) : null;

  if (!hotel) {
    return (
      <div className="container mt-4 text-center">
        <h1 className="text-danger">Hotel Not Found</h1>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/hotels")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1 className="display-4 fw-bold text-primary">{hotel.name}</h1>
        <p className="text-muted">{hotel.location}</p>
      </div>

      <hr className="my-4" style={{ borderTop: "2px solid #333" }} />

      <div className="row">
        <div className="col-md-7 mb-4">
          <img
            src={hotel.imageUrl}
            alt={hotel.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "500px", objectFit: "cover", width: "80%" }}
          />
        </div>

        <div className="col-md-5">
          <div className="mb-3">
            <p className="mb-1">
              <strong>Rating:</strong>{" "}
              <span className="badge bg-success">{hotel.rating} ⭐</span>
            </p>
            <p className="mb-1">
              <strong>Dates of Travel:</strong> {hotel.datesOfTravel.join(", ")}
            </p>
            <p className="mb-1">
              <strong>Board Basis:</strong> {hotel.boardBasis}
            </p>
          </div>
          <div>
            <strong>Rooms:</strong>
            <ul className="list-group mt-2">
              {hotel.rooms.map((room, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {room.roomType}
                  <span className="badge bg-primary rounded-pill">
                    {room.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/hotels")}
        >
          Back to Hotels List
        </button>
      </div>
    </div>
  );
};

export default HotelDetail;

{
  /*Below is the coding attempt for fetching details using Mock API*/
}
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// interface Room {
//   type: string;
//   count: number;
// }

// interface Hotel {
//   id: string;
//   name: string;
//   location: string;
//   rating: number;
//   image: string;
//   travelDates: string;
//   boardBasis: string;
//   rooms: Room[];
// }

// const HotelDetail: React.FC = () => {
//   const { id } = useParams();
//   const [hotel, setHotel] = useState<Hotel | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetch(`/api/hotels/${id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Hotel Not Found");
//         return res.json();
//       })
//       .then((data) => {
//         setHotel(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>{hotel?.name}</h1>
//       <img src={hotel?.image} alt={hotel?.name} width={200} />
//       <p>Location: {hotel?.location}</p>
//       <p>Rating: {hotel?.rating}</p>
//       <p>Travel Dates: {hotel?.travelDates}</p>
//       <p>Board Basis: {hotel?.boardBasis}</p>
//       <h3>Rooms:</h3>
//       <ul>
//         {hotel?.rooms.map((room, idx) => (
//           <li key={idx}>
//             {room.type}: {room.count}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HotelDetail;
