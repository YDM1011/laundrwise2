const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    createdBy: {itemId:{
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
    managerCleanerOwner: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    deliveryOwner: {
        type: Schema.Types.ObjectId,
        ref: "Delivery"
    },
    managerDeliveryOwner: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    totalPrice: {type: Number, default: 0},
    status: Number,
    dpc: Date,
    dpd: Date,
    timeColection1: Number,
    timeColection2: Number,
    deliveryTime1: Number,
    deliveryTime2: Number,
    deliveryInstruction: String,
    address1: String,
    address2: String,
    firstName: String,
    lastName: String,
    email: String,
    cityCode: String,
    country: String,
    mobile: String,
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

