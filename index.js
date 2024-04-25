import express from "express";
import connectDb from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js"
import Varsha from "./model/varsha.js";

connectDb();
const  app =express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('app is running')
})
app.get('/varsha', (req, res) => {
  console.log(req.body)
  res.send({name:"varsha",age:"24"})
})
// app.post("/api/todo",async (req,res)=>{
//   console.log(req.body);
// const todo =await Todo.create({
  
// title:req.body.title,
// description:req.body.desc,
// })
// res.json(todo);
// })

app.post("/api/varsha",async (req,res)=>{
  console.log(req.body);
  const varsha =await Varsha.create({
  name:req.body.Name,
  email:req.body.Email,
  age:req.body.Age,
  })
  res.json(varsha);
  })
  // app.get('/api/todo',async (req, res) => {
  //  const todos=await Todo.find();
  //  res.json(todos);
  // })
app.use("/api/todo",todoRoutes);
app.listen(8000, () => {
  console.log("server running in 8000" );
})
