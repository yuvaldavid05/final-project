import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ContactUs from "./pages/contact-us/ContactUs";
import BuildATrip from "./pages/build-trip/BuildATrip";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/build-trip" element={<BuildATrip />} />
        </Routes>
    )
}