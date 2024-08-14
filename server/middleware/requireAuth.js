const User = require("../models/userSchema");
const { verifyToken } = require("../utils/jwt");

/**
 * Middleware function to require authentication.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A promise that resolves when the middleware is complete.
 */
const requireAuth = async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ error: "Authorization token required" });
    }

    try {
        const { _id } = verifyToken(token);
        req.user = await User.findOne({ _id }).select("_id");

        if (!req.user) {
            return res.status(401).json({ error: "User not found" });
        }

        next();
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = { requireAuth };
