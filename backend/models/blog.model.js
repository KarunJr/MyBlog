import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    slug:{
        type: String,
        require: true,
    },
    summary:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    },
    content:{
        type: String,
        require: true
    },
    comments:[
        {
            user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            text: String,
            createdAt: {type: Date, default: Date.now}
        }
    ]
},{timestamps: true})

const Blog = mongoose.model("Blog", BlogSchema)

export default Blog;
    