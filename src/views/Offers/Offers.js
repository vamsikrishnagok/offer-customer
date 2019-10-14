import React, {Component} from "react";
import queryString from 'query-string';
import {OfferListCard, AuthOfferListCard, PopularOffers, Categories} from './components'
import {myConfig} from './../../../src/config'


export default class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offers: <h1>No Existing Offers</h1>,
            queryParams:"",
            modelDialog: ""
        }
    }

    componentDidMount() {
        let data = {
            "category_id": queryString.parse(this.props.location.search).cat_id
        }
        console.log(JSON.stringify(data))

        if (localStorage.getItem("token") == null || localStorage.getItem("token") == "") {
            fetch(myConfig.apiBackendUrl + "customer/offerList/" + "?category_id=" + data.category_id, {
                method: 'get',
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result.offer.length === 0)
                    if (result.offer.length === 0) {

                        return null;
                    }
                    else {
                        this.setState({
                            offers: result.offer.map((res, _) => {
                                return <OfferListCard name={res.offer_name} desc={res.offer_details.slice(0, 150)}
                                                      id={res.id}
                                                      image={myConfig.apiBackendUrl + res.offer_file}
                                                      url={`/customer/offer/${res.id}`} dialog={this.setDialog}
                                                      PopularityBar={res.popularityBar}/>
                            }),
                            queryParams:this.props.location.search
                        });
                    }


                })
        }
        else {
            fetch(myConfig.apiBackendUrl + "customer/authOfferList" + "?category_id=" + data.category_id, {
                method: 'get',
                headers: {
                    "Authorization": "Token " + localStorage.getItem("token")
                }
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result.offer.length === 0)
                    if (result.offer.length === 0) {

                        return null;
                    }
                    else {
                        this.setState({
                            offers: result.offer.map((res, _) => {
                                if (res.claimed == false) {
                                    return <OfferListCard name={res.offer_name} desc={res.offer_details.slice(0, 150)}
                                                          id={res.id}
                                                          image={myConfig.apiBackendUrl + res.offer_file}
                                                          url={`/customer/offer/${res.id}`} dialog={this.setDialog}
                                                          PopularityBar={res.popularityBar}/>
                                }
                                else {
                                    return <AuthOfferListCard name={res.offer_name}
                                                              desc={res.offer_details.slice(0, 150)}
                                                              id={res.id}
                                                              image={myConfig.apiBackendUrl + res.offer_file}
                                                              url={`/customer/offer/${res.id}`} dialog={this.setDialog}
                                                              PopularityBar={res.popularityBar}/>

                                }

                            })
                        });
                    }
                })
        }
    }



    setDialog = (msg) => {
        this.setState({
            modelDialog: msg
        })
    }

    render() {
        console.log(queryString.parse(this.props.location.search).categoryName)


        let categoryName = ""
        if (queryString.parse(this.props.location.search).categoryName == undefined) {
            categoryName = "All Offers"
        }
        else {
            categoryName = queryString.parse(this.props.location.search).categoryName
        }


        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h2 className="no-bottom-margin">{categoryName}</h2>
                            <h4 className="headSub"></h4>

                            {this.state.offers}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            <Categories />

                        </div>

                    </div>
                    {/*<div className="row">*/}
                        {/*<div className="col s12">*/}
                            {/*<PopularOffers/>*/}

                        {/*</div>*/}

                    {/*</div>*/}
                </div>

            </>
        );
    }
}
