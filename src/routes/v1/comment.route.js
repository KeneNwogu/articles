const express = require('express');

const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/comment.validation');
const commentController = require('../../controllers/comment.controller');

const router = express.Router();

router.get('/:articleId', commentController.getComments)

module.exports = router