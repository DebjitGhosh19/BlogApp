import mongoose from "mongoose";

const connectDb=async () => {
  try {
   await mongoose.connect(process.env.MONGOURL)   
    console.log("Db Connect");
    
  } catch (error) {
    console.log("Db not Connect");
  }
}
export default connectDb;