const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const articleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        comments: {
            type: Number,
            default: 0
        },
    },
    {
      timestamps: true,
    }
)

articleSchema.plugin(toJSON)

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;