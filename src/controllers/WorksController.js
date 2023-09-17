import WorkModel from "../models/WorkModel.js";

export const getWorkController = async (req, res) => {
  let currentDay = new Date();
  console.log(currentDay.getDate());
  try {
    const variant = req.query.variant;

    if (variant === "day") {
      const work = await WorkModel.find({
        month: Number(req.query.date.split(".")[0]),
        day: Number(req.query.date.split(".")[1]),
        year: Number(req.query.date.split(".")[2]),
      });
      res.json(work);
    }
    if (variant === "month") {
      const work = await WorkModel.find({
        month: Number(req.query.date.split(".")[0]),
        year: Number(req.query.date.split(".")[1]),
      });
      res.json(work);
    }
  } catch (error) {
    res.status(500).json({
      message: "Не удалось получить статьи",
      error,
    });
  }
};
export const createWorkController = async (req, res) => {
  try {
    const doc = new WorkModel({
      id: req.userId,
      month: req.body.month,
      day: req.body.day,
      year: req.body.year,
      distanceStart: req.body.distanceStart,
      distanceEnd: req.body.distanceEnd,
      literStart: req.body.literStart,
      literEnd: req.body.literEnd,
      tips: req.body.tips,
      expenses: req.body.expenses,
      orders: req.body.orders,
      income: req.body.income,
    });
    const work = await doc.save();

    res.json(work);
  } catch (error) {
    res.status(500).json({
      message: "Не удалось создать пост",
      error,
    });
  }
};

export const updateWorkController = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log(postId);
    const doc = await WorkModel.findByIdAndUpdate(
      {
        _id: postId,
      },
      {
        month: req.body.month,
        day: req.body.day,
        year: req.body.year,
        distanceStart: req.body.distanceStart,
        distanceEnd: req.body.distanceEnd,
        literStart: req.body.literStart,
        literEnd: req.body.literEnd,
        tips: req.body.tips,
        expenses: req.body.expenses,
        orders: req.body.orders,
        income: req.body.income,
      },
      {
        returnDocument: "after",
      }
    );
    const work = await doc.save();
    res.json(work);
  } catch (error) {
    res.status(500).json({
      message: "Не удалось обновить статью",
      error,
    });
  }
};
