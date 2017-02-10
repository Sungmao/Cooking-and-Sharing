const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    
    title: {
        type: String
    },
    content: {
        type: String
    },
    comments: {
        type: [String]
    },
    // image: { 
    //     data: Buffer, contentType: String 
    // },
    image: { 
        type: String
    },
    city: {
        type: String
    },
    price: {
        type: String
    },
    
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;