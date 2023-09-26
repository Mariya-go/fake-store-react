import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skincare from "./components/Skincare";
import WomenDresses from "./components/WomenDresses";
import WomenShoes from "./components/WomenShoes";
import Fragrances from "./components/Fragrances";
import ForWomen from "./components/ForWomen";
import NoMatch from "./components/NoMatch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fragrances" element={<Fragrances />} />
        <Route path="skincare" element={<Skincare />} />
        <Route path="forWomen" element={<ForWomen />}>
          <Route path="womens-dresses" element={<WomenDresses />} />
          <Route path="womens-shoes" element={<WomenShoes />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
