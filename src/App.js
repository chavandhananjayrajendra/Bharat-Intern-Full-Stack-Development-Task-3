import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Room from "./pages/Room/index";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
  );
}
export default App;
