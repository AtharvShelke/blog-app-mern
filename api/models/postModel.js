import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    authorPfp:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const Post = mongoose.model('Post', postSchema);

export default Post;