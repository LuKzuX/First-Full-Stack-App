import { useState } from "react";
import Navbar from "./Navbar";
import useHandleSubmit from "../../functions/submitForm";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");

  const newProduct = {
    name,
    category,
    price,
    description,
    company,
    image:
      "https://www.nhm.ac.uk/content/dam/nhmwww/discover/mercury-facts/mercury-factfile-v2-full-width.jpg.thumb.1160.1160.jpg",
    quantity,
  };

  const { submit, error } = useHandleSubmit();

  return (
    <div className="newProduct-page">
      <Navbar />
      <form
        className="newProduct-form"
        onSubmit={(e) => {
          e.preventDefault();
          submit("/store/add-new-product", newProduct, `/`);
        }}
      >
        <h1>Add new Product</h1>
        <label>name:</label>
        <input
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>category:</label>
        <input
          name="category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <label>price:</label>
        <input
          name="price"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label>description</label>
        <input
          name="description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <label>company:</label>
        <input
          name="company"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        ></input>
        <label>image:</label>
        <input
          disabled
          type={"file"}
          name="image"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <label>quantity:</label>
        <input
          type={"number"}
          name="quantity"
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <button>Login</button>
        {error && (
          <div>
            <p>This product already exists</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddNewProduct;
