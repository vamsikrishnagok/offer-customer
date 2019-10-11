import React, {Component} from "react";
import queryString from 'query-string';
import {myConfig} from './../../../src/config'
import {Modal,Button} from 'react-materialize';
import {Link} from "react-router-dom";
export default class OfferDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            retailer: "",
            offerName: "",
            offerDetails: "",
            file: "",
            createdAt: "",
            expireAt: "",
            grabStatus:"",
            showModal:false

        }
    }

    componentDidMount() {

        console.log(this.props)
        fetch(myConfig.apiBackendUrl + "customer/customer/offer/" + this.props.match.params.offerID, {
            headers: {
                "Authorization": "Token " + localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({
                    category: result.data.category,
                    retailer: result.data.retailer,
                    offerName: result.data.offer_name,
                    offerDetails: result.data.offer_details,
                    file: result.data.file,
                    createdAt: result.data.created_date,
                    expireAt: result.data.expiry_date

                })
            })
    }

    handleGrab = () => {

        if (localStorage.getItem("token") == null || localStorage.getItem("token") == "") {
            window.location.href = '/login';
        }
        else {
            fetch(myConfig.apiBackendUrl + "customer/claimOffer/" + this.props.match.params.offerID, {
                method: 'post',
                headers: {
                    "Authorization": "Token " + localStorage.getItem("token")
                }
            })
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        grabStatus:result.status,
                        showModal: true});

                })
        }
    }
    handleCloseModal = () => {
        this.setState({showModal: false});
    }

    render() {
        console.log(this.state)


        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h2 className="no-bottom-margin">{this.state.offerName}</h2>
                            <h4 className="headSub">{this.state.category}</h4>
                            <div className="col s12 no-left-padding" style={{position: 'relative'}}>
                                <img src={myConfig.apiBackendUrl + this.state.file} className="responsive-img"
                                     style={{width: "100%"}}/>
                                <div className="col s12 offerPicText">{this.state.offerName}</div>
                            </div>
                            <div className="col s12 m8 no-left-padding">
                                <h3><span className="greyText">This offer is available at:</span> {this.state.retailer}
                                </h3>
                                <p>{this.state.offerDetails}</p>
                                <h3><span className="greyText">Offer available till</span> {this.state.expireAt}</h3>
                                <div className="col s12 m2"><span className="greyText">Popularity</span></div>
                                <div className="col s9 m6">
                                    <div className="progress">
                                        <div className="determinate" style={{backgroundColor: "rgb(23, 43, 84)", width: '85%'}} >Popularity</div>
                                    </div>
                                </div>
                                <div className="col s3 m4"><span className="greyText">85%</span></div>
                                <div className="col s12 valign-wrapper top-margin"><a
                                    className="btn waves-effect modal-trigger" href="#grabNow"
                                    onClick={this.handleGrab} style={{backgroundColor: "rgb(23, 43, 84)"}} >Grab Now</a> <i
                                    className="material-icons favIcon">favorite_border</i></div>
                                <div className="divider"/>
                            </div>

                        </div>

                    </div>
                </div>
                <Modal header="Status"
                       id={this.props.id}
                       open={this.state.showModal}
                       options={{
                           dismissible: false}
                       }
                       actions={null} >
                    <div>
                        <h2 className="center-align no-bottom-margin">{this.state.grabStatus}</h2>
                        <h4 className="headSub center-align">You can see all the offers that you've grabbed in <Link to={"/myoffers"}>My Offers</Link>. </h4>
                        <div className="divider" />
                        <p className="helper-text greyText center-align">Offer disclaimer text here</p>
                        <div className="input-field col s4"><button className="btn waves-effect" type="button" style={{backgroundColor: "rgb(23, 43, 84)"}} onClick={this.handleCloseModal}><span className="show-on-small hide-on-med-and-up"><i className="material-icons">send</i></span><span className="hide-on-small-only">Close</span></button></div>
                    </div>
                </Modal>


            </>
        );
    }
}
