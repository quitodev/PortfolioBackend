const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    subtitle_en: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    description_en: {
        type: String,
        required: true,
    },
    technologies: [{
        type: String,
        required: true,
    }],
    platforms: [{
        type: String,
        required: true,
    }],
})

module.exports = mongoose.model("Project", ProjectSchema)