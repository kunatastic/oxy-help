"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var _a = require("../models/User"), User = _a.User, validateUser = _a.validateUser;
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var auth = require("../middleware/auth");
var router = express_1.Router();
// register
router.post("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, passwordVerify, output, existUser, passwordHash, newUser, savedUser, token, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, email = _a.email, password = _a.password, passwordVerify = _a.passwordVerify;
                output = validateUser({
                    email: email,
                    password: password,
                });
                return [4 /*yield*/, User.findOne({ email: email })];
            case 1:
                existUser = _b.sent();
                if (existUser) {
                    return [2 /*return*/, res.status(400).json({ msg: "Email already exists" })];
                }
                return [4 /*yield*/, bcrypt.hash(password, 10)];
            case 2:
                passwordHash = _b.sent();
                newUser = new User({
                    email: email,
                    password: passwordHash,
                });
                return [4 /*yield*/, newUser.save()];
            case 3:
                savedUser = _b.sent();
                token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
                // console.log(output, existUser, savedUser);
                console.log("new User");
                res
                    .cookie("token", token, {
                    httpOnly: true,
                })
                    .json({ msg: "NEW USER ADDED" });
                return [3 /*break*/, 5];
            case 4:
                err_1 = _b.sent();
                console.log(err_1);
                res.status(500).send();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
router.post("/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, userExist, verify, token, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, email = _a.email, password = _a.password;
                console.log(email);
                return [4 /*yield*/, User.findOne({ email: email })];
            case 1:
                userExist = _b.sent();
                if (!userExist) return [3 /*break*/, 3];
                return [4 /*yield*/, bcrypt.compare(password, userExist.password)];
            case 2:
                verify = _b.sent();
                if (!verify) {
                    return [2 /*return*/, res.status(401).json({ errMsg: "Wrong password" })];
                }
                token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET);
                // console.log(output, existUser, savedUser);
                console.log(token);
                res
                    .cookie("token", token, {
                    httpOnly: true,
                })
                    .json({ msg: "USER LOGGED IN" });
                _b.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                err_2 = _b.sent();
                console.log(err_2);
                res.status(500).send();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
router.get("/logout", function (req, res) {
    console.log("Logging out");
    res
        .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
    })
        .send();
});
router.get("/hidden", auth, function (req, res) {
    res.json({ data: "kunal is handsome" });
});
router.get("/loggedin", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var token;
    return __generator(this, function (_a) {
        try {
            token = req.cookies.token;
            if (!token)
                return [2 /*return*/, res.json(false)];
            jwt.verify(token, process.env.JWT_SECRET);
            console.log("true");
            res.send(true);
        }
        catch (err) {
            console.log(err);
            res.json(false);
        }
        return [2 /*return*/];
    });
}); });
module.exports = router;
