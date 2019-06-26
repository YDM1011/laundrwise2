const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    createdBy: {itemId:{
            type: Schema.Types.ObjectId,
            ref: "Client"
        }},
    categoryOwner: {
            type: Schema.Types.ObjectId,
            ref: "Category"
        },
    name: {type: String, required: [true, "Name is required"]},
    des: String,
    price: {type: Number, required: [true, "Price is required"]},
    images: {type: String, required: [true, "Image is required"]},
    date: {type: Date, default: new Date()}
},{
    toJSON: {
        transform: function (doc, ret) {
            delete ret.pass;
            delete ret.token;
        }
    },
    toObject: {
        transform: function (doc, ret) {
            delete ret.pass;
            delete ret.token;
        },
        virtuals: true,
    },
    createRestApi: true,
    strict: true,

});

mongoose.model('Product', schema);

