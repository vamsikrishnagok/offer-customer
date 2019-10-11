import React, {Component} from "react";
import queryString from 'query-string';
import {Link} from "react-router-dom";
import {myConfig} from "../../../../config";
import { Modal, Button } from 'react-materialize';
import M from "materialize-css";
export default class Claimed extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return (
            <>
                <div className="col s12 m4 no-left-padding">
                    <div className="card">
                        <div className="card-image">
                            <a href="offer.html"><img src={this.props.image} className="responsive-img" /></a>
                        </div>
                        <div className="card-content">
                            <h3 className="greyText truncate tooltipped no-top-margin" data-position="bottom" data-tooltip="Lorem Ipsum Dolor Sit Amet"><a href="offer.html">{this.props.name}</a></h3>
                            <p>{this.props.desc}</p>
                            <div className="divider top-margin bottom-margin" />
                            <p><span className="greyText">Available at: </span>{this.props.retailer}</p>
                            <p><span className="greyText">{this.props.category}</span></p>
                            <p><span className="greyText">Valid till:</span>{this.props.expDate}</p>
                            <p><span className="greyText">Grabbed on:</span> {this.props.claimDate}</p>
                        </div>
                        <div className="card-action">
                            <a className="waves-effect modal-trigger" data-target={this.props.id} style={{color: "rgb(23, 43, 84)"}}>Redeem Now</a>
                        </div>

                    </div>
                </div>

                <Modal header="QR CODE" id={this.props.id}>
                    <img src={this.props.qrcode} />
                    <h2>Code:</h2><p>{this.props.qr}</p>
                </Modal>


            </>
        )
    }

}

