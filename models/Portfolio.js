const mongoose = require("mongoose")

const PortfolioSchema = new mongoose.Schema({
    years: {
        type: Number,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    biography: {
        type: String,
        required: true,
    },
    biography_en: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    jobs: [{
        type: mongoose.Types.ObjectId,
        ref: "Job",
        required: true,
    }],
    projects: [{
        type: mongoose.Types.ObjectId,
        ref: "Project",
        required: true,
    }],
})

module.exports = mongoose.model("Portfolio", PortfolioSchema)