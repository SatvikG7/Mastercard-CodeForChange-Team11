const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Generates a JSON Web Token (JWT) with the provided user ID.
 * @param {string} _id - The user ID to include in the token payload.
 * @returns {string} - The generated JWT.
 */
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

/**
 * Verifies a JWT token.
 *
 * @param {string} token - The JWT token to verify.
 * @returns {object} - The decoded token payload.
 */
const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { createToken, verifyToken };
