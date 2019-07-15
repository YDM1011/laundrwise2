const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    createdBy: {userId:{
        type: Schema.Types.ObjectId,
        ref: "Client"
    }},
    baskets: [{
        type: Schema.Types.ObjectId,
        ref: "Basket"
    }],
    status: Number,
    dpc: Date,
    dpd: Date,
    timeColection1: Number,
    timeColection2: Number,
    deliveryTime1: Number,
    deliveryTime2: Number,
    deliveryInstruction: String,
    instruction: String,
    address1: String,
    address2: String,
    firstName: String,
    lastName: String,
    email: String,
    cityCode: String,
    country: String,
    mobile: String,
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

mongoose.model('BasketGroup', schema);

