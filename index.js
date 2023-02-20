const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()

const cors = require("cors");
app.use(cors());

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: false}))

app.use("/api", require("./routes/PortfolioRoute"))
app.use("/api", require("./routes/JobRoute"))
app.use("/api", require("./routes/ProjectRoute"))

const URL = process.env.MONGO_DB
mongoose.set('strictQuery', false);
mongoose.connect(URL, {}).then(() => {
    console.log("DB is now connected")
}).catch((err) => {
    console.log(err)
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})