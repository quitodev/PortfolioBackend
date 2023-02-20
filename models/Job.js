const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    position_en: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    time_en: {
        type: String,
        required: true,
    },
    technologies: [{
        type: String,
        required: true,
    }],
})

module.exports = mongoose.model("Job", JobSchema)