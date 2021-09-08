import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

export default class Form extends Component {
   
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                
            <div className="card" style={{width: '18rem'}}>
            <img src={this.props.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h1 className="card-text">{this.props.title}</h1>
              <p>{this.props.content}</p>
            </div>
          </div>
          </div>
          <div className="col-4">
                
            <div className="card" style={{width: '18rem'}}>
            <img src={require('../assets/images/1.jpg').default} className="card-img-top" alt="..." />
            <div className="card-body">
              <h1 className="card-text" >{this.props.title}</h1>
              <p >{this.props.content}</p>
            </div>
          </div>
          </div>
          <div className="col-4">
                
            <div className="card" style={{width: '18rem'}}>
            <img src={require('../assets/images/1.jpg').default} className="card-img-top" alt="..." />
            <div className="card-body">
              <h1 className="card-text">{this.props.title}</h1>
              <p>{this.props.content}</p>
            </div>
          </div>
          </div>
          </div>
                  </div>
        )
    }
}
