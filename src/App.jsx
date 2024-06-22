import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Category from "./Pages/Category";

//import images
import bannermen from "./../public/data/bannermens.jpg";
import bannerwomen from "./../public/data/bannerwomen.jpg";
import bannerkid from "./../public/data/bannerkids.jpg";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/men"
            element={<Category category="men" banner={bannermen} />}
          ></Route>
          <Route
            path="/women"
            element={<Category category="women" banner={bannerwomen} />}
          ></Route>
          <Route
            path="/kid"
            element={<Category category="kid" banner={bannerkid} />}
          ></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
