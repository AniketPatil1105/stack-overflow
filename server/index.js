/* import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from './routes/users.js'
import bodyparser from 'body-parser'


const app = express();
//app.use(express.json({ limit: "30mb", extended: true }));
//app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });


app.get('/',(req, res) => {
         res.send("This is a stack overflow clone API")
     })

app.use('/user',userRoutes)


const PORT = process.env.PORT || 5000;

const CONNECTION_URL="mongodb+srv://aniket1105:aniket1105@stackoverflow-clone.e7dqzl9.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    }))
.catch((err)=>console.log(err.message));
 */


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import questionRoutes from './routes/Questions.js'
import answerRoutes from "./routes/Answers.js";

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


/* app.use('/',(req, res) => {
    res.send("This is a stack overflow")
 }) */

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes); 

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

const PORT = process.env.PORT || 5000;

const CONNECTION_URL="mongodb+srv://admin:admin@cluster0.ppn9vrj.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    }))
.catch((err)=>console.log(err.message));