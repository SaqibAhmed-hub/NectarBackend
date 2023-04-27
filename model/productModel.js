var mongoose = require('mongoose');
// const { randomUUID } = require('crypto'); 
// console.log(randomUUID());

const productSchema = mongoose.Schema({
    itemName: {
        type: String,
    },
    itemImage : {
        type: String,
    },
    totalQty : {
        type: Number,
    },
    availableQty : {
        type: Number,
    },
    unitOfMeasurement : {
        type : String,
    },
    price:{
        type: Number
    },
    createdAt : {
        type: Date
    },
    createdBy:{
        type: String
    },
    productId:{
        type : String,
        required : true
    },
    productCategory:{
        type: String
    },
    productDetails:{
        type: String
    },
    nutrition:{
        type: String
    },

})

module.exports = mongoose.model('product',productSchema);