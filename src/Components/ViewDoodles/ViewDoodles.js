import React, { Component } from 'react';
import axios from 'axios';
import Doodles from '../Doodles/Doodles'
import './ViewDoodles.css'

 class ViewDoodles extends Component {
     constructor(){
        super()
        this.state = {
            allDoodles: [{
                img:'', 
                name:'', 
                breed:'', 
                info:''
    
            }]
        }
     }

     componentDidMount(){
         axios.get('/api/doodle-tails')
         .then(response => {
            this.setState({allDoodles:response.data})
            })
            .catch(error => {
                console.log(error);
            })
         }
        updateAllDoodles = newArr => {
            this.setState({allDoodles:newArr})
        }

     render() {
        console.log(this.state.allDoodles)
        let mappedDoodles= this.state.allDoodles.map((val,index) => {
            return(
                <Doodles val={val} updateAllDoodles={this.updateAllDoodles}/>
            )
        })
        return (
            <div>
                <h1>Adopt a Doodle</h1>
            
               {mappedDoodles}
                <img className= 'adoptable' src="https://i.pinimg.com/originals/e3/f4/8a/e3f48aa871540fadf6cb5a1a6af76c5c.jpg" alt='bernadoodle'></img>
                <p>
                    <ul>Name: Miso</ul>
                    <ul>Breed: Bernadoodle</ul>
                    <ul>Info: I'm a 3 yr old girl who is fully potty trained, calm, and loves the dog park!</ul>
                </p>
                <img className= 'adoptable' src="https://cdn.websites.hibu.com/0ae7aa064c1b4f5b806c566a29a050e3/dms3rep/multi/Sheepadoodle+TOP.jpg" alt='bernadoodle'></img>
                <p>
                    <ul>Name: Oreo</ul>
                    <ul>Breed: Sheepadoodle</ul>
                    <ul>Info: I'm a 2 yr old boy who is pretty much potty trained. I'm good with kids and pretty much everyone! However, I do steal laundry and may chew up your shoes...</ul>
                </p>
                <img className= 'adoptable' src="https://lirp-cdn.multiscreensite.com/aafe0926/dms3rep/multi/opt/forwebsite2-640w.jpg" alt='bernadoodle'></img>
                <p>
                    <ul>Name: Clifford</ul>
                    <ul>Breed: Golden Doodle </ul>
                    <ul>Info: I'm a 6 yr old boy who weighs 75 lbs. They call me the gentle giant! </ul>
                </p>
            </div>

        

        )
    }
    
}


export default ViewDoodles
