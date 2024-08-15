const User = require("../../models/userSchema");
const { createToken } = require("../../utils/jwt");

const options = {
    httpOnly: true,
    secure: true
}

const signupUser = async (req, res) => {
    const { email, name, role, password } = req.body;
    try {
        const user = await User.signup(email, name, role, password);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        const token = createToken(user._id);
        res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({ ...user._doc, token })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { signupUser };
