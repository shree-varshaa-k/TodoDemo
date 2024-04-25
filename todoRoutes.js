import express from "express";
import {
  addTodo,
  getTodo,
  deleteTodo,
} from "../controllers/todoControllers.js";

const router = express.Router();

router.route("/").get(getTodo).post(addTodo);
router.route("/:id").delete(deleteTodo);

// router.get("/",getTodo);
// router.post("/",addTodo);

// router.get("/",
// async (req, res) => {
//     const todos=await Todo.find();
//     res.json(todos);
//    })
//    router.post("/",async (req,res)=>{
//     console.log(req.body);
//   const todo =await Todo.create({

//   title:req.body.title,
//   description:req.body.desc,
//   })
//   res.json(todo);
//   })
export default router;
