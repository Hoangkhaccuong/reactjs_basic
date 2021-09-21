import React, { Component } from 'react'
import '../Todo/todoapp.scss'
import Addtodo from './Addtodo.js';
import { ToastContainer, toast } from 'react-toastify';

class Todolist extends Component {
    state ={
        jobname:[
            {id:'todo1',title:'working'},
            {id:'todo2',title:'Playing game'},
            {id:'todo3',title:'Learn English'}
        ],
        editTodo:{}
    }
addNewTodo=(todo)=>{
    this.setState({
        jobname:[...this.state.jobname, todo]
    })
    toast.error("Add success!");
}
handleDelete=(todo)=>{
    let currentTodo=this.state.jobname
    currentTodo=currentTodo.filter(item=>item.id!== todo.id)
    this.setState({
        jobname:currentTodo
    })
    toast.success("Delete success!")
}
handleEdit=(todo)=>{
   this.setState({
    editTodo:todo,
   })
}
    render() {
        let {jobname}=this.state
        return (
            <>
            <div className="todo-container">
              <Addtodo addNewTodo={this.addNewTodo}/>
               <div className="list-todo">
                   {jobname && jobname.length >0 &&
                    jobname.map((item,index)=>{
                        return(
                        <div className="item-todo" key={item.id}>
                            <span>{index+1} - {item.title}</span>
                            <button onClick={()=>this.handleEdit(item)}>Edit</button>
                            <button onClick={()=>this.handleDelete(item)}>Delete</button>
                         </div>
                        )
                    })
                   }              
               </div>
            </div>
            </>
        )
    }
}
export default Todolist
