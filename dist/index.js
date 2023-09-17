"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var WorksController_1 = require("./controllers/WorksController");
var mongoose = require("mongoose");
var app = express_1.default();
var port = 3000;
app.use(express_1.default.json());
mongoose.connect("mongodb+srv://admin:1411089l@cluster0.7puj3wn.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Connected to MongoDB");
});
app.post("/work", WorksController_1.createWorkController);
app.listen(port, function () {
    console.log("Server is running on port " + port);
});
