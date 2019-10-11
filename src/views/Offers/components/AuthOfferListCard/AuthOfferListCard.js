import React, {Component} from "react";
import queryString from 'query-string';
import {Link} from "react-router-dom";
import {myConfig} from "../../../../config";
import {Modal, Button} from 'react-materialize';

export default class AuthOfferListCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grabStatus: "",
            showModal: false
        }
    }

    handleGrab = () => {

        if (localStorage.getItem("token") == null || localStorage.getItem("token") == "") {
            window.location.href = '/login';
        }
        else {

            fetch(myConfig.apiBackendUrl + "customer/claimOffer/" + this.props.id, {
                method: 'post',
                headers: {
                    "Authorization": "Token " + localStorage.getItem("token")
                }
            })
                .then(res => res.json())
                .then(result => {
                    console.log(this.props)
                    this.setState({
                        grabStatus: result.status,
                        showModal: true
                    });
                })
        }
    }
    handleCloseModal = () => {
        this.setState({showModal: false});
    }

    render() {
        return (
            <>
                <div className="col s12 m4 no-left-padding">
                    <div className="card">
                        <div className="card-image">
                            <Link to={"/offers/" + this.props.id}>
                                <a><img src={this.props.image} className="responsive-img"/></a></Link>
                        </div>
                        <div className="card-content">
                            <span className="card-title truncate tooltipped" data-position="bottom"
                                  data-tooltip="Lorem Ipsum Dolor Sit Amet"><a
                                href="offer.html">{this.props.name}</a></span>
                            <p>{this.props.desc}</p>
                            <div className="row top-margin">
                                <div className="col s3"><span className="populText">Popularity</span></div>
                                <div className="col s9">
                                    <div className="progress">
                                        <div className="determinate"
                                             style={{backgroundColor: "rgb(23, 43, 84)", width: '85%'}}/>
                                    </div>
                                </div>
                                <p>This offer is already Grabbed go to <Link to={"/myoffers"}>my offers</Link></p>
                        </div>
                    </div>
                </div>


</div>
            </>

        )
    }

}

