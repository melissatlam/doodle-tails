import React, { Component } from 'react';
import axios from 'axios';
import Doodles from './Doodles'

 class ViewDoodles extends Component {
     constructor(){
        super()
        this.state = {
            allDoodles: []
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
                <h1>All the Doodles</h1>
                {mappedDoodles}
            </div>
        )
    }
}

export default ViewDoodles
