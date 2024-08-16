const User = require("../models/userSchema");
const { verifyToken } = require("../utils/jwt");

const isAdmin = async (req, res, next) => {
    const a1= req.cookies?.accessToken;
    const a2= req.header("Authorization")?.replace("Bearer ", "");
    const a3= req.headers.cookie;
    const accessToken = req.cookies?.accessToken;
    console.log("a1 is ",a1);
    console.log("a2 is ",a2);
    console.log("a3 is ",a3);

    console.log("read tokens as \n ac:", accessToken);
    if (!accessToken) {
        return res
            .status(401)
            .json({ error: "Admin Authorization token required" });
    }

    try {
        const { _id } = verifyToken(accessToken);
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
