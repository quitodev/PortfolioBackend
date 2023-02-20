const Portfolio = require("../models/Portfolio")

const PortfolioController = {
    getPortfolio: async (req, res) => {
        try {
            let portfolio = await Portfolio.find({}).populate("jobs").populate("projects")
            return res.status(200).send({
                success: true,
                portfolio,
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
    },
    createPortfolio: async (req, res) => {
        try {
            const { years, experience, biography, biography_en, github, linkedin, email, jobs, projects } = req.body
            if (!years || !experience || !biography || !biography_en || !github || !linkedin || !email || !jobs || !projects) {
                return res.status(400).send({
                    success: false,
                    message: "Faltan datos por completar"
                })
            }
            let portfolio = await Portfolio({
                years,
                experience,
                biography,
                biography_en,
                github,
                linkedin,
                email,
                jobs,
                projects,
            })
            await portfolio.save()
            return res.status(200).send({
                success: true,
                message: "Portfolio creado correctamente",
                portfolio
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
    },
    updatePortfolio: async (req, res) => {
        try {
            const { id } = req.params
            const { years, experience, biography, biography_en, github, linkedin, email, jobs, projects } = req.body
            let portfolio = await Portfolio.findOneAndUpdate(id, { years, experience, biography, biography_en, github, linkedin, email, jobs, projects })
            return res.status(200).send({
                success: true,
                message: "Portfolio actualizado correctamente",
                portfolio
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
    },
}

module.exports = PortfolioController