const express = require("express");
const ctrl = require("../../controllers/feedbacks");

const { ctrlWrapper } = require("../../helpers");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/feedback");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllFeedbacks));

router.post("/", validateBody(schemas.add), ctrlWrapper(ctrl.addFeedback));

module.exports = router;
