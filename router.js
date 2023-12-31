const router = require("express").Router();

const { getTodos, createTodo, updateTodo, deleteTodo } = require("./controllers/Todo");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/todos", getTodos);

router.post("/todos", createTodo);

router.put("/todos/:todoID", function(req, res){
  updateTodo
});

router.delete("/todos/:todoID", deleteTodo);

module.exports = router;