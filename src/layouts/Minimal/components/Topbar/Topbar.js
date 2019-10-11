import React, {Component} from "react";
import logo from './../../../../assets/images/aroodhi_logo.png'
import {Link} from "react-router-dom";

export default class Topbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: localStorage.getItem("token") || '',
        }
    }

    componentDidMount() {

    }
    handleLogout= () => {
        localStorage.removeItem("token")
        window.location.href = '/'

    }

    render() {


            return (<>
                <header>
                    <div className="row headBar no-bottom-margin">
                        <div className="container">
                            <div className="row no-bottom-margin valign-wrapper">
                                <div className="col s12 m6 center-on-small-only"><a href="#" className="valign-wrapper"><i
                                    className="material-icons">smartphone</i> &nbsp;<span>Get the App</span></a></div>
                                <div className="col s12 m6 right-align center-on-small-only"><a
                                    href="/home">Home</a><a onClick={this.handleLogout}
                                                              className="signup waves-effect modal-trigger">Logout</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="row homeBanner">
                        <div className="container">

                        </div>
                    </div>

                    <section className="container">&nbsp;</section>
                </header>
                <ul id="slide-out" class="sidenav">
                    <li><a class="subheader">User Name</a></li>
                    <li><div class="divider"></div></li>
                    <li><Link to="/dashboard"><i class="material-icons">dashboard</i> Dashboard</Link></li>

                    <li><Link to="/myoffers"><i class="material-icons">loyalty</i> My Offers</Link></li>
                    <li><div class="divider"></div></li>
                    <li><Link to="/profile"><i class="material-icons">perm_identity</i> My Profile</Link></li>
                    <li><a onClick={this.handleLogout}><i class="material-icons">power_settings_new</i> Logout</a></li>
                </ul>


            </>);



    }
}