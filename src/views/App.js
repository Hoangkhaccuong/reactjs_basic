import '../views/App.scss';
import React, { Component } from 'react'
import Example from './Example';

export default class App extends Component {
  render() {
    return (
      <div>
        <Example></Example>
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
