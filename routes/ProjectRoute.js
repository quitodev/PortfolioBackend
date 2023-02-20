const ProjectRouter = require("express").Router()
const ProjectController = require("../controllers/ProjectController")

ProjectRouter.get("/projects", ProjectController.getProjects)
ProjectRouter.post("/projects/create", ProjectController.createProject)
ProjectRouter.put("/projects/update/:id", ProjectController.updateProject)
ProjectRouter.delete("/projects/delete/:id", ProjectController.deleteProject)

module.exports = ProjectRouter