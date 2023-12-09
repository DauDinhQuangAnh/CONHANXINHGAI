import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Dangnhap from "./pages/dangnhap/dangnhap";
import Dangky from "./pages/dangky/dangky";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/dangnhap" element={<Dangnhap />} />App
        <Route path="/dangky" element={<Dangky />} />App

      </Routes>
    </BrowserRouter>
  );
}

export default App;
