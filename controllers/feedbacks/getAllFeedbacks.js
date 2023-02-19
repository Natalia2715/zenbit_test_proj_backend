const { Feedback } = require("../../models/feedback");
const getAllFeedbacks = async (req, res, next) => {
  try {
    const result = await Feedback.find({}, "-createdAt -updatedAt");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllFeedbacks;
