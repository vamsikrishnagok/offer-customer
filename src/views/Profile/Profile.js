import React, {Component} from "react";
import {myConfig} from "../../config";
import {Modal, Button} from 'react-materialize';
import M from "materialize-css";

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            mobile: "",
            email: "",
            gender: "",
            dob: "",
            address: "",
            memberSince: "",

        }
    }

    componentDidMount() {
        fetch(myConfig.apiBackendUrl + "customer/customer/", {
            headers: {
                "Authorization": "Token " + localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({
                    username: result.data.fields.username,
                    mobile: result.data.fields.mobile_number,
                    email: result.data.fields.email,
                    gender: result.data.fields.gender,
                    dob: result.data.fields.date_of_birth,
                    address: result.data.fields.address,
                    memberSince: result.data.fields.created_date,
                })

                return "Worling"
            })

    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="col s12 m6">
                        <a href="#" data-target="slide-out" className="btn-floating sidenav-trigger"><i
                            className="material-icons" style={{backgroundColor: "rgb(23, 43, 84)"}}>menu</i></a>

                    </div>
                    <div className="row">
                        <div className="col s12 m6">
                            <h2>{this.state.username}</h2>
                            {/*<h4 class="headSub">Explore offers from the top restaurants and cafes.</h4>*/}
                            <div className="col s12 m6">
                                <h3 className="greyText no-bottom-margin">Registered Mobile Number:</h3>
                            </div>
                            <div className="col s12 m6">
                                <h3 className="no-bottom-margin">{this.state.mobile}</h3>
                            </div>
                            <div className="col s12 m6">
                                <h3 className="greyText no-bottom-margin">Registered Email Id:</h3>
                            </div>
                            <div className="col s12 m6">
                                <h3 className="no-bottom-margin">{this.state.email}</h3>
                            </div>
                            <div className="col s12 m6">
                                <h3 className="greyText no-bottom-margin">Gender:</h3>
                            </div>
                            <div className="col s12 m6">
                                <h3 className="no-bottom-margin">{this.state.gender}</h3>
                            </div>
                            <div className="col s12 m6">
                                <h3 className="greyText no-bottom-margin">Date of Birth:</h3>
                            </div>
                            <div className="col s12 m6">
                                <h3 className="no-bottom-margin">{this.state.dob}</h3>
                            </div>
                            <div className="col s12 m6">
                                <h3 className="greyText no-bottom-margin">Address:</h3>
                            </div>
                            <div className="col s12 m6">
                                <h3 className="no-bottom-margin">{this.state.address}
                                </h3>
                            </div>
                            <div className="col s12 top-margin bottom-margin">
                                <div className="divider"/>
                            </div>
                            <div className="col s12">
                                <a href="customer-profile-add.html" className="btn valign-wrapper" style={{backgroundColor: "rgb(23, 43, 84)"}}><i
                                    className="material-icons">edit</i> &nbsp; Edit</a>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <h2>Statistics</h2>
                            <div className="col s12">
                                <h3 className="no-bottom-margin"><span
                                    className="greyText">Member since:</span><br/>{this.state.memberSince}
                                </h3>
                            </div>
                            <div className="col s12 m6">
                                <h3 className="no-bottom-margin"><span
                                    className="greyText">Total Offers Redeemed:</span><br/>10</h3>
                            </div>
                            <div className="col s12 m6">
                                <h3 className="no-bottom-margin"><span
                                    className="greyText">Total Offers Grabbed:</span><br/>15
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
                <div>

                </div>


            </>
        );
    }
}