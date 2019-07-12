const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    createdBy: {userId:{
            type: Schema.Types.ObjectId,
            ref: "Client"
        }},
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    cleanerOwner: {
        type: Schema.Types.ObjectId,
        ref: "Cleaner"
    },
    totalPrice: {type: Number, default: 0},
    instruction: String,
    status: Number,
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

mongoose.model('Basket', schema);

