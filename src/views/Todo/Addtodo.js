import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';

 class Addtodo extends Component {
     state={
         title:""
     }
     handleOnChangeInput=(e)=>{
         this.setState({
             title:e.target.value
         })
         console.log(`Input:${e.target.value}`);
     }
    handleAddbtn=()=>{
        if(!this.state.title){
            // if(undefine , empty, null )=> false
            toast("Bạn chưa nhập công việc");
            return;
        }
       let todo={
           id:Math.floor(Math.random()*1000),
           title:this.state.title
       }
       this.props.addNewTodo(todo)
       this.setState({
           title:""
       })
    }
    render() {
        return (
            <div className="Edit-btn">       
                <h3>Exp Todo App</h3>
               <div className ="todo-app">
                   <input value={this.state.title} onChange={(e)=>this.handleOnChangeInput(e)}/>
                    <button onClick={()=>this.handleAddbtn()}>Add</button>
               </div>
            </div>
        )
    }
}
export default Addtodo
