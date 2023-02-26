const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Product is required field']
    },
    price:{
        type: Number,
        required: [true, 'price is required field']
    },
    company:{
        type: String, 
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number, 
        default: 4.5
    }, 
    createdAt:{
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);
