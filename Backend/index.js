import express from'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import userRouter from './routes/user.router.js';
import dns from 'dns'
dns.setServers(['1.1.1.1','8.8.8.8'])
dotenv.config()
const app=express();
const port=process.env.PORT

connectDb()
app.use(express.json())
app.get("/",(req,res)=>{
  res.send("Hello")
})
app.use("/user",userRouter)

app.listen(port,()=>{
  console.log(`Server is running at http://localhost:${port}`);
})
