import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ContinentDetail from "./components/ContinentDetail/ContinentDetail";
import Destinations from "./components/Destinations/Destinations";
import Place from "./components/Place/Place";

function App() {
  return (
    <div className="App text-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continent/:conId" element={<ContinentDetail />} />
        <Route
          path="/continent/:conId/destination/:desId"
          element={<Destinations />}
        />
        <Route
          path="/continent/:conId/destination/:desId/:placeId"
          element={<Place />}
        />
      </Routes>
    </div>
  );
}

export default App;
