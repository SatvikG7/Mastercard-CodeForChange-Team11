const express = require("express");

// middleware functions 
const { requireAuth } = require("../middleware/authentication.middleware");
const { isAdmin } = require("../middleware/authorization.middleware");

// controller functions
const { loginUser } = require("../controllers/auth/login");
const { signupUser } = require("../controllers/auth/signup");
const { deleteUser } = require("../controllers/auth/delete");
const { users } = require("../controllers/auth/users");

const {uploadFile} = require("../middleware/multer.middleware");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", 
    uploadFile.fields([{ name: 'profilePicture', maxCount: 0 }]),
    signupUser);

// get all users
router.get("/users", isAdmin, users);

// delete user route
router.delete("/delete", requireAuth, deleteUser);

module.exports = router;
