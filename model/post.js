import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    img:
    {
        data: Buffer,
        contentType: String
    }

})


const Posts = models.post || model('post', postSchema);

export default Posts;