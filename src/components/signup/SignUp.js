import React from 'react';
import { Link } from "react-router-dom";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaKey } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import {FiArrowRightCircle} from 'react-icons/fi'
import './SignUp.css';
import BackgroundPic from "../images/Vector Smart Object1.png"
import Popup from "reactjs-popup";

class SignUp extends React.Component {

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

                    }
                },
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
                        required: true,

                    }
                },
            ],
            error: "",
            checked: false,
            isModalOpen: false
        }

    };


    handleCheckboxChange = event => this.setState({ checked: event.target.checked })

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

            } else if (elm ==="email") {
                let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(value)) {
                    input.isValid = true;
                } else {
                    input.isValid = false
                }
            }
        })
    }
   


    register = (e) => {
        e.preventDefault()
        let fullName = this.state.inputs[0].value
        let email = this.state.inputs[1].value
        let password = this.state.inputs[2].value
        if (fullName && email && password) {
            if (this.state.inputs[1].isValid) {
                if (this.state.inputs[2].value.length > 5){
                    if(this.state.checked){
                       
                            window.location.href = "/signin"
                            this.setState({error:"Loading"})
                       
                    }
                    else{
                        this.setState({ error: "Please get acquainted terms of service and privacy policy" })
                    }
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
            <div className='wrapper'>
                <div className="wrapper-signup">
                    <div className="login-image"><img src={BackgroundPic} alt="" />
                        <div className="text">
                            <h2>WELCOME TO COMPANY NAME</h2>
                            <p>The Leading Creative Managment Platform</p>
                        </div>
                        <form onSubmit={this.register}>
                            <div className="textbox">
                                <FaUserAlt />
                                <input type="name" placeholder="Full Name" onChange={(e) => this.handleChange(e, 0)} />
                            </div>

                            <div className="textbox">
                                <FaEnvelopeOpen />
                                <input type="email" placeholder="Email" onChange={(e) => this.handleChange(e, 1)} />

                            </div>
                            <div className="textbox">

                                <FaKey />
                                <input type="password" placeholder="password" onChange={(e) => this.handleChange(e, 2)} />

                            </div>

                            <label className="container"><input type="checkbox"  checked={this.state.checked} onChange={this.handleCheckboxChange}/><span className="checkmark"
                                ></span> I agree to the Terms of service  and  Privacy Policy</label>
                            <label className="container"> <input type="checkbox" /> <span className="checkmark"></span>Yes,
                            send me deals,discounts and updates! </label>

                            <div className="submit">
                                <Popup trigger={<button>SIGN UP <FiArrowRightCircle   size={25}/></button>} position="right center">
                                <div className='errorBlock'><p> {this.state.error} </p></div>
                                </Popup>
                                    
                            </div>
                        </form>
                        
                        
                        <div className="da">
                            <p>Already have an account? <Link to="/signin" className='signup'>Login</Link></p>
                        </div>

                    </div>
                </div>
            </div>


        )
    }
}

export default SignUp

