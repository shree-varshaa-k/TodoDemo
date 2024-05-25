import mongoose from "mongoose";
const connectDb=async()=>{
    
  try{
   const conn=await mongoose.connect("mongodb+srv://shreevarshaakumar:12345@cluster0.pb9tv7g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
   console.log(`MongoDb connected: ${conn.connection.host}`)
  }
  catch(error){
   console.log(error.message);
   process.exit(1);
  }

}
export default connectDb;