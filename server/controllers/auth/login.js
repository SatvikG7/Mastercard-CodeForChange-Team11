const User = require("../../models/userSchema");
const { createToken } = require("../../utils/jwt");
const {generateAccessAndRefreshTokens}=require("../../utils/accessAndRefreshTokenGeneration");

const options = {
    // httpOnly: true,
    // secure: true
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password);
    try {
        const user = await User.login(email, password);

        let {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id);

        console.log("the user we have is" ,user);
        console.log("the access token we have is" ,accessToken);
        console.log("the refresh token we have is" ,refreshToken);

        res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({ ...user._doc})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { loginUser };
