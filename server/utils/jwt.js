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

const verifyAccessToken = (token) => {
    try {
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log("access token payload", payload);
        return payload;
    } catch (error) {
        console.log("access token verification failed due to error: ", error);
    }
};

const verifyRefreshToken = (token) => {
    try {
        const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
        return payload;
    } catch (error) {
        console.log("Refresh token verification failed due to error: ", error);
    }
};

module.exports = { createToken, verifyToken, verifyAccessToken, verifyRefreshToken };
