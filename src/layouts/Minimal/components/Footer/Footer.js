import React, {Component} from "react";
import './../../../../assets/css/main.css'
import footer_logo from './../../../../assets/images/white-for-web.png'

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <>
                <footer>
                    <div className="container">
                        <div className="row top-margin no-bottom-margin valign-wrapper">
                            <div className="col s12 m6 center-on-small-only"><img src={footer_logo} className="responsive-img" /></div>
                            <div className="col s12 m6 right-align">

                            </div>
                        </div>
                        <div className="divider" />
                        <div className="row top-margin center-on-small-only">
                            <div className="col s6 m3">
                                <a href="#">About Us</a><br />
                                <a href="#">Careers</a><br />
                                <a href="#">Contact Us</a><br />
                            </div>
                            <div className="col s6 m3">
                                <a href="#">About Us</a><br />
                                <a href="#">Careers</a><br />
                                <a href="#">Contact Us</a><br />
                            </div>
                            <div className="col s6 m3">
                                <a href="#">About Us</a><br />
                                <a href="#">Careers</a><br />
                                <a href="#">Contact Us</a><br />
                            </div>
                            <div className="col s6 m3">
                                <a href="#">About Us</a><br />
                                <a href="#">Careers</a><br />
                                <a href="#">Contact Us</a><br />
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="row top-margin no-bottom-margin valign-wrapper">
                            <div className="col s12 m4 center-on-small-only">
                                <a href="#">Privacy Policy</a>&nbsp;&nbsp;&nbsp;<a href="#">Terms</a>&nbsp;&nbsp;&nbsp;<a href="#">Site Map</a>
                            </div>
                            <div className="col s12 m4 center-on-small-only">
                                © 2019 All Rights Reserved
                            </div>
                            <div className="col s12 m4 center-on-small-only">
                                <a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a>&nbsp;&nbsp;&nbsp;<a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </div>
                </footer>

            </>
        )
    }

}