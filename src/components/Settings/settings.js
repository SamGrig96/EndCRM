import React, {Component} from 'react';
import  "./settings.css"
import  Menu from "../menu/menu"
import SettingsPic from "../images/settings.png"

class Settings extends Component {
        render() {
            return (
            <div>
                <Menu/>
                <div className ="settings">
                    <img src={SettingsPic}/>
                    </div>
            </div>
        );
    }
}

export default Settings;
