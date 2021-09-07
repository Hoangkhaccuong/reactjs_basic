import React, { Component } from 'react'


export default class Example extends Component {
  state={
    name:'Ci',
    age:18,
    add:'QB'        
  }
// handleOnInput =(event)=>{
//     this.setState({
//       name:event.target.value
//     })
// }
handleSsubmit=()=>{
  alert('sumbit')
}
handleOnChangeInput=(e)=>{
  this.setState({
    name:e.target.value,
    age:11,
    add:"QN",
    
  })
  console.log(e.target.value ,'event',e.target ,e,'')
}
    render() {
        const age=17
        console.log('hoc vs react ', this.state)
        return (
          
           <>
           <div>
             <h1>Login {this.state['name']} </h1>
             <input type='text' value={this.name} onChange={(e)=>this.handleOnChangeInput(e)}></input>
              <button onClick={()=>this.handleSsubmit()}>Submit</button>
           </div>
            </>
        )
    }
}
