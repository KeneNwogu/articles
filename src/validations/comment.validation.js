const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createComment = {
    body: Joi.object().keys({
        content: Joi.string().required()
    })
}

const getComment = {
    params: Joi.object().keys({
        articleId: Joi.string().custom(objectId)
    })
}

module.exports = {
    createComment,
    getComment
}