import { useParams } from "react-router-dom";
import useHandleSubmit from "../../functions/submitForm";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");

  //set the input fields as the properties of the product
  useEffect(() => {
    axios.get("/store/product-details/" + id).then((res) => {
      setName(res.data.name);
      setPrice(res.data.price);
      setCategory(res.data.category);
      setCompany(res.data.company);
      setImage(res.data.image);
      setDescription(res.data.description);
      setQuantity(res.data.quantity);
    });
  }, []);

  const { id } = useParams();
  const { updateItem, deleteItem } = useHandleSubmit();

  const updatedData = {
    name,
    category,
    price,
    description,
    company,
    image,
    quantity,
  };

  return (
    <div className="product-details-page">
      <form className="product-details-form">
        <img src={image} alt='product'></img>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <input
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <input
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        ></input>
        <input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault()
            updateItem("/store/product-details/" + id, updatedData, `/`);
          }}>
          Update
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            deleteItem("/store/product-details/" + id, `/`);
          }}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default ProductDetails;
