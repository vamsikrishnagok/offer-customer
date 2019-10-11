import React, {Component} from "react";
import queryString from 'query-string';
import {Link} from "react-router-dom";
import {myConfig} from "../../config";

export default class RedeemedDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bill:"",
            billAmount:"",
            billID:"",
            category:"",
            claimedDate:"",
            description:"",
            image:"",
            offerName:"",
            redeemedAt:"",
            redeemedDate:"",
            selectedFile: null
        }
    }

    componentDidMount() {
        console.log(this.props)
        fetch(myConfig.apiBackendUrl + "customer/getRedeem/" + this.props.match.params.redeemID, {
            headers: {
                "Authorization": "Token " + localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({
                    bill: result.data.bill,
                    billAmount: result.data.billAmount,
                    billID: result.data.billID,
                    category: result.data.category,
                    claimedDate: result.data.claimedDate,
                    description: result.data.description,
                    image: result.data.image,
                    offerName: result.data.offerName,
                    redeemedAt: result.data.redeemedAt,
                    redeemedDate: result.data.redeemedDate
                })
            })


    }

    handleChange = (event) => {
        const formData = new FormData()
        console.log(this.state.selectedFile)
        formData.append("bill", event.target.files[0])
        formData.append("id", this.props.id)
        fetch(myConfig.apiBackendUrl + "api/uploadBill/", {
            method: 'post',
            headers: {
                "Authorization": "Token " + localStorage.getItem("token")
            },
            body: formData
        }).then(function (res) {
            if (res.ok) {
                alert("Bill Uploaded ");
            } else if (res.status == 401) {
                alert("Oops! ");
            }
        }, function (e) {
            alert("Error submitting form!");
        });
    }

    render() {

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="col s12 m6">
                                <a href="#" data-target="slide-out" className="btn-floating sidenav-trigger" style={{backgroundColor: "rgb(23, 43, 84)"}}><i className="material-icons">menu</i></a>

                            </div>
                        </div>
                        {/*<div class="col s12">
                            <a href="#" data-target="slide-out" class="sidenav-trigger btn-floating"><i class="material-icons">menu</i></a>
                            <nav class="breadCrumb z-depth-0">
                                <div class="nav-wrapper">
                                    <div class="col s12">
                                        <a href="index.html" class="breadcrumb">Home</a>
                                        <a href="#!" class="breadcrumb">Offers</a>
                                    </div>
                                </div>
                            </nav>
                        </div>*/}
                        <div className="col s12">
                            <h2 className="no-bottom-margin">{this.state.offerName}</h2>
                            <h4 className="headSub">{this.state.category}</h4>
                            <div className="col s12 no-left-padding" style={{position: 'relative'}}>
                                <img src={myConfig.apiBackendUrl+this.state.image} className="responsive-img" width={"100%"}/>
                                <div className="col s12 offerPicText">{this.state.offerName}
                                </div>
                            </div>
                            <div className="col s12 no-left-padding">
                                {this.state.description}
                            </div>
                            <div className="col s12 no-left-padding">
                                <h3><span className="greyText">Redeemed at:</span>{this.state.redeemedAt}</h3>
                                <h3><span className="greyText">On:</span> {this.state.redeemedDate}</h3>
                                <h3><span className="greyText">Bill ID:</span> {this.state.billID}</h3>
                                <h3><span className="greyText">Bill Amount:</span> {this.state.billAmount}</h3>
                                <h3><span className="greyText">Bill:</span> Please upload the bill.</h3>
                                <form action="#">
                                    <div className="file-field input-field">
                                        <div className="btn" style={{backgroundColor: "rgb(23, 43, 84)"}}>
                                            <span>Bill</span>
                                            <input type="file"/>
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

