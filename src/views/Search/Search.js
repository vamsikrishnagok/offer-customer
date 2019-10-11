import React, {Component} from "react";
import queryString from 'query-string';
import {myConfig} from "../../config";
import {OfferListCard} from "../Offers/components"

export default class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            value:'',
            offers:""
        }
    }
    componentDidMount(){
        let data = {
            "q": queryString.parse(this.props.location.search).q
        }
        fetch( myConfig.apiBackendUrl+"customer/search/"+`?query=${data.q}`,{
            headers: {
                "Authorization": "Token "+"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJjdXN0b21lckBleGFtcGxlLmNvbSJ9.v9eM9Sipx-ivW1HnQt6IxS_-_U85bTKPYkOLlHcRkBY"
            }
        })
            .then(res => res.json())
            .then((result) => {
                    console.log(result)
                    this.setState({
                        offers: result.offer.map((res, _) => {
                            return <OfferListCard name={res.offer_name} desc={res.offer_details.slice(0, 150)} id={res.id}
                                                  image={myConfig.apiBackendUrl + "media/" + res.offer_file}
                                                  url={`/customer/offer/${res.id}`} dialog={this.setDialog}/>


                        })
                    })

                    console.log(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error)
                }
            )

    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h2 className="no-bottom-margin">Search Results</h2>
                            <h4 className="headSub"></h4>

                            {this.state.offers}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}