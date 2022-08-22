const httpStatus = require('http-status');
const { Article } = require('../models');
const ApiError = require('../utils/ApiError');
const userService = require('./user.service')

/**
 * Create a review
 * @param {Object} reviewBody
 * @returns {Promise<Article>}
 */
const createArticle = async (articleBody, user) => {
    let scheme = {...articleBody, user: user.id }
    return Article.create(scheme);
}


/**
 * get a review by its id
 * @param {ObjectId} id
 * @returns {Promise<Article>}
 */
const getArticleById = async (id) => {
    return Article.findById(id)
}

const getArticleByTitle = async (title) => {
    return Article.findOne({ title })
}

const getDefaultArticle = async () => {
    const default_article = await getArticleByTitle('Default Article');
    const default_user = await userService.getDefaultUser();

    if (!default_article){
        return createArticle({title: 'Default Article', content: 'My default article.'}, default_user)
    }
    return default_article
}


/**
 * update review
 * @param {ObjectId} article_id
 * @param {Object} articleBody
 * @returns {Promise<Article>}
 */
const updateArticle = async (article_id, updateBody) => {
    const article = await getArticleById(article_id)
    if (!article) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Article not found');
    }
    Object.assign(review, updateBody);
    await article.save();
    return article;
}


/**
 * delete review
 * @param {ObjectId} id
 * @returns {Promise<Article>}
*/

const deleteArticle = async (id) => {
    const article = await getReviewById(id)
    if (!article) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Article not found');
    }
    await article.remove();
    return article; 
}

module.exports = {
    createArticle,
    updateArticle,
    getArticleById,
    deleteArticle,
    getDefaultArticle
}
