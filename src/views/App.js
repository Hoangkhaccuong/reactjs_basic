import '../views/App.scss';
import React, { Component } from 'react'
import Todolist from './Todo/Todolist';
// import Component1 from './Example/Component1';
import Showhide from './Dieukien/Showhide';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Nav/Navbar';
import {
BrowserRouter as Router,Switch,Route,Link, BrowserRouter
} from "react-router-dom";
import Childcomponent from './Example/Childcomponent';

 class App extends Component {
  render() {    
    console.log(`ALl state: ${this.state}`);
    return (
      <BrowserRouter>
      <>
       <Navbar/>
     
      <div >
      <Switch>
          <Route path="/about">
            <Showhide />
          </Route>
          <Route path="/Todo">
          <Todolist/>
          </Route>
          <Route path="/" exact>
            <Childcomponent/>
          </Route>
        </Switch>
            {/* <Component1></Component1> */}
            {/* <Showhide></Showhide> */}
            {/* <Todolist/> */}
            
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
      </>
      </BrowserRouter>

    )
  }
}
export default App