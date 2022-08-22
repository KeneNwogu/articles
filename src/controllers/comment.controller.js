const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { commentService, articleService, userService } = require('../services');

const getComments = catchAsync(async (req, res) => {
    const comments = await commentService.getCommentsForArticle(req.params.articleId)
    return res.status(httpStatus.OK).send(comments)
})

const dummyComment = catchAsync(async (req, res) => {
    const article = await articleService.getDefaultArticle()
    const comment = await commentService.getCommentById(req.params.commentId)
    const user = await userService.getDefaultUser()
    const reply = await commentService.createDummyReply(article_id, comment.id)
    return res.status(httpStatus.CREATED).send(reply)
})

const getReplies = catchAsync(async (req, res) => {
    const comment = await commentService.getCommentById(req.params.commentId)
    const comments = await commentService.getReplies(comment.id)
})

module.exports = {
    getComments,
    dummyComment,
    getReplies
}

