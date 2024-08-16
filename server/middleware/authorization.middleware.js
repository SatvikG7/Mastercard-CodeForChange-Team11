const User = require("../models/userSchema");
const { verifyToken, verifyAccessToken, verifyRefreshToken } = require("../utils/jwt");

const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production"
};

const isAdmin = async (req, res, next) => {
    try {
        const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        // ALL COOKIES AVAILABLE AT req.headers.cookie AS SINGLE STRING
        // const refreshToken = req.headers.cookie?.split(";").find((cookie) => cookie.trim().startsWith("refreshToken"))?.split
        const refreshToken = req.cookies?.refreshToken;
        // TODO ADD req.header for refreshToken

        console.log("read tokens as \n ac:", accessToken, "\n rf:", refreshToken);

        let accessTokenUser = null, refreshTokenUser = null;
        if (!accessToken && !refreshToken) {
            return res
                .status(401)
                .json({ error: "Access and refresh tokens were absent. No admin access" });
        }

        if (accessToken) {
            const accessTokenid  = verifyAccessToken(accessToken)?._id;
            console.log("access token id", accessTokenid);
            accessTokenUser = await User.findOne({ _id: accessTokenid }).select("_id role");
            if (accessTokenUser) {
                if (accessTokenUser.role === "admin") {
                    req.user = accessTokenUser._id;
                    return next();
                }
                else {
                    return res.status(401).json({ error: "User does not have admin privileges" });
                }
            }
        }

        if (!accessTokenUser && refreshToken) {
            const refreshTokenid  = verifyRefreshToken(refreshToken)?._id;
            refreshTokenUser = await User.findOne({ _id: refreshTokenid });

            if (!refreshTokenUser || refreshTokenUser.refreshToken !== refreshToken) {
                return res.status(401)
                    .cookie(accessToken, "", { maxAge: 0 })
                    .cookie(refreshToken, "", { maxAge: 0 })
                    .json({ error: "Refresh token invalid, login again" });
            }

            else {
                if (refreshTokenUser.role === "admin") {
                    const newAccessToken = refreshTokenUser.generateAccessToken();
                    const newRefreshToken = refreshTokenUser.generateRefreshToken();

                    refreshTokenUser.refreshToken = newRefreshToken;
                    await refreshTokenUser.save();

                    res.cookie("accessToken", newAccessToken, options);
                    res.cookie("refreshToken", newRefreshToken, options);
                    req.user = refreshTokenUser._id;
                    return next();
                }
                else {
                    return res.status(401).json({ error: "User does not have admin privileges" });
                }
            }
        }
        return res.status(401).json({ error: "Invalid access and refresh tokens" });

    } catch (error) {
        return res.status(401).json({ error: error.message });
    }

};

module.exports = { isAdmin };
