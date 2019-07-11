const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    createdBy: {itemId:{
            type: Schema.Types.ObjectId,
            ref: "Client"
        }},
    categoryOwner: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Check category"]
    },
    cleanerOwner: {
        type: Schema.Types.ObjectId,
        ref: "Cleaner",
        required: [true, "Check cleaner"]
    },
    count: Number,
    basketOwner: {
        type: Schema.Types.ObjectId,
        ref: "Basket"
    },
    currentOrder: {
        type: Schema.Types.ObjectId,
        ref: "Order",
        required: [true, "Check Order"]
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

schema.post('findOneAndRemove', (doc,next)=>{
    let inc = doc.price*(0-doc.count);
    console.log("test",inc);
    mongoose.model('Basket')
        .findOneAndUpdate({_id:doc.basketOwner},{$pull:{products:doc._id}, $inc: {totalPrice:inc}})
        .exec((err,r)=>{
            next()
        })
});

mongoose.model('Product', schema);

