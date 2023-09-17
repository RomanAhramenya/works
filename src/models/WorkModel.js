import mongoose from "mongoose";
const WorkSchema = new mongoose.Schema({
  month: {
    type: Number,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
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

export default mongoose.model("Work", WorkSchema);
