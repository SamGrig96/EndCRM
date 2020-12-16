import React from 'react';
import { Link } from "react-router-dom";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaKey } from 'react-icons/fa'
import {FiArrowRightCircle} from 'react-icons/fi'
import './SignIn.css';
import BackgroundPic from "../images/Vector Smart Object1.png"
import Popup from "reactjs-popup";


class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            inputs: [
                {
                    value: "",
                    isTuched: false,
                    isValid: false,
                    validation: {
                        required: true,
                        email: true

                    }
                },
                {
                    value: "",
                    isTuched: false,
                    isValid: false,
                    validation: {
                        required: true
                    }
                }

            ],
            error: "",
            checked: false,
           
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
            if (elm == "required") {
                if (value == "" || value == null) {
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

    handleCheckboxChange = event => this.setState({ checked: event.target.checked })

    
    login = (e) => {
        e.preventDefault()
        let email = this.state.inputs[0].value
        let password = this.state.inputs[1].value
        if (email && password) {
            if (this.state.inputs[0].isValid) {
                if (password.length > 5) {
                   

                            
                                if (this.state.checked) {
                                    localStorage.setItem('remmember', true)
                                }
                                window.location.href = "/"

                                this.setState({error:'Loading!!!'})
                        
                } else {
                    this.setState({ error: "Can not be more than 5 characters" })
                }
            } else {
                this.setState({ error: "incorrect email!" })
            }
        } else {
            this.setState({ error: "all fields are required" })
        }
    }
    render() {
        return (
            <div className="wrapper-login">
                <div className="login-image"><img src={BackgroundPic} alt="" />
                    <div className="text">
                        <h2>WELCOME TO COMPANY NAME</h2>
                        <p>The Leading Creative Managment Platform</p>
                    </div>
                    <form onSubmit={this.login}>
                        <div className="textbox">
                            <FaEnvelopeOpen />
                            <input className=" email" onChange={(e) => this.handleChange(e, 0)} type="email" placeholder="Email"  />
                        </div>
                        <div className="textbox">
                            <FaKey />
                            <input type="password" onChange={(e) => this.handleChange(e, 1)} placeholder="password"  />
                        </div>

                        <div className="fpassword"><Link to='passchange'>Forgot your password?</Link></div>

                        <label className="container">  <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange} />
                        <span className="checkmark" ></span>Remember me</label>

                        <div className="submit">    
                       <Link to ='/crm/project/dashboard'><Popup trigger={< button type='submit' >LOGIN <FiArrowRightCircle   size={25}/> </button>} position='right center'></Link>
                        <div className='errorBlock'><p> {this.state.error} </p></div>
                        </Popup>
                        </div>
                        </form>
                    
                    <div className="da">
                        <p>Don't Have an account? <Link to="/signup" className='signup' >Sign Up</Link></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignIn
