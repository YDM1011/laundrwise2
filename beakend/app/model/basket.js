const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    createdBy: {userId:{
            type: Schema.Types.ObjectId,
            ref: "Client"
        }},
    product: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    cleanerOwner: {
        type: Schema.Types.ObjectId,
        ref: "Cleaner"
    }
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
