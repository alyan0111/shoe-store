const express = require("express");
const mongoose = require("mongoose");
const Product = require("./product");
const User = require("./user")
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins in development
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware for parsing JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

main()
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/shoestore",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
}

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage }).single("product_picture");

// Middleware to serve static files
app.use("/public", express.static(path.join(__dirname, "public")));

// Endpoint for user signup
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user", details: error.message });
  }
});

// Server-side login endpoint
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
 
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
  
    res.status(200).json(user );
  } catch (error) {
    res.status(500).json({ error: "Login failed", details: error.message });
  }
});

// Middleware for authenticating requests
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

// Protected route example
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});


// POST route for uploading product picture
app.post("/upload-picture", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const picturePath = req.file ? `/public/uploads/${req.file.filename}` : "";
    res.status(200).json({ picturePath });
  });
});

// POST route for handling product submission
app.post("/add-product", async (req, res) => {
  const {
    product_name,
    product_price,
    product_discount,
    product_description,
    product_category,
    product_vendor,
    product_sale,
    product_class,
    product_size,
    product_picture,
  } = req.body;

  if (
    !product_name ||
    !product_price ||
    !product_discount ||
    !product_description ||
    !product_category ||
    !product_vendor ||
    !product_sale ||
    !product_class ||
    !product_size ||
    !product_picture
  ) {
    return res.status(400).json({ error: "Please provide product details" });
  }

  try {
    const product = new Product({
      product_name,
      product_price,
      product_discount,
      product_description,
      product_category,
      product_vendor,
      product_sale,
      product_class,
      product_size: product_size.split(","), // Convert string to array
      product_picture,
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add product", details: error.message });
  }
});

//get route for fetching data on card
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch products", details: error.message });
  }
});

// GET route for fetching a single product by ID
app.get("/products/:_id", async (req, res) => {
  try {
    const productId = req.params._id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product", details: error.message });
  }
});

// POST route for adding item to cart
app.post("/cart/add", async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Fetch product details from the database based on productId
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Construct cart item object
    const cartItem = {
      productId: product._id,
      name: product.product_name,
      price: product.product_price,
      quantity: quantity,
    };

    // Add cart item to user's cart (you need to implement user authentication)
    // For simplicity, let's assume we have a session-based user system
    req.session.cart = req.session.cart || [];
    req.session.cart.push(cartItem);

    res.status(201).json({ message: "Item added to cart", cartItem });
  } catch (error) {
    res.status(500).json({ error: "Failed to add item to cart", details: error.message });
  }
});

// GET route for retrieving cart items
app.get("/cart", async (req, res) => {
  try {
    // Retrieve cart items from session
    const cartItems = req.session.cart || [];
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart items", details: error.message });
  }
});

// POST route for updating cart item quantity
app.post("/cart/update", async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Update quantity of the specified product in the cart
    req.session.cart.forEach((item) => {
      if (item.productId === productId) {
        item.quantity = quantity;
      }
    });

    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update cart", details: error.message });
  }
});

// POST route for removing item from cart
app.post("/cart/remove", async (req, res) => {
  const { productId } = req.body;

  try {
    // Remove item from the cart
    req.session.cart = req.session.cart.filter((item) => item.productId !== productId);

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove item from cart", details: error.message });
  }
});


app.post("/", (req, res) => {
  res.send("Root is working");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
