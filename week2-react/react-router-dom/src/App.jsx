import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Mens from "./pages/Mens";
import Women from "./pages/Women";
import PageNotFound from "./pages/PageNotFound";
import Courses from "./pages/Courses";
import CoursesDetails from "./pages/CoursesDetails";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CoursesDetails />} />
        
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Mens />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
