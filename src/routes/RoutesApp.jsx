import { BrowserRouter, Routes, Route} from "react-router-dom"
import About from "../pages/About";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Menu from "../components/Menu";

export default function RoutesApp() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
      </Routes>
  </BrowserRouter>
  )
}
