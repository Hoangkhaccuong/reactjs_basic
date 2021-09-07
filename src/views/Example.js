import React, { Component } from 'react'

export default class Example extends Component {
    render() {
        return (
            <>
            <div>
                <label>User Name</label>
                <input type='text'/>
             </div>
             <div>   
                <label>Password</label>
                <input type='password'/>

            </div>
            </>
        )
    }
}
