import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HotelList from "./components/HotelList";
import HotelDetail from "./components/HotelDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
        <Route path="*" element={<Navigate to="/hotels" />} />
      </Routes>
    </Router>
  );
};

export default App;
