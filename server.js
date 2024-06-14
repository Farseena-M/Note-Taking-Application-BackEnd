const express = require('express')
const dbConnect = require('./dbConnect')
const noteRouter = require('./router/noteRouter')
const authRouter = require('./router/authRouter')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

dbConnect()

app.use('/note',noteRouter)
app.use('/auth',authRouter)


const port = 4000
app.listen(port,()=>{
    console.log(`server connected port ${4000}`);
})