import React, {Component} from "react";
export default class OffersGrabbed extends Component {
    render() {
        return (
            <>
                <div className="col s12 center-align top-margin">
                    <div className="col s6 m3 offset-m3">
                        <span className="bigText greyText">999</span><br />
                        <span className="greyText">OFFERS GRABBED</span>
                    </div>
                    <div className="col s6 m3">
                        <span className="bigText greyText">999</span><br />
                        <span className="greyText">QAR SAVED</span>
                    </div>
                </div>
            </>
        );
    }
}