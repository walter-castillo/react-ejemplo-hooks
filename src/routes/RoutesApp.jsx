import { BrowserRouter, Routes, Route} from "react-router-dom"
import About from "../pages/About";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Menu from "../components/Menu";
import Modal1 from "../components/Modal1";

export default function RoutesApp() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/modal" element={<Modal1 />} />
            <Route path="*" element={<Error />} />
      </Routes>
  </BrowserRouter>
  )
}
