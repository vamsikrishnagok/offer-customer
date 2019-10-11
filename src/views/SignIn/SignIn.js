import React, {Component} from "react";
import {Redirect, Link} from 'react-router-dom';
import {myConfig} from './../../config'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            username: '',
            password: '',
            loggedIn: loggedIn
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        fetch(myConfig.apiBackendUrl + 'core/CustomerLogin/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": this.state.username,
                "password": this.state.password
            })
        })
            .then(res => {
                if (res.status == 400) {
                    console.log('error')
                    return res.json()
                }
                if (res.status == 200) {
                    return res.json()
                }
            })
            .then(json => {
                if( 'Error' in json){
                    alert("Invalid username and password")
                }
                else{
                    localStorage.setItem('token', json.token);
                    this.setState({
                        loggedIn: true
                    });
                }

            });
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/"/>
        }
        return (
            <>
                <div>
                    <div className="section"/>
                    <main>
                        <center>

                            <div className="section"/>
                            <h5 className="indigo-text">Please, login into your account</h5>
                            <div className="section"/>
                            <div className="container">
                                <div className="z-depth-1 grey lighten-4 row" style={{
                                    display: 'inline-block',
                                    padding: '32px 48px 0px 48px',
                                    border: '1px solid #EEE'
                                }}>
                                    <form className="col s12" onSubmit={this.submitForm}>
                                        <div className="row">
                                            <div className="col s12">
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12 ">
                                                <input className="validate" type="email" id="email" name="username"
                                                       value={this.state.username}
                                                       onChange={this.onChange}/>
                                                <label htmlFor="email" style={{color: "#172b54"}}>Enter your
                                                    email</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input className="validate" type="password" name="password"
                                                       value={this.state.password}
                                                       onChange={this.onChange}/>
                                                <label htmlFor="password">Enter your password</label>
                                            </div>
                                            <label style={{float: 'right'}}>
                                                <a className="pink-text" href="#!"><b>Forgot Password?</b></a>
                                            </label>
                                        </div>
                                        <br/>
                                        <center>
                                            <div className="row">
                                                <button type="submit" name="btn_login"
                                                        className="col s12 btn btn-large waves-effect indigo">Login
                                                </button>
                                            </div>
                                        </center>
                                    </form>
                                </div>
                            </div>
                        </center>
                        <div className="section"/>
                        <div className="section"/>
                    </main>
                </div>
            </>
        );
    }
}