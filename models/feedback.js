const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSaveErrors } = require("../helpers");

const addFeedbackSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  message: Joi.string().required()
});

const feedbackSchema = Schema({
  name: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  message: {
    type: String,
    required: [true],
  },
});

feedbackSchema.post("save", handleSaveErrors);

const Feedback = model("contact", feedbackSchema);

module.exports = {
  Feedback,
  schemas: {
    add: addFeedbackSchema,
  },
};
