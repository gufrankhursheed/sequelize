import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("nodejs connect to msql")
})

import userRouter from "./src/route/user.route.js"

app.use("/user", userRouter)

export default app