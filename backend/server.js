const { json } = require('express');
const express =require('express')
require('dotenv').config() ;
const workoutRoutes= require('./routes/workout')
const mongoose=require('mongoose');
const app = express();
mongoose.set("strictQuery", false);

app.use(express.json())
app.use((req,res,next)=>{
  console.log(req.path,req.method)
  next();
});

const port = process.env.port || PORT;
app.use('/api/workout',workoutRoutes);

// app.get('/',(req,res)=>{
//     res.json({mssg:"Hey!! Welcome to the App"})

// })

//connect
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(port,()=>{
    console.log("DB connected & listening on ",process.env.PORT);
    })
})
.catch((error)=>{
  console.log(error)
})
