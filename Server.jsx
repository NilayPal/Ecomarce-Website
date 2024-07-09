const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db.jsx");
const AuthRoute = require('./routes/AuthRoute.jsx')

dotenv.config();
const app = express();

// Database connection
connectDB();

// Middleware use
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", AuthRoute);

app.get('/', (req, res) => {
    res.send('<h1>Welcome to E-commerce</h1>');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
