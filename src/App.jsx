import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

export default function App() {
  //render site.
  return (
    <Routes>
      <Route path="/ViborgUdenforMitVindue" element={<Home />} />
      <Route path="/ViborgUdenforMitVindue/gallery" element={<Gallery />} />
    </Routes>
  );
}
