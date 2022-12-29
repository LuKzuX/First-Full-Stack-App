import { Link } from "react-router-dom";

const ProductList = (props) => {
  return (
    <div className="product-list">
      {props.products.map((x) => (
        <div className="product" key={x._id}>
          <Link to={`/product-details/${x._id}`}>
          <p>{x.name}</p>
          <p>{x.price}</p>
          <img src={x.image} width="200px" height="200px" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
