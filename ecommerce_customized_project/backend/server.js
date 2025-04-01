
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Sample route for file upload
app.post('/upload-image', upload.single('image'), (req, res) => {
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

// Basic route
app.get("/", (req, res) => {
  res.send("E-commerce Backend - PrintMine Clone");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
    