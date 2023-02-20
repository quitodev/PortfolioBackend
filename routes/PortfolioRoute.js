const PortfolioRouter = require("express").Router()
const PortfolioController = require("../controllers/PortfolioController")

PortfolioRouter.get("/portfolio", PortfolioController.getPortfolio)
PortfolioRouter.post("/portfolio/create", PortfolioController.createPortfolio)
PortfolioRouter.put("/portfolio/update/:id", PortfolioController.updatePortfolio)

module.exports = PortfolioRouter