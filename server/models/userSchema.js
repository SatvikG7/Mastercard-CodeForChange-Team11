const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate:[validator.isEmail, 'Invalid email']
        },
        role: {
            type: String,
            required: false,
            enum: { values: ['user', 'admin'], message: '{VALUE} is not supported. Please use: user/admin' },
            default: "user"
        },
        password: {
            type: String,
            required: true,
        },
        proImg: {// Profile Image
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    });

// static signup method
userSchema.statics.signup = async function (email, name, role, password) {
    // validation
    if (!email || !name || !role || !password) {
        throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
        throw Error("Email not valid");
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        email,
        name,
        role,
        password: hash,
    });

    delete user._doc.password;
    return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled");
    }

    const user = await this.findOne({ email });
    if (!user) {
        throw Error("Incorrect email");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error("Incorrect password");
    }

    delete user._doc.password;
    return user;
};

module.exports = mongoose.model("User", userSchema);
