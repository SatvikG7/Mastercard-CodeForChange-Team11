const User = require("../models/userSchema");

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();

        user.refreshToken = refreshToken
        await user.save();
        return {accessToken, refreshToken};

    } catch (error) {
        console.log("error in generating tokens", error);
    }
}

module.exports = { generateAccessAndRefreshTokens }