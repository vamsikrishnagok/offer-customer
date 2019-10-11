import React, {Component} from "react";
import {Link} from "react-router-dom";
import {myConfig} from "../../../../config";

export default class PopularOffers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offers:"",
        }
    }
    componentDidMount(){
        fetch( myConfig.apiBackendUrl+"customer/offerList/",{
            headers: {
                "Authorization": "Token "+localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then((result) => {
                    console.log(result)
                    this.setState({offers: result.offer.slice(0,8).map( (res,_) => {
                            return <div className="col s12 m4 top-margin"><Link to={`/offers/${res.id}`} className="textLink">{res.offer_name} <span className="greyText">({res.claimCount} Grabbed)</span></Link></div>

                        })})

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
                <section>
                    <div className="row">
                        <div className="col s12">
                            <h2 className="no-bottom-margin">Popular Offers</h2>
                            <h4 className="headSub">Most popular offers collected based on the trends.</h4>
                        </div>
                        <div className="col s12 whiteBg z-depth-1 valign-wrapper whiteTextBox no-top-margin">
                            <div className="row padding-x">
                                {this.state.offers}
                                 </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}