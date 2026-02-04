const mongoose = require("mongoose");
const palnSchema = new mongoose.Schema({

    price: {
        type: Number,
        default: 0,
        required: true
    },
    planId: {
        type: String,
        required: true,
        unique: true
    },
    categoryGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategoryGroup',
        required: false
    }
},

    { timestamps: true });

module.exports = mongoose.model('Plan', palnSchema);
