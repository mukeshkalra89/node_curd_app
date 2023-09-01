const Todo = require("../Model/Todo");

const getTodos = (req, res) => {
  Todo.find().then((err, results) => {
    if (err) {
      res.send(err);
    }
    res.json(results);
  });
};

const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  });
  
  todo.save().then((todo) => {
    res.json(todo);
  })
  .catch((err) =>{
    res.send(err);
  })
};

const updateTodo = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      },
    },
    { new: false },
    (err, todo_res) => {
      if (err) {
        res.send(err);
      } 
      res.json(todo_res);
    }
  );
};

const deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.todoID })
  .then(() => res.json({ message: "Todo Deleted" }))
  .catch((err) => res.send(err));
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};


