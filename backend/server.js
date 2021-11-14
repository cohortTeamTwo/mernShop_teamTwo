require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes"); // Added the import for user routes
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);

// Here i'm adding the route we declared in our API call
app.use("/api/auth", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
