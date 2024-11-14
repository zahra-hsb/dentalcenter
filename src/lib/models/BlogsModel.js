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
    blogContent: {  
        type: String,  
        required: true,  
    },  
    author: {
        type: String
    }
});  



const BlogsModel = mongoose.models.blogs || mongoose.model('blogs', BlogSchema);  

export default BlogsModel;