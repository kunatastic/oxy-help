"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Config
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var path = require("path");
var app = express();
// Custom imports
var userRoutes = require("./routers/userRoutes");
// connecting DB
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, function (err) {
    if (err)
        return console.log(err);
    console.log("DB Connected");
});
// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("common"));
app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use("/auth", userRoutes);
var PORT = process.env.PORT || 5001;
app.listen(PORT, function (err) {
    if (err)
        throw err;
    console.log("Listening at http://localhost:" + PORT);
});
