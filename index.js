import dotenv from "dotenv"
import app from "./app.js"
import { connectDB, sequelize } from "./src/db/index.js"
import "./association.js"

dotenv.config({
    path: "./.env"
})

sequelize.sync({ force: false }).then(() => {
    console.log("Database synced");
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Error:", error)
})