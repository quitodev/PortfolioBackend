const Project = require("../models/Project")

const ProjectController = {
    getProjects: async (req, res) => {
        try {
            let projects = await Project.find({})
            return res.status(200).send({
                success: true,
                projects,
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
    },
    createProject: async (req, res) => {
        try {
            const { name, subtitle, subtitle_en, description, description_en, technologies, platforms } = req.body
            if (!name || !subtitle || !subtitle_en || !description || !description_en || !technologies || !platforms) {
                return res.status(400).send({
                    success: false,
                    message: "Faltan datos por completar"
                })
            }
            let project = await Project({
                name,
                subtitle,
                subtitle_en,
                description,
                description_en,
                technologies,
                platforms,
            })
            await project.save()
            return res.status(200).send({
                success: true,
                message: "Proyecto creado correctamente",
                project
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
    },
    updateProject: async (req, res) => {
        try {
            const { id } = req.params
            const { name, subtitle, subtitle_en, description, description_en, technologies, platforms } = req.body
            let project = await Project.findOneAndUpdate(id, { name, subtitle, subtitle_en, description, description_en, technologies, platforms })
            return res.status(200).send({
                success: true,
                message: "Proyecto actualizado correctamente",
                project
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
    },
    deleteProject: async (req, res) => {
        try {
            const { id } = req.params
            await Project.findByIdAndDelete(id)
            return res.status(200).send({
                success: true,
                message: "Proyecto eliminado correctamente"
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
    },
}

module.exports = ProjectController