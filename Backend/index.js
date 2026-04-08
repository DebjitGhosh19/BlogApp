import express from'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import userRouter from './routes/user.router.js';
dotenv.config()
const app=express();
const port=5000
connectDb()
app.use(express.json())
app.get("/",(req,res)=>{
  res.send("Hello")
})
app.use("/user",userRouter)

app.listen(port,()=>{
  console.log(process.env.API_KEY);
  console.log(`Server is running at http://localhost:${port}`);
})
