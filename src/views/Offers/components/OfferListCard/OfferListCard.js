import React, {Component} from "react";
import queryString from 'query-string';
import {Link} from "react-router-dom";
import {myConfig} from "../../../../config";
import {Modal,Button} from 'react-materialize';

export default class OfferListCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            grabStatus:"",
            showModal:false
        }
    }
    // componentDidMount(){
    //     document.addEventListener('DOMContentLoaded', function() {
    //         var elems = document.querySelectorAll('.modal');
    //         var instances = M.Modal.init(elems, options);
    //     });
    // }

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
                        grabStatus:result.status,
                        showModal: true});
               })
        }
    }
    handleCloseModal = () => {
        this.setState({showModal: false});
    }

    render(){
        return (
            <>
                <div className="col s12 m4 no-left-padding">
                    <div className="card">
                        <div className="card-image">
                            <Link to={"/offers/"+this.props.id}>
                            <a><img src={this.props.image} className="responsive-img" /></a></Link>
                        </div>
                        <div className="card-content">
                            <span className="card-title truncate tooltipped" data-position="bottom" data-tooltip="Lorem Ipsum Dolor Sit Amet"><a href="offer.html">{this.props.name}</a></span>
                            <p>{this.props.desc}</p>
                            <div className="row top-margin">
                                <div className="col s3"><span className="populText">Popularity</span></div>
                                <div className="col s9">
                                    <div className="progress">
                                        <div className="determinate" style={{backgroundColor: "rgb(23, 43, 84)", width: this.props.PopularityBar
                                        }} />
                                    </div>
                                </div>
                                <div className="col s12 valign-wrapper top-margin" ><a className="btn waves-effect modal-trigger" href="#grabNow" onClick={() => this.handleGrab(this.props.id)} style={{backgroundColor: "rgb(23, 43, 84)"}}>Grab Now</a> <i className="material-icons favIcon">favorite_border</i></div>
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
        )
    }

}

