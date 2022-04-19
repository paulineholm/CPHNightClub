import { Route, Routes, useLocation } from "react-router-dom";
import Hero from "./components/homeview/herosection/Hero";
import Home from "./views/Home";
import BlogPost from "./views/BlogPost";
import Booking from "./views/Booking";
import Contact from "./views/Contact";
import Error from "./views/Error";
import NavMenu from "./components/common/NavMenu";
import Footer from "./components/common/Footer";
import BlogArchive from "./views/BlogArchive";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" ? <Hero /> : null}
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogpost/:id" element={<BlogPost />} />
        <Route path="/blogarchive" element={<BlogArchive />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
