import React from 'react';

import './App.css';

import PostDoodles from './Components/PostDoodles'
import ViewDoodles from './Components/ViewDoodles'
import Functional from './Components/Functional.js'

class App extends React.Component {
  constructor() {
  super()
  this.state = {
    currentView: ''
  }
  }
  render(){
  return (
    <div className="App">
     <h1>Welcome to Doodle Tails</h1>
     <div>
       <button onClick={()=> this.setState({currentView:'post'})}>Post Page</button>
       <button onClick={()=> this.setState({currentView:'adopt'})}>Adopt Page</button>
     </div>
     {/* <PostDoodles/>
     <ViewDoodles/>
     */}

    {
      this.state.currentView === 'post'
      ?
      <PostDoodles/>
      :
      this.state.currentView === 'adopt'
      ?
      <ViewDoodles/>
      :
      null

    }

<footer>
        <Functional/>
      </footer>
    </div>
  );
}
}


export default App;
