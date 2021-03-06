import { Request, Response } from "express";
import { Error } from "mongoose";

// Config
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors")

const app = express();

// Custom imports
const userRoutes = require("./routers/userRoutes");
const mapRoutes = require("./routers/mapRoutes");

// connecting DB
mongoose.connect(
  process.env.MONGODB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  (err:Error) => {
    if (err) return console.log(err);
    console.log("DB Connected");
  }
);

// Auth global
declare global {
  namespace Express {
    interface Request {
      id: number
    }
  }
}

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("common"));
app.use(express.static(path.join(__dirname,'public')));
app.use(cors({
  origin:process.env.FRONT_END_URI,
  credentials: true,
}));

// Routes
app.get("/",  (req: Request, res: Response) => {
  res.send("Hello World");
});
app.use("/auth", userRoutes);
app.use("/auth/map", mapRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, (err:Error) => {
  if (err) throw err;
  console.log(`Listening at http://localhost:${PORT}`);
});
