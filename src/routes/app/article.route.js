const express = require('express');
const articleController = require('../../controllers/article.controller')

const router = express.Router();

router.get('/', articleController.defaultArticle)


module.exports = router