import React , { Component } from 'react'

class addTodo extends Component {
 

    state= {
        content: ''
    }


    handleChange =(event) => {
        this.setState({
            content: event.target.value
        })
      }   
      
      handleSubmit =(event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
      }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> add new Todo :</label>
                    <input type="text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default addTodo;