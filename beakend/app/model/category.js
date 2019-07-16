const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schem = new Schema({
    name: {type: String, unique: true, required: [true, "Category Name is required and unique"]},
    icon: {type: String, required: [true, "Categori's icon is required"]},
    product: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }],
    cleaner: [{
        type: Schema.Types.ObjectId,
        ref: "Cleaner"
    }],
    createdBy: {itemId:{
            type: Schema.Types.ObjectId,
            ref: "Client"
        }},
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
        }
    },
    createRestApi: true,
    strict: true,

});
mongoose.model('Category', schem);
