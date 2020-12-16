import React, {Component} from 'react';
import  "./dashboard.css"
import Welcome from "../images/welcome.PNG"

// import './dashboard.css';


import   Menu  from "../menu/menu";




class Dashboard extends Component {



    render() {
        return (
            <div>
                {/* <Header
                style="display-block"
                /> */}
            <Menu/>
            <div className ="dashboardname">
                <img src={Welcome}/>

            </div>
       </div>



        );
    }
}

export default Dashboard;



