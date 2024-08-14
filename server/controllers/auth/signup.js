const User = require("../../models/userSchema");
const { createToken } = require("../../utils/jwt");

const signupUser = async (req, res) => {
    const { email, name, role, password } = req.body;
    try {
        const user = await User.signup(email, name, role, password);
        const token = createToken(user._id);
        res.status(200).json({ ...user._doc, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { signupUser };
