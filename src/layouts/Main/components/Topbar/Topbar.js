import React, {Component} from "react";
import logo from './../../../../assets/images/aroodhi_logo.png'
import {Link} from "react-router-dom";

export default class Topbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: localStorage.getItem("token") || '',
            SearchValue:''
        }
    }
    handleChange = (event) => {
        this.setState({
            SearchValue:event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()

        window.location = '/search?q='+this.state.SearchValue;
    }

    componentDidMount() {
    }

    handleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = '/'
    }

    render() {

        if (localStorage.getItem("token") == null || localStorage.getItem("token") == "") {
            return (<>
                <header>
                    <div className="row headBar no-bottom-margin">
                        <div className="container">
                            <div className="row no-bottom-margin valign-wrapper">
                                <div className="col s12 m6 center-on-small-only"><a href="#" className="valign-wrapper"><i
                                    className="material-icons">smartphone</i> &nbsp;<span>Get the App</span></a></div>
                                <div className="col s12 m6 right-align center-on-small-only"><Link
                                    to="login">Login</Link><Link to={"/register"}
                                                                 className="signup waves-effect modal-trigger">Create
                                    Account</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="row homeBanner">
                        <div className="container">
                            <div className="row">
                                <div className="col s12 m6 offset-m3 center-align"><Link to={"/home"}><img src={logo}
                                                                                                           className="responsive-img"/></Link>
                                </div>
                                <div className="col s12 m6 offset-m3 center-align bannerText">Find the best offer for
                                    you
                                </div>
                                <div className="col s12 m10 offset-m1 center-align">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="input-field col s10">
                                            <i className="material-icons prefix">search</i>
                                            <input name="searchkeyword" id="searchkeyword" type="text" value={this.state.SearchValue} onChange={(event)=>this.handleChange(event)}/>
                                            <label for="searchkeyword" className="truncate">Search for offers from
                                                restaurants or electronics or car accessories...</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <button className="btn waves-effect" type="submit"
                                                    style={{backgroundColor: "#172b54"}}><span
                                                className="show-on-small hide-on-med-and-up"><i
                                                className="material-icons">search</i></span><span
                                                className="hide-on-small-only">Search</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="container">&nbsp;</section>
                </header>


            </>);
        }
        else {
            return (<>
                <header>
                    <div className="row headBar no-bottom-margin">
                        <div className="container">
                            <div className="row no-bottom-margin valign-wrapper">
                                <div className="col s12 m6 center-on-small-only"><a href="#" className="valign-wrapper"><i
                                    className="material-icons">smartphone</i> &nbsp;<span>Get the App</span></a></div>


                                <div className="col s12 m6 right-align center-on-small-only"><a
                                    onClick={this.handleLogout}>Logout</a></div>
                                <div><a href="/dashboard"
                                        className="signup waves-effect modal-trigger">Dashboard </a></div>
                            </div>
                        </div>
                    </div>
                    <div className="row homeBanner">
                        <div className="container">
                            <div className="row">
                                <div className="col s12 m6 offset-m3 center-align"><Link to={"/home"}><img src={logo}
                                                                                                             className="responsive-img"/></Link>
                                </div>
                                <div className="col s12 m6 offset-m3 center-align bannerText">Find the best offer for
                                    you
                                </div>
                                <div className="col s12 m10 offset-m1 center-align">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="input-field col s10">
                                            <i className="material-icons prefix">search</i>
                                            <input name="searchkeyword" id="searchkeyword" type="text" value={this.state.SearchValue} onChange={(event)=>this.handleChange(event)}/>
                                            <label for="searchkeyword" className="truncate">Search for offers from
                                                restaurants or electronics or car accessories...</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <button className="btn waves-effect" type="submit"
                                                    style={{backgroundColor: "#172b54"}}><span
                                                className="show-on-small hide-on-med-and-up"><i
                                                className="material-icons">search</i></span><span
                                                className="hide-on-small-only">Search</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="container">&nbsp;</section>
                </header>


            </>);
        }


    }
}