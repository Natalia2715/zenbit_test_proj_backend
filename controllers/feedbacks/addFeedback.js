const { Feedback } = require("../../models/feedback");

const addFeedback = async (req, res) => {
 
  const result = await Feedback.create({ ...req.body });
  res.status(200).json(result);
};

module.exports = addFeedback;
