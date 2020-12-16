 import React from 'react';
 import './confirmmsg.css'
import { Link } from 'react-router-dom';

 class Confirmmsg extends React.Component{
     

    render (){
        return(
            <div className='msgtext'>
                <h2 style={{color:'red'}}>The message was successfully sent to the mail</h2>
                <h3>Please check your mail</h3>
                <h4>Please click in button and go to login page</h4>
                <Link to='/signin'><button className='btn'>LOGIN</button></Link>
            </div>
        )
    }
 }

 export  default Confirmmsg