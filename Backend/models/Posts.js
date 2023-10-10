import mongoose from "mongoose";

const PostSchema=new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
            
        },
        lastName: {
            type: String,
            required: true
           
        },
        
        userId: {
            type: String,
           required: true
        },
        
        picturePath: String,
        description:String,
        location: String,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean
        },
        comments: {
            type: Array,
            default: []
        }

    }, {timestamps: true}
)

const Post=mongoose.model("Post", PostSchema);

export default Post;