import React from 'react'
import './confirmpass.css'

import { BrowserRouter as Link} from "react-router-dom";
import {FaKey} from 'react-icons/fa'
import {Redirect} from 'react-router-dom'


class ConfirmPass extends React.Component{
constructor(){
    super()
    this.state = {
        inputs: [
            
            {
                value: "",
                isTuched: false,
                isValid: false,
                validation: {
                    required: true,

                }
            },
            {
                value: "",
                isTuched: false,
                isValid: false,
                validation: {
                    required: true,

                }
            },
        ],
        error: "",
        redirect:false
    }
}


componentDidMount(){
    setTimeout(() => { this.setState({ redirect: !this.state.redirect }) }, 100000);
}

handleChange = (e, id) => {
    this.setState({ error: '' })
    let value = e.currentTarget.value
    let inputs = this.state.inputs
    let input = inputs[id]
    input.value = value
    input.isTuched = true
    Object.keys(input.validation).map((elm, index) => {
        if (elm === "required") {
            if (value === "" || value == null) {
                input.isValid = false;
            } else {
                input.isValid = true
            }

        } 
    })
}

 confirm=()=>{

    let newpass = this.state.inputs[0].value
    let confirmpass = this.state.inputs[1].value
    if( newpass === confirmpass){
        
            window.location.href='/confrimpass'
       
    }else{
        this.setState({error:"incorect password!"})
    }
 }

render(){
    let redirect=this.state.redirect
    if(redirect){
        return(
        
            <div  className='confirmpass'>
                <h4>Your password has been sent to your email</h4><br/>
                    <h6>Please check your email</h6><br/>
                   
                   
                    <div>
                    <FaKey  />
                        <input type="password" onChange={(e) => this.handleChange(e, 0)} placeholder='Enter new password' />
                    </div>
                    <div>
                    <FaKey  />
                    <input type='password' onChange={(e) => this.handleChange(e, 1)} placeholder='Confrim Your password'/>
                    </div>
                     <Link to ='/signin'><button className='pass'> Confirm</button></Link>
            </div>
        )
    }
    else{
        return <Redirect to ="/signin" />
     }
     
   
}
}

export default ConfirmPass