const { Schema, models, model } = require("mongoose");

const reviewSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
}, {timestamps: true});

const Review = model('Review', reviewSchema);

module.exports = Review;