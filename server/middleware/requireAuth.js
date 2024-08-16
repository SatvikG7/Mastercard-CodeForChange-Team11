const User = require("../models/userSchema");
const { verifyToken } = require("../utils/jwt");


const options = {
    // httpOnly: true,
    secure: process.env.NODE_ENV === "production"
}

/**
 * Middleware function to require authentication.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A promise that resolves when the middleware is complete.
 */
const requireAuth = async (req, res, next) => {
    try {
        const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "") || req.headers.cookie
        const refreshToken = req.cookies?.refreshToken;

        console.log("read tokens as \n ac:", accessToken, "\n rf:",refreshToken);

        const { accessTokenid } = verifyToken(accessToken);
        accessTokenUser = await User.findOne({ _id: accessTokenid }).select("_id");

        if (accessTokenUser) {
            req.user = accessTokenUser;
            next();
        }

        else {
            const { refreshTokenid } = verifyToken(refreshToken);
            let refreshTokenUser = await User.findOne({ _id: refreshTokenid });

            if (!refreshTokenUser || refreshTokenUser.refreshToken !== refreshToken) {
                return res.status(401)
                    .cookie(accessToken, "", { maxAge: 0 })
                    .cookie(refreshToken, "", { maxAge: 0 })
                    .json({ error: "Refresh token invalid, login again" });
            }

            else {
                const accessToken = refreshTokenUser.generateAccessToken();
                const refreshToken = refreshTokenUser.generateRefreshToken();

                refreshTokenUser.refreshToken = refreshToken;
                refreshTokenUser.accessToken = accessToken;
                await refreshTokenUser.save();

                res.cookie("accessToken", accessToken, options);
                res.cookie("refreshToken", refreshToken, options);
                req.user = refreshTokenUser._id;
                next();
            }
        }
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = { requireAuth };
