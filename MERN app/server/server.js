require("dotenv").config();
const express = require(`express`);
const app = express();
const connectDB = require(`./db/connect`);
const login_signupRoutes = require("./routes/loginSignupRoutes");
const storeRoutes = require("./routes/storeRoutes");
const notFound = require("./middleware/not-found");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/store", login_signupRoutes);
app.use("/store", storeRoutes);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(5000, () => {
      console.log(`server listening...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
