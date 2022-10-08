/* const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/route')
const cors = require('cors')

// dotenv.config()

// mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Connected to Database"))

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/admins", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("connected to Database")
})

const userSchema = new mongoose.Schema({
      
    
    username: {
        type:String,
        required:true,
        unique:true
    },
    
    email :{
        type:String,
        required:true,
        unique:true
    },
    
    password :{
        type:String,
        required:true,
        unique:true
    },
    
    date:{
        type:Date,
        default:Date.now
    },
    
})

const users = new mongoose.model("users", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { username, password} = req.body
    users.findOne({ username: username}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "logged in successfully", user: user})
            } else {
                res.send({ message: "Incorrect username or password"})
            }
        } else {
            res.send({message: "You are not a user of Resumake inc."})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { username, email, password} = req.body
    users.findOne({username:username}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                username,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Redirecting you to login" })

                }
            })
        }
    })
    
}) 


app.listen(4000, () =>  console.log("server is on bitch on"))

 */