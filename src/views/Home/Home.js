import React, {Component} from "react";
import {FeaturedOffers, Categories, PopularOffers, GetApp, OffersGrabbed} from './components'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <FeaturedOffers/>
                        <Categories/>

                    </div>
                    <div className="row">
                        <PopularOffers/>
                    </div>
                    <div className="row">
                        <GetApp/>
                    </div>
                    <div className="row">
                        <OffersGrabbed/>
                    </div>
                </div>
            </>
        );
    }
}