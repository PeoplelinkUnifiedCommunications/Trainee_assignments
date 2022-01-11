const mongoose = require("mongoose");

const genSlots = mongoose.Schema({
    slots: { type: Number, required: true },
});

module.exports = mongoose.model("genSlots", genSlots);
