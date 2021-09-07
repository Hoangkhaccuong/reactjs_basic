import React, { Component } from 'react'


export default class Example extends Component {
// handleOnInput =(event)=>{
//     this.setState({
//       name:event.target.value
//     })
// }
state=({
  username:"",
  password:""
})
handleInputForm=(e)=>{
      this.setState({
        username:e.target.value,
      })
  console.log(`UserName: ${e.target.value}`)
}
handleInputPassword=(e)=>{
  this.setState({
    password:e.target.value,
  })
console.log(`Password: ${e.target.value}`)
}
displayInfor=(e)=>{
  e.preventDefault()
  console.log('Output data:', this.state)
}
    render() {
      
        return (
             <>
             <form method="">
               <div>
               <label>User Name</label>
               <input type="text" value={this.state.username} onChange={(e)=>this.handleInputForm(e)}></input>
               </div>
               <div>
               <label>Password</label>
               <input type="password" value={this.state.password} onChange={(e)=>this.handleInputPassword(e)}></input> 
               </div>
               <button onClick={(e)=>this.displayInfor(e)}>Submit</button>
             </form>
            </>
        )
    }
}
