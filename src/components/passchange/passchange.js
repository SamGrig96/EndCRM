import React, { component } from 'react';
import "./passchange.css"
import { FaEnvelopeOpen } from "react-icons/fa";
import  {Link} from "react-router-dom"
import { Redirect } from 'react-router-dom'
import Popup from "reactjs-popup";
import {FiArrowRightCircle} from 'react-icons/fi'

class passChange extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            inputs: [
                {
                    value: "",
                    isTuched: false,
                    isValid: false,
                    validation: {
                        required: true,
                        email: true
                    }
                }
            ],
            error: ""
        }


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
                if (value === "" || value === null) {
                    input.isValid = false;
                } else {
                    input.isValid = true
                }

            } else if (elm == "email") {
                let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(value)) {
                    input.isValid = true;
                } else {
                    input.isValid = false
                }
            }
        })
    }

    send = (e) => {
        e.preventDefault()
        let email = this.state.inputs[0].value;
        if (email) {
            if (this.state.inputs[0].isValid) {
              
                   
                            window.location.href = '/confirmmsg'
                    
            }
            else { this.setState({ error: "incorrect email!" }) }
        }
        else {
            this.setState({ error: "all fields are required" })
        }
    }
    render(){
       
      
            return(
            
                <div  className='change'>
                    <h4>Forgot Your Password?</h4><br/>
                    <p>Please  enter the email address used for your registration below. <br/>The new password wiil be sent there</p><br/>
                    <form onSubmit={this.send}>
                   <div className='input'>
                   <FaEnvelopeOpen  />
                       <input  className='email' onChange={(e) => this.handleChange(e, 0)} type='email' placeholder='Enter email' /></div> <br/>
                       <div  className="registre"><Link to="/signup">Please Sign Up</Link></div><br/>
                      
                    <div >
                         <Popup trigger={ <button  className='pass' onClick={this.send} >Send Password <FiArrowRightCircle   size={25}/></button>} position='right center'>
                         <div className='errorBlock'><p> {this.state.error} </p></div>
                         </Popup>
                        </div><br/>
    
        
                    </form>
                </div>
                
            
            )
        
      
    }
}

    


export default passChange

