import React, { Component } from 'react'
import axios from 'axios';



 class PostDoodles extends Component {
     constructor(){
         super()
         this.state= {
            img:'', 
            name:'', 
            breed:'', 
            info:''

         }
     }

     handleChange = e => {
         this.setState({[e.target.name]: e.target.value})
     }
     handleClick = () => {
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
        const {img,name,breed,info} = this.state
        return (
            <div>
                <h1>Post Your Doodle</h1>
                <input type = "text" placeholder = 'img' onChange={this.handleChange} name='image' value={img}/>
                <img src = {this.state.img} alt=""/>
                <input type = "text" placeholder = 'name' onChange={this.handleChange} name='name' value={name}/>
                <input type = "text" placeholder = 'breed' onChange={this.handleChange} name='breed' value={breed}/>
                <input type = "text" placeholder = 'info' onChange={this.handleChange} name='info' value={info}/>
                <button onClick={this.handleClick}>Add Doodle</button>
            </div>
        )
    }
}

export default PostDoodles
