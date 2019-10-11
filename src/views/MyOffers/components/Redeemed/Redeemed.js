import React, {Component} from "react";
import queryString from 'query-string';
import {Link} from "react-router-dom";
import {myConfig} from "../../../../config";

export default class Redeemed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null
        }
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
        let bill=""
        console.log(this.props.bill)
        if (this.props.bill !== "" ){
            bill = (<p><span className="greyText">Bill:</span> <a href={myConfig.apiBackendUrl+"media/"+this.props.bill} download>Download</a></p>)
        }

        return (
            <>
                <div className="col s12 m4 no-left-padding">
                    <div className="card">
                        <div className="card-image">
                            <a href="offer.html"><img src={this.props.image} className="responsive-img"/></a>
                        </div>
                        <div className="card-content">
                            <h3 className="greyText truncate tooltipped no-top-margin" data-position="bottom"
                                data-tooltip="Lorem Ipsum Dolor Sit Amet"><a href="offer.html">{this.props.name}</a>
                            </h3>
                            <p>{this.props.desc}</p>
                            <div className="divider top-margin bottom-margin"/>
                            <p><span className="greyText">Available at: </span>{this.props.retailer}</p>
                            <p><span className="greyText">{this.props.category}</span></p>
                            <p><span className="greyText">Valid till:</span>{this.props.expDate}</p>
                            <p><span className="greyText">Grabbed on:</span> {this.props.claimDate}</p>
                            {bill}
                        </div>
                        <div className="card-action">

                            <label htmlFor={this.props.id} className="btn btn-sm" style={{backgroundColor: "rgb(23, 43, 84)"}}>Upload Bill</label>
                            <input id={this.props.id} style={{visibility: "hidden"}} type="file"
                                   onChange={event => this.handleChange(event)} name="selectedFile"/> <Link to={"/redeem/"+this.props.id} className="waves-effect modal-trigger" style={{color: "rgb(23, 43, 84)"}}>Details</Link>
                        </div>
                    </div>
                </div>


            </>
        )
    }

}

