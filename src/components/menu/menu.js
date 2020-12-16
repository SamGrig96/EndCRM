import React from 'react';
import './menu.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCalendarAlt, faEnvelope, faDoorOpen, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Logo from "../images/logo.png"

class Menu extends React.Component {
    logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    // userEvent=()=>{
    //     Axios.get('http://localhost:8080/api/calendarEvent/addEvents/getAll')
    // .then(response => {
    //     console.log(response.data.post, 'post')
    //     // this.setState({ data: response.data.post })

    // })
    // }



    render() {
        return (
            <div className="dashboard_page-container">
                <div className="menu">
                    <div className="logo"><Link to="/dashboard"><img src={Logo} /></Link></div>
                    <div className="sidebar-menu">
                        <ul>
                            <li>
                                <Link to="/dashboard">
                                    <FontAwesomeIcon
                                        icon={faDoorOpen}
                                        title="Dashboard"
                                        size="1x"
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link to='/inbox'>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        title="Inbox"
                                        size="10x"
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link to="/calendar">
                                    <FontAwesomeIcon
                                        icon={faCalendarAlt}
                                        title='Calendar'
                                        size="10x"
                                      
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link to="/settings">
                                    <FontAwesomeIcon
                                        title="Settings"
                                        icon={faCog}
                                        size="10x"
                                    />
                                </Link>
                            </li>

                            <li className="log_out" onClick={this.logout}>
                                <FontAwesomeIcon
                                    icon={faSignOutAlt}
                                    title='Log Out'
                                    size="2x"
                                    style={{ 'color': '#337ab7' }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default Menu
