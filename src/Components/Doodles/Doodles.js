import React, { Component } from 'react';
import axios from 'axios';


 class Doodles extends Component {
     constructor(){
         super()
         this.state = {
             editStatus:false,
             img: '',
             name:'',
             breed:'',
             info:''
         }  
     }
     changeEditStatus = () => {
         this.setState({editStatus:!this.state.editStatus})
     }
     handleChange = e => {
         this.setState({[e.target.name]:e.target.value})
     }
     updateDoodles = () => {
         const {img,name,breed,info} = this.state
         axios.put(`/api/doodle-tails/${this.props.val.id}`,{img,name,breed,info})
         .then(response => {
             console.log(response)
             this.setState({editStatus: !this.state.editStatus})
            this.props.updateAllDoodles(response.data)
         })
         .catch(error => {
             console.log(error)
         })
     }

     deleteDoodles = () => {
        console.log(this.props.val.id)
         axios.delete(`/api/doodle-tails/${this.props.val.id}`)
         .then(response => {
             console.log(response)
             this.props.updateAllDoodles(response.data)
         })
         .catch(error => {
             console.log(error)
         })
     }

   

    render() {
        // console.log(this.props.value)
        console.log(this.state)
        return (
            <div>
                <img className= 'adoptable' src={this.props.val.img}alt="img"/>
                <h2>{this.props.val.name}</h2>
                <p>{this.props.val.breed}</p>
                <p class = 'newAdopt'>{this.props.val.info}</p>
                <button onClick={this.changeEditStatus}>Edit</button>
                
                {
                    this.state.editStatus === true
                    ?
                    <div>
                        <input type='text' placeholder='Image' name='img' onChange={this.handleChange} />
                        <input type='text' placeholder='Name' name='name' onChange={this.handleChange}/>
                        <input type='text' placeholder='Breed' name='breed' onChange={this.handleChange}/>
                        <input type='text' placeholder='Info' name='info' onChange={this.handleChange}/>
                        <button onClick = {this.updateDoodles}>Update</button>
                    </div>
                    :
                    null
                    

                }
                <button onClick = {this.deleteDoodles}>Delete</button>
            </div>
        )
    }
}

export default Doodles
