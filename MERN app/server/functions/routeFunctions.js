const Product = require("../models/productModel");
const User = require("../models/userModel");
const handleErrors = require("../middleware/errors");

const signUp = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: false,
    });
    res.json(newUser);
  } catch (error) {
    const errors = handleErrors(error)
    res.status(401).send(errors)
  }
};

const login = async (req, res) => {
  try {
    res.send("success");
  } catch (error) {
    res.status(401).send('error')
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {}
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.json(product);
  } catch (error) {}
};

const addNewProduct = async (req, res) => {
  try {
    await Product.create({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      company: req.body.company,
      image: req.body.image,
      quantity: req.body.quantity,
    });
    res.send("success");
  } catch (error) {}
};

const updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        company: req.body.company,
        image: req.body.image,
        quantity: req.body.quantity,
      },
      { new: true, runValidators: true }
    );
    res.json(`product updated!`);
  } catch (error) {}
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id });
  } catch (error) {}
};

module.exports = {
  signUp,
  login,
  getProducts,
  getProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
