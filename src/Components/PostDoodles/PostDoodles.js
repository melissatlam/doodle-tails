import React, { Component } from 'react'
import axios from 'axios';
import './Styles/PostDoodles.css';


 class PostDoodles extends Component {
     constructor(){
         super()
         this.state= {
            img:'', 
            name:'', 
            breed:'', 
            info: ''

         }
     }
 

     handleChange = e => {
         this.setState({[e.target.name]: e.target.value})
     }
     handleClick = () => {
        // console.log(document.querySelectorAll(".doodleInput"));
        // console.log(document.querySelectorAll(".doodleInput")[0].value)
         const {img,name,breed,info} = this.state;
         axios.post('/api/doodle-tails', {
             img,
             name,
             breed,
             info
         }).then(response => {
            console.log(response)
            this.setState({
                img:'',
                name:'',
                breed:'',
                info:''
            })
         }).catch(error => {
            console.log(error)
        })
    }
    render() {
        // console.log(this.state)
        // const {img,name,breed,info} = this.state
        return (
            <div>
                <h3>Rehome Your Doodle</h3>
                <div class = 'flexChester'>
                <input className = 'doodleInput' type = "text" placeholder = 'Photo of your Doodle' onChange={this.handleChange} name='img' />
                <img className = 'adoptable' src = {this.state.img} alt=""/>
                <input className = 'doodleInput' type = "text" placeholder = 'Name' onChange={this.handleChange} name='name' />
                <input className = 'doodleInput' type = "text" placeholder = 'Breed' onChange={this.handleChange} name='breed' />
                <input className = 'doodleInput' type = "text" placeholder = 'More Info' onChange={this.handleChange} name='info' /></div>
                <button className = 'add' onClick={this.handleClick}>Add Doodle</button>
            </div>
        )
    }
}

export default PostDoodles
