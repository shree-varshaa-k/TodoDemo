import mongoose from "mongoose";


const varshaSchema =mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
     email:{
          type:String,
          required:true,
    },
    age:{
        type:Number,
        required:true,
        
    },
    

})
const Varsha =mongoose.model("Varsha",varshaSchema);
export default Varsha;