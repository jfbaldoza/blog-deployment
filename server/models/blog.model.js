const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
    {
        title: {
        type: String,
        required: false,
        unique: false,
        },
        desc: {
        type: String,
        required: false,
        },
        photo: {
        type: String,
        required: false,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);