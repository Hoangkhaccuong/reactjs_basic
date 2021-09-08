import React, { Component } from 'react'

export default class Fruit extends Component {
    state=({
        val:"",
    })
    handleSetFruit=(e)=>{
        this.setState({
            val:e.target.value
        })
        console.log(e.target.value)
    }
handleSubmitSelect=(e)=>{
   console.log('You favorite flavor is:',this.state.val)
}
    render() {
        return (
            <div>
                   <div className="form">
        <label htmlFor>abc</label>
        <select  onChange={(e)=>this.handleSetFruit(e)} className="control">
          <option value={0}>Apple</option>
          <option value={1}>Bana</option>
          <option value={2}>Cacao</option>
          <option value={3}>Mango</option>'
        </select>
        <button onClick={(e)=>this.handleSubmitSelect(e)}>ok</button>

      </div>  
            </div>
        )
    }
}
