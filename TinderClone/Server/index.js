const PORT=8000
const express=require("express")
const cors = require('cors')
const app = express()
const server = require('http').createServer(app)
app.use(cors())
app.use(express.json())

const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on('connection',(socket)=>{
    console.log("User Connected",socket.id)

    socket.on("private_message",async({targetUser,message})=>{
        console.log(targetUser,message)
    })
})


server.listen(PORT,()=>{console.log("SERVER RUNNINGuuu")})