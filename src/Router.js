import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
// import StructureCategory from "./pages/category/StructureCategory";
import StruCategory from "./pages/category/StruCategory";
// import ContactUs from "./pages/contact-us/ContactUs";


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact-us" element={<ContactUs />} /> */}
            <Route path="/category" element={<StruCategory />} />

        </Routes>
    )
}