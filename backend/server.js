const express = require('express');
const mongoose = require('mongoose');
const Product = require('./product'); 
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

const app = express();

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins in development
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/shoestore', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single('product_picture');

// Middleware to serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// POST route for uploading product picture
app.post('/upload-picture', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const picturePath = req.file ? `/public/uploads/${req.file.filename}` : '';
        res.status(200).json({ picturePath });
    });
});

// POST route for handling product submission
app.post('/add-product', async (req, res) => {
    const { product_name, product_price, product_description, product_catagory, product_picture } = req.body;

    if (!product_name || !product_price || !product_description || !product_catagory || !product_picture) {
        return res.status(400).json({ error: 'Please provide product details' });
    }

    try {
        const product = new Product({
            product_name,
            product_price,
            product_description,
            product_catagory,
            product_picture,
        });

        await product.save();
        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product', details: error.message });
    }
});

app.post("/", (req, res) => {
    res.send("Root is working");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
