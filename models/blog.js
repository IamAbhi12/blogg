const mongoose = require('mongoose');

//to specify the schema of our blogs
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }

}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;