"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var WorkSchema = new mongoose_1.default.Schema({
    date: {
        type: String,
        required: true,
    },
    distanceStart: {
        type: Number,
        required: true,
    },
    distanceEnd: {
        type: Number,
        required: true,
    },
    literStart: {
        type: Number,
        required: true,
    },
    literEnd: {
        type: Number,
        required: true,
    },
    tips: {
        type: Number,
        default: 0,
    },
    expenses: {
        type: Number,
        default: 0,
    },
    orders: {
        type: Number,
        default: 0,
    },
    income: {
        type: Number,
        default: 0,
    },
});
exports.default = mongoose_1.default.model("Work", WorkSchema);
