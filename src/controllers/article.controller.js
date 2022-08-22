const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { articleService } = require('../services');

const defaultArticle = catchAsync(async (req, res) => {
    const article = await articleService.getDefaultArticle()
    res.render('index', {article})
})

const createArticle = catchAsync(async (req, res) => {
    const article = await articleService.createArticle(req.body, req.user);
    res.status(httpStatus.CREATED).send(article)
})

const deleteArticle = catchAsync(async (req, res) => {
    const article = await articleService.deleteArticle(req.params.articleId);
    res.status(httpStatus.NO_CONTENT).send()
})

module.exports = {
    createArticle,
    deleteArticle,
    defaultArticle
}