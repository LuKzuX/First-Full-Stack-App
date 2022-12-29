import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home/Home";
import AddNewProduct from "./pages/Home/addNewProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Home/Navbar";
import ProductDetails from "./pages/Home/productDetails";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/add-new-product" element={<AddNewProduct />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
    </Router>
  );
}

export default App;
