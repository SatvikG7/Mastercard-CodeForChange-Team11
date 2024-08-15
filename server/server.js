const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const app = express();
const connectDB = require("./config/connectDB");
const cors = require("cors");
const requireAuth = require("./middleware/requireAuth");

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

// Middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(limiter);
// CHANGE BEFORE PRODUCTION

connectDB();

// Routes
const auth = require("./routes/user");

app.get("/", (req,res)=>{res.send("default route")});
app.use("/auth", auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`);
});
