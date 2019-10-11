import React, {Component} from "react";
import {myConfig} from "../../../../../config";
import {Modal,Button} from 'react-materialize';
import {Link} from "react-router-dom";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            grabStatus:""
        };

    }

    handleGrab = (e) => {
        console.log(e)

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
                    console.log(result)

                    this.setState({
                        grabStatus:result.status,
                        showModal: true});
                    // this.props.dialog(result.status)
                    // setDialog(result.status)
                    // setOpen(true);

                })
        }

    }
    handleCloseModal = () => {
        this.setState({showModal: false});
    }

    render() {
        return (
            <>
                <div className="col s12 m6 no-left-padding center-on-small-only">
                    <Link to={this.props.url}><img src={this.props.image} className="responsive-img z-depth-1"/></Link>
                </div>
                <div className="show-on-small hide-on-med-and-up">&nbsp;</div>
                <div className="col s12 m6 featOffers">
                    <h3 className="no-top-margin no-bottom-margin"><a href="#">{this.props.name}</a>
                    </h3>
                    <p>{this.props.desc}</p>
                    <div className="col s3 no-left-padding"><span className="populText">Popularity</span></div>
                    <div className="col s9">
                        <div className="progress">
                            <div className="determinate" style={{width: this.props.PopularityBar, backgroundColor: "rgb(23, 43, 84)"}}/>
                        </div>
                    </div>
                    <div className="col s12 valign-wrapper no-left-padding"><a
                        className="btn waves-effect modal-trigger"
                        style={{backgroundColor: "rgb(23, 43, 84)"}} onClick={(e) => this.handleGrab(e, this.props.id)}
                        >Grab Now</a> <i
                        className="material-icons favIcon">favorite_border</i></div>
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
        )
    }
}