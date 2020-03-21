import React, { Component } from 'react'; 
import Todos from './components/todos'
import AddTodo from './components/addTodo'

class App extends Component{
state ={
  todos:[
    {id : 1 , content : ' My first task '}, 
  ]
}


deleteTodo =(id) =>{
  console.log(id)

    var newTodos = this.state.todos.filter(todo=>{
      return  todo.id !== id 
    });

    this.setState({
      todos :newTodos
    })
}


addTodo =(todo) =>{
     
    todo.id = this.state.todos.length + 1 
    let todoArray = [ ...this.state.todos , todo    ] 
    this.setState({
      todos:todoArray 
    })
}
  


render (){
   return(
      <div className="todo-app container">
         
        <h1 className="center blue-text ">
          TODOS
        </h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/> 
        <AddTodo addTodo={this.addTodo} />
      </div>
 
  );
  }
 
}

export default App;
