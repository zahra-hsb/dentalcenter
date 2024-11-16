import mongoose, { Schema } from 'mongoose';

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    blogImg: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
    },
    summary: {
        type: String
    },
    blogContent: {
        type: String,
        required: true,
    },
    author: {
        type: String
    },
    date: {
        type: String,
        required: true,
    },
    selected: {
        type: Boolean,
        required: true,
    }
});



const BlogsModel = mongoose.models.blogs || mongoose.model('blogs', BlogSchema);

export default BlogsModel;