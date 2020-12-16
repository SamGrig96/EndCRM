import React from 'react';
import {  Link } from "react-router-dom";
import '../../App.css';
import logo from '../images/Vector Smart Object.png'
import  RoundedRectangle  from "../images/Rounded Rectangle 4.png"
import Image from "../images/image.png"
import VectorSmart3 from "../images/Vector Smart Object3.png"
import VectorSmart2 from"../images/Vector Smart Object-2.png"
import VectorSmartNew3 from "../images/Vector Smart Object-3.png"
import VectorSmart from "../images/Vector Smart Object.png"
import Layer from '../images/Layer 1.png'
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"
import Google from "../images/google+.png"
import Linkedin from "../images/linkedn.png"
import Instagrem from "../images/instagram.png"
import Be from "../images/be.png"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            remmember: false
        }
    }


    componentDidMount() {
        if (localStorage.getItem('remmember')) {
            this.setState({ remmember: true })
        }
    }


    render() {


        return (
            <div className="wrapperr">
                <nav className="menu">

                    <div className="logo"><img src={logo}  /></div>
                    <ul className="nav-links">
                        <li> <Link to="/products">Products</Link></li>
                        <li> <Link to="/resource">Resource</Link></li>
                        <li> <Link to="/blog">Blog</Link></li>
                        <li> <Link to="/support">Support</Link></li>
                        <li> <Link to="/pricing">Pricing</Link></li>
                        {this.state.remmember ? null : <li><Link to="/signin">Sign In</Link></li>}
                        <li><a className="last" href="#">START FREE</a></li>

                    </ul>
                </nav>

                <article className="main ">
                    <p className="main-text">We've made a simple & visual <br />CRM tool</p>
                    <p className="content-text">Easy, Simple and Slick system that does meet the needs of the users
                        business!
                        <br />
                        USP = no more function/features in your system that your business doesn't use!</p>

                    <button className="button"> <Link to='/signin'>Get Started</Link></button>
                    <div><img className="main-image" src={RoundedRectangle } /></div>
                    <p className="main-text-2">Trusted and loved by thousands of businesses</p>
                    <p className="lorom-ispum">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                        <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <div><img className="image-1" src={Image} /></div>

                    <p className="main-text-3">What makes CRM different?</p>

                    <div className="index-gallery">
                        <div>
                            <img src={VectorSmart3} />
                            <p className="item-text">Reduce tool fatigue</p>
                            <p className="item-content-text">Consolidate multiple growth tools in one<br /> powerful,
                                integrated platform. Manage<br />everything in one place.</p>
                        </div>

                        <div>
                            <img src={VectorSmart2} />
                            <p className="item-text">Perfect for SaaS businesses</p>
                            <p className="item-content-text">Hundreds of features to drive more trial<br />signups, enage
                                users, and delight<br />customers to drive loyalty</p>
                        </div>

                        <div>
                            <img src={VectorSmartNew3} />
                            <p className="item-text">Huge Value, Tine Price</p>
                            <p className="item-content-text">Every dollar you spend on tooling is a <br /> dollar you
                                can't spend on growing.<br />Hence the fair place</p>
                        </div>
                    </div>
                </article>


                <div className="create-account-container">
                    <div className="account-image"><img src={Layer} /></div>
                    <div className="create-account">
                        <p className="account-text">Act now.Not Tomorrow.</p>

                        <p className="account-content">No waiting.No nasties. No training needed․ <br />Lorem Ipsum is
                            simply dummy text of the printing <br /> and typesetting text of the industry.<br /> Lorem
                            Ipsum has been the industry's <br />standard dummy text ever since the 1500s,</p>

                        <div className="account-button">
                            <button>Create Free Account</button>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div><img src={VectorSmart} /></div>


                    <p className="letter-direction">Copyright 2019 Made with <span
                        className="letter-color"> L </span> by iLeva.All Rights Reserved</p>

                    <div className="social-links">
                        <a href="www.facebook.com"><img src={Facebook} alt="" /></a>
                        <a href="www.facebook.com"><img src={Twitter} alt="" /></a>
                        <a href="www.facebook.com"><img src={Google} alt="" /></a>
                        <a href="www.facebook.com"><img src={Linkedin} alt="" /></a>
                        <a href="www.facebook.com"><img src={Instagrem} alt="" /></a>
                        <a href="www.facebook.com"><img src={Be} alt="" /></a>

                    </div>

                </footer>

            </div>


        );
    }
}


export default Home;
