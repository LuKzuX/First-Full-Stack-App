import ProductList from "./ProductList";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"
import useHandleSubmit from "../../functions/submitForm";

const Home = () => {
  
  const navigate = useNavigate();
  const { get } = useHandleSubmit()
  const {data: products, error, isPending} = get(`/store`)

  return (
    <div className="home">
      <Navbar/>
      {isPending && <div>loading...</div>}
      {error && <div>could not get products</div>}
      {products && <ProductList products={products}/>}
      <button onClick={() => {
          navigate("/add-new-product");
        }}>Add Product</button>
    </div>    
  );
};

export default Home;
