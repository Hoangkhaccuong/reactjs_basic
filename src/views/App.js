import '../views/App.scss';
import React, { Component } from 'react'
import Example from './Example';
import Fruit from './Fruit';
import Form from './Form';
import Map from './Map';

export default class App extends Component {
  render() {
    
    return (
      <div>
        <Map/>
        <Example></Example>
        {/* <Fruit></Fruit> */}
        <Form title="San pj" content="Day la sp 1" img="https://kenh14cdn.com/203336854389633024/2021/9/7/241459475222542166555136373965702765516361n-16310033973091662640103-16310051354111533443675-16310164247721103362546.jpg"></Form>
        <Form title="row a"  content="Day la sp 2" img="https://kenh14cdn.com/203336854389633024/2021/9/7/241459475222542166555136373965702765516361n-16310033973091662640103-16310051354111533443675-16310164247721103362546.jpg" ></Form>
        <Form title="row b"  content="Day la sp 3" img ="https://kenh14cdn.com/203336854389633024/2021/9/7/241459475222542166555136373965702765516361n-16310033973091662640103-16310051354111533443675-16310164247721103362546.jpg"></Form>
     
      </div>
    )
  }
}

// function component
//  const App=()=> {
//   return (
//     <div className="App">
//      <button onClick={}> Click me</button>
//     </div>
//   );
// }

// export default App;
