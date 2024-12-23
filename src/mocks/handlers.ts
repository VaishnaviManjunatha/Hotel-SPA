import { http, HttpResponse } from "msw";
import hotels from "../data/HotelData.json";

export const handlers = [
  // Fetch all hotels
  http.get("/api/hotels", () => {
    return HttpResponse.json(hotels);
  }),
  http.get("/api/hotels/:id", ({ params }) => {
    const { id } = params;

    // Ensure `id` is a string
    const hotelId = Array.isArray(id) ? id[0] : id;

    if (!hotelId) {
      return HttpResponse.json({
        status: 400,
        body: { error: "Invalid ID parameter" },
      });
    }

    // const hotel = hotels.find((h) => h.id === hotelId);

    // if (!hotel) {
    //   return HttpResponse.json({
    //     status: 404,
    //     body: { error: "Hotel Not Found" },
    //   });
    // }

    return HttpResponse.json(hotels);
  }),
];
