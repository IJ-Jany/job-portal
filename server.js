import express from express
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>welcome to our Job portal</h1>")
})

const PORt = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.DEV_MODE} port no ${PORT} `
        .bgCyan.white
    );
   
})