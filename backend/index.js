const express = require("express")
const cors =   require("cors")
const {connectDb} = require("./db")
const userRouter = require("./routes/UserRouter")

const port = 3000
const app = express()
connectDb()

app.use(express.json())
app.use(cors())
app.use("/api/user",userRouter)


app.listen(3000,()=>{
    console.log("Server running on port 3000")
})