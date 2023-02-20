const JobRouter = require("express").Router()
const JobController = require("../controllers/JobController")

JobRouter.get("/jobs", JobController.getJobs)
JobRouter.post("/jobs/create", JobController.createJob)
JobRouter.put("/jobs/update/:id", JobController.updateJob)
JobRouter.delete("/jobs/delete/:id", JobController.deleteJob)

module.exports = JobRouter