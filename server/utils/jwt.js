const jwt = require("jsonwebtoken");

/**
 * Generates a JSON Web Token (JWT) with the provided user ID.
 * @param {string} _id - The user ID to include in the token payload.
 * @returns {string} - The generated JWT.
 */
const createToken = (_id) => {
  return jwt.sign({ _id }, "secret", { expiresIn: "3d" });
};

module.exports = createToken;
