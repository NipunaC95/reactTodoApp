import React from "react";

const todos = ( {todos ,deleteTodo} ) => {
  const todoList = todos.length ? 
  
  //true
  (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={()=>{deleteTodo(todo.id)}}> {todo.content} </span>
        </div>
      );
    })
  ) 
  
  //false
  : (
    <p className="center"> you have no todos</p>
  );



  return <div className="todos collection">{todoList}</div>;
};

export default todos;
