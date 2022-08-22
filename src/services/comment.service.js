const httpStatus = require('http-status');
const { Comment } = require('../models');
const articleService = require('./article.service')
const userService = require('./user.service')
const ApiError = require('../utils/ApiError');

const createDummyComment = async (body) => {
    const user = await userService.getDefaultUser();
    const article = await articleService.getDefaultArticle();
    article.comments += 1
    article.save()
    body = { ...body, parent: article.id, user: user.id }
    return Comment.create(body);
}

const getCommentsForArticle = async (article_id) => {
    return Comment.find({ article: article_id })
}

const getCommentById = async (comment_id) => {
    return Comment.findById(comment_id);
}

const createDummyReply = async (body, article_id, comment_id) => {
    const article = await articleService.getArticleById(article_id);
    const comment = await getCommentById(comment_id);
    body = { ...body, parent: article.id, comment: comment.id }
    return Comment.create(body);
}

const getReplies = async (comment_id) => {
    const comment = await getCommentById(comment_id);
    return Comment.find({ comment: comment_id })
}

module.exports = {
    getCommentById,
    createDummyReply,
    createDummyComment,
    getCommentsForArticle
}