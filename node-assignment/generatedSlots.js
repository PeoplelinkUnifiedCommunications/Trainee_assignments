const mongoose = require("mongoose");

const genSlots = mongoose.Schema({
    slots: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("genslots", genSlots);
