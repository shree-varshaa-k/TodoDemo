import express from "express";
import connectDb from "./config/db.js";
import Todo from "./model/TodoModel.js";
import Varsha from "./model/varsha.js";

connectDb();
const  app =express();
app.get('/', (req, res) => {
  res.send('app is running')
})
app.get('/varsha', (req, res) => {
  res.send({name:"varsha",age:"24"})
})
app.post("/api/todo",async (req,res)=>{
const todo =await Todo.create({
title:"read book",
desc:"no hands no legs no worries",
})
res.json(todo);
})

app.post("/api/varsha",async (req,res)=>{
  const varsha =await Varsha.create({
  name:"test",
  email:"test",
  age:67
  })
  res.json(varsha);
  })
  app.get('/api/todo',async (req, res) => {
   const todos=await Todo.find();
   res.json(todos);
  })




app.listen(8000, () => {
  console.log("server running in 8000" );
})
