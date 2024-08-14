const User = require("../models/userSchema");
const { verifyToken } = require("../utils/jwt");

const isAdmin = async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res
            .status(401)
            .json({ error: "Admin Authorization token required" });
    }

    try {
        const { _id } = verifyToken(token);
        const user = await User.findOne({ _id }).select("_id role");

        if (!user) {
            return res.status(401).json({ error: "Admin not found" });
        }

        if (user.role !== "admin") {
            return res.status(401).json({ error: "Admin access required" });
        }

        next();
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = { isAdmin };
