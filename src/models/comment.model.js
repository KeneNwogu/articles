const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const commentSchema = mongoose.Schema(
    {
        parent: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Article',
            required: true,
        },
        comment: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Comment',
            required: false
        },
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        content: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
    }
)

commentSchema.plugin(toJSON)

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment