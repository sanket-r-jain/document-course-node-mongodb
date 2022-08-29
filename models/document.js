const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    documentType: { type: String, required: true },
    documentPath: { type: String, required: true },
    courseId: { type: Number, required: true }
})

module.exports = mongoose.model("documents", documentSchema);
