import React, {Component} from "react";
import $ from 'jquery';
import {myConfig} from "../../config";

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: "",
            latestOfferGrabbed: "",
            latestOfferRedeemed: "",
        }
    }
    componentDidMount() {
        fetch(myConfig.apiBackendUrl + "customer/dashboard/", {
            headers: {
                "Authorization": "Token " + localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(result => {
                    let latestClaimed = "";
                    let latestRedeemed = "";

                    if (result.data.LatestClaims.length == 0) {
                        latestClaimed = <h5>No claimed offer yet</h5>
                    }
                    else {
                        latestClaimed = result.data.LatestClaims.map((res, _) => {
                            return (<div className="card">
                                <div className="card-content">
                                    <span className="card-title">Latest Offer Grabbed</span>
                                    <h3 className="greyText truncate tooltipped" data-position="bottom"
                                        data-tooltip={res.offer__offer_name}>{res.offer__offer_name} </h3>
                                    <p className="truncate tooltipped" data-position="bottom"
                                       data-tooltip={res.offer__offer_name}>{res.offer__offer_name} </p>
                                    <div className="divider top-margin bottom-margin"/>
                                    <p><span className="greyText">Available at: </span>Shop Name</p>
                                    <p><span className="greyText">Category Name</span></p>
                                    <p><span className="greyText">Valid till:</span> 28/8/2019</p>
                                </div>
                                <div className="card-action">
                                    <a href="customer-redeem.html" className="waves-effect"
                                       style={{color: "rgb(23, 43, 84)"}}>Redeem Now</a>
                                    <a href="customer-offers.html" className="waves-effect"
                                       style={{color: "rgb(23, 43, 84)"}}>All grabbed
                                        offers</a>
                                </div>
                            </div>)
                            //return  <Grid item xs={4}><Card name={res.offer__offer_name} desc={res.offer__offer_details} id={res.id} image={myConfig.apiBackendUrl+"media/"+res.offer__offer_file} url={`/customer/offer/${res.offer_id}`} qrcode={myConfig.apiBackendUrl+"media/"+res.coupon_qr}/></Grid>
                        })[0]
                    }
                    if (result.data.LatestRedeems.length == 0) {
                        latestRedeemed = <h5>No Redeemed offer yet</h5>
                    }
                    else {
                        latestRedeemed = result.data.LatestRedeems.map((res, _) => {

                            return (<div className="card">
                                <div className="card-content">
                                    <span className="card-title">Latest Offer Redeemed</span>
                                    <h3 className="greyText truncate tooltipped" data-position="bottom"
                                        data-tooltip={res.offer__offer_name}>{res.offer__offer_name}</h3>
                                    <p className="truncate tooltipped" data-position="bottom"
                                       data-tooltip={res.offer__offer_name}>{res.offer__offer_name}.</p>
                                    <div className="divider top-margin bottom-margin"/>
                                    <p><span className="greyText">Redeemed at: </span>Shop Name</p>
                                    <p><span className="greyText">Category Name</span></p>
                                    <p><span className="greyText">Redeemed On:</span> 05/6/2019</p>
                                </div>
                                <div className="card-action">
                                    <a href="customer-redeem-details.html" className="waves-effect"
                                       style={{color: "rgb(23, 43, 84)"}}>Upload
                                        Bill</a>
                                    <a href="customer-redeemed-offers.html" className="waves-effect"
                                       style={{color: "rgb(23, 43, 84)"}}>All
                                        redeemed offers</a>
                                </div>
                            </div>)
                            //  return  <Grid item xs={4}><Card name={res.offer__offer_name} desc={res.offer__offer_details} id={res.id} image={myConfig.apiBackendUrl+"media/"+res.offer__offer_file} url={`/customer/offer/${res.offer_id}`} qrcode={myConfig.apiBackendUrl+"media/"+res.coupon_qr}/></Grid>
                        })[0]
                    }

                    this.setState({
                        count: Object.keys(result.counts).map(igKey => {
                            return (
                                <></>
                            );
                        }),
                        latestOfferGrabbed: latestClaimed,
                        latestOfferRedeemed: latestRedeemed
                    })
                }
            )
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <a href="#" data-target="slide-out" className="btn-floating sidenav-trigger"
                               style={{backgroundColor: "rgb(23, 43, 84)"}}><i
                                className="material-icons">menu</i></a>
                        </div>
                        <div className="col s12">
                            <h2>Dashboard</h2>
                            {/*<h4 class="headSub">Explore offers from the top restaurants and cafes.</h4>*/}
                            <div className="col s12 m6 no-left-padding">
                                {this.state.latestOfferGrabbed}
                            </div>
                            <div className="col s12 m6 no-left-padding">
                                {this.state.latestOfferRedeemed}
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