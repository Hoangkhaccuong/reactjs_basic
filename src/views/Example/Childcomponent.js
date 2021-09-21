import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../Example/Childcomponent.scss'
import { withRouter } from "react-router";

 class Childcomponent extends Component {
    state={
        fristname:"",
        lastname:"",
    }
handleSubmit=()=>{
    alert('Ok')
}
handleInputFn=(e)=>{
    this.setState({
        fristname:e.target.value
    })
}
handleInputLn=(e)=>{
    this.setState({
        lastname:e.target.value
    })
}
componentDidMount(){
    setTimeout(() => {
        this.props.history.push('/todo')
    }, 3000);
}
    render() {
        let {fristname,lastname,jobarr}=this.state
        console.log('Check props:' + this.state);
        return (
            <>
            {/* {console.log(this.state)} */}
            <div>
            <div className="form-group">
                <label>FristName</label>
                <input onChange={(e)=>{
                    this.handleInputFn(e)
                }} type="text"/>{fristname}
                <label>LastName</label>
                <input type="text" onChange={(e)=>this.handleInputLn(e)}/> 
                
            </div>
            <button className="text-center" type="submit" onClick={()=>this.handleSubmit()} >Submit</button>

            </div>
            <div>
                <h1>Ten :{this.state.fristname}</h1>
                <h1>Ho:{this.state.lastname}</h1>
                
            </div>
            <div>
            </div>
            </>
        )
    }
}
export default withRouter(Childcomponent)
