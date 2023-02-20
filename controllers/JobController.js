const Job = require("../models/Job")

const JobController = {
    getJobs: async (req, res) => {
        try {
            let jobs = await Job.find({})
            return res.status(200).send({
                success: true,
                jobs,
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
    },
    createJob: async (req, res) => {
        try {
            const { company, position, position_en, time, time_en, technologies } = req.body
            if (!company || !position || !position_en || !time || !time_en || !technologies) {
                return res.status(400).send({
                    success: false,
                    message: "Faltan datos por completar"
                })
            }
            let job = await Job({
                company,
                position,
                position_en,
                time,
                time_en,
                technologies,
            })
            await job.save()
            return res.status(200).send({
                success: true,
                message: "Trabajo creado correctamente",
                job
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
    },
    updateJob: async (req, res) => {
        try {
            const { id } = req.params
            const { company, position, position_en, time, time_en, technologies } = req.body
            let job = await Job.findOneAndUpdate(id, { company, position, position_en, time, time_en, technologies })
            return res.status(200).send({
                success: true,
                message: "Trabajo actualizado correctamente",
                job
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
    },
    deleteJob: async (req, res) => {
        try {
            const { id } = req.params
            await Job.findByIdAndDelete(id)
            return res.status(200).send({
                success: true,
                message: "Trabajo eliminado correctamente"
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
    },
}

module.exports = JobController