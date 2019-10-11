import React, {Component} from "react";
import Card from './Card'
import {myConfig} from "../../../../config";

export default class FeaturedOffers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offers: "<h1>No Data</h1>",
        }
    }

    componentDidMount() {
        fetch(myConfig.apiBackendUrl + "customer/offerList/", {
            headers: {
                "Authorization": "Token " + localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then((result) => {
                    console.log(result)
                    this.setState({
                        offers: result.offer.slice(0, 4).map((res, _) => {
                            return <Card name={res.offer_name} desc={res.offer_details.slice(0, 55) + "..."} id={res.id}
                                         image={myConfig.apiBackendUrl + res.offer_file} url={`/offers/${res.id}`}/>
                        })
                    })

                    console.log(result)
                },

                (error) => {
                    console.log(error)
                }
            )
    }

    render() {
        return (
            <>
                <div className="col s12 m6">
                    <h2 className="no-bottom-margin">Featured Offers</h2>
                    <h4 className="headSub">Explore the featured offers specially curated for you.</h4>
                    {this.state.offers}
                </div>

            </>
        );
    }
}