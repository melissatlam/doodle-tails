import React from 'react';

import './App.css';

import PostDoodles from './Components/PostDoodles/PostDoodles'
import ViewDoodles from './Components/ViewDoodles/ViewDoodles'
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
      
     <h1 className='title'>Doodle Tails Adoption</h1>

     <div className ='mission'>
                <h2>Our Mission</h2>
                <p>Here at Doodle Tails, we love our doodles and want to make sure that each one is taken care of, even if it means rehoming your beloved pup. We understand that life changes quickly and sometimes you may not be able to take care of your furry friend anymore. Whether you’re moving, have long work hours, or having trouble with expenses, we’re here to help! </p>
            </div>

     <div className='rehome'>
       <button className = 'button' onClick={()=> this.setState({currentView:'post'})}>Rehome Your Doodle</button>
       <button className = 'button' onClick={()=> this.setState({currentView:'adopt'})}>Adopt a Doodle</button> 

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
    <div class="flex">
    <img className = 'chester' src={process.env.PUBLIC_URL + "/Images/1.JPG"} alt='dog'/>
    <img className = 'chester' src={process.env.PUBLIC_URL + "/Images/2.JPG"} alt='dog'/>
    <img className = 'chester' src={process.env.PUBLIC_URL + "/Images/6.JPG"} alt='dog'/>
    <img className = 'chester' src={process.env.PUBLIC_URL + "/Images/4.JPG"} alt='dog'/>
    <img className = 'chester' src={process.env.PUBLIC_URL + "/Images/5.JPG"} alt='dog'/>
    </div>
    {/* <body class = 'body'>
      <Body/>
    </body> */}
  <footer class = 'footer'>
        <Functional/>
      </footer>
    </div>
  );
}
}


export default App;
