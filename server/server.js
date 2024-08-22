const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const app = express();
const connectDB = require("./config/connectDB");
const cors = require("cors");
const requireAuth = require("./middleware/requireAuth");
const ImageKit = require("imagekit");

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

connectDB();

// Routes
const auth = require("./routes/user");
app.use("/auth", auth);

const PORT = process.env.PORT || 5000;

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", (req, res) => {
    try {
        const result = imagekit.getAuthenticationParameters();
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: "An error occurred while generating authentication parameters." });
    }
});


app.listen(PORT, () => {
    console.log("Server is runnning...");
});
