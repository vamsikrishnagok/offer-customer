import React, {Component} from "react";
import './../../assets/css/main.css'
import {Topbar,Footer} from './components'

export default class Minimal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<>
                <Topbar/>
                {this.props.children}
                <Footer/>
                <div id="grabNow" className="modal bottom-sheet">
                    <div className="modal-content">
                        <h2 className="center-align no-bottom-margin">Working</h2>
                        <h4 className="headSub center-align">You can see all the offers that you've grabbed in <a
                            className="waves-effect waves-teal btn-flat" href="#">My Offers</a>. </h4>
                        <p className="greytext center-align">OR</p>
                        <p className="center-align">You can <a className="waves-effect waves-teal btn-flat teal-text"
                                                               href="#">Redeem</a> this offer right away!</p>
                        <div className="divider"/>
                        <p className="helper-text greyText center-align">Offer disclaimer text here</p>
                    </div>
                </div>
            </>
        );
    }
}