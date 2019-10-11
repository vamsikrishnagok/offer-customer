import React, {Component} from "react";
import {Redirect, Link} from 'react-router-dom';
import {myConfig} from './../../config'

export default class SignUp extends Component {
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
            email:"",
            fullname:"",
            mobile:""

        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitForm(e){
        e.preventDefault();
        fetch(myConfig.apiBackendUrl +'customer/customer/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": this.state.username,
                "password":this.state.password,
                "email":this.state.email,
                "fullname":this.state.fullname,
                "mobile":this.state.mobile
            })
        })
            .then(res => {
                if (res.status == 400)
                {
                    console.log('error')
                }
                if (res.status == 200)
                {
                    return res.json()
                }
            })
            .then(json => {


                this.setState({
                    loggedIn: true
                });

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
                            <h5 className="indigo-text">Enter details to register</h5>
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
                                                <input className="validate" type="text" id="username" name="username"
                                                       value={this.state.username}
                                                       onChange={this.onChange}/>
                                                <label htmlFor="username" style={{color: "#172b54"}}>Enter your
                                                    username</label>
                                            </div>
                                            <div className="input-field col s12 ">
                                                <input className="validate" type="text" id="fullname" name="fullname"
                                                       value={this.state.fullname}
                                                       onChange={this.onChange}/>
                                                <label htmlFor="fullname" style={{color: "#172b54"}}>Enter your
                                                    fullname</label>
                                            </div>
                                            <div className="input-field col s12 ">
                                                <input className="validate" type="text" id="mobile" name="mobile"
                                                       value={this.state.mobile}
                                                       onChange={this.onChange}/>
                                                <label htmlFor="mobile" style={{color: "#172b54"}}>Enter your
                                                    mobile</label>
                                            </div>
                                            <div className="input-field col s12 ">
                                                <input className="validate" type="text" id="email" name="email"
                                                       value={this.state.email}
                                                       onChange={this.onChange}/>
                                                <label htmlFor="email" style={{color: "#172b54"}}>Enter your
                                                    email</label>
                                            </div>
                                            <div className="input-field col s12 ">
                                                <input className="validate" type="password" id="password" name="password"
                                                       value={this.state.password}
                                                       onChange={this.onChange}/>
                                                <label htmlFor="password" style={{color: "#172b54"}}>Enter your
                                                    password</label>
                                            </div>


                                        </div>

                                        <br/>
                                        <center>
                                            <div className="row">
                                                <button type="submit" name="btn_login"
                                                        className="col s12 btn btn-large waves-effect indigo">Register
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