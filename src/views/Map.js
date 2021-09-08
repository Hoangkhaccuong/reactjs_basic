import React, { Component } from 'react'

export default class Map extends Component {
   
    render() {
const a=[1,2,3,4,5,6,7]
const b= a.map((x)=>(
    <div> <li> so:{x*2}</li></div>
   
))
   
        return (
            <div>
             {b}
            </div>
        )
    }
}
