const mongoose = require("mongoose");


// NON PROFIT SCHEMA
const nonprofitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    neighborhood: {
        type: String,
        enum: ["Laureles", "Poblado", "Envigado", "Boston", "Suramericana", "Belen", "La Palma"],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    schedule: {
        type: String,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    },
    is_active: {
        type: Boolean,
        default: true
    }
});

const NonProfit = mongoose.model("NonProfit", nonprofitSchema);
module.exports = NonProfit;
