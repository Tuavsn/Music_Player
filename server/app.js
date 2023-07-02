const express = require("express")
const app = express()
require("dotenv/config")
const cors = require("cors")

app.use(cors({origin: true}))
app.use(express.json())

const userRoute = require("./routes/auth")
app.use("/api/users", userRoute)

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})