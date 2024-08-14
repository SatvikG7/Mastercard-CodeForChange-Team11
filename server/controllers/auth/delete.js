const User = require("../../models/userSchema");

const deleteUser = async (req, res) => {
    const user_id = req.user;
    try {
        const user = await User.findByIdAndDelete(user_id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { deleteUser };
