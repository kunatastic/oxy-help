"use strict";
var mongoose = require("mongoose");
var Joi = require("joi");
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });
var User = mongoose.model("user", userSchema);
function validateUser(user) {
    var schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(user);
}
module.exports = { User: User, validateUser: validateUser };
