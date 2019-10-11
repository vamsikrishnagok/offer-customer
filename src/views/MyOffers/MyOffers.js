import React, {Component} from "react";
import {myConfig} from "../../config";
import {Claimed,Redeemed} from "./components";

export default class MyOffers extends Component {
    constructor(props){
        super(props)
        this.state = {
            offers:"",
            type:""
        }
    }
    componentDidMount() {
        fetch( myConfig.apiBackendUrl+"customer/redeemOfferList/?status=claimed",{
            headers: {
                "Authorization": "Token "+localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then( result =>{
                console.log(result)
                if (result.data.length == 0){
                    this.setState({offers:<h2>No offers grabbed yet</h2>})
                }
                else{
                    this.setState({offers: result.data.map( (res,_) => {
                            return <Claimed name={res.offer__offer_name} image={myConfig.apiBackendUrl+"media/"+res.offer__offer_file} desc={res.offer__offer_details} retailer={res.offer__retailer__full_name} category={res.offer__category__name} expDate={res.offer__expiry_date} claimDate={res.generated_date} id={res.id} qrcode={myConfig.apiBackendUrl+"media/"+res.coupon_qr} qr={res.coupon_code}/>
                        }),
                        type:"Claimed Offers"
                    })
                }

            })
    }

    handleClick = (evt,value) => {

        console.log(this.state.selectedTabId)
        if (value==1){
            fetch( myConfig.apiBackendUrl+"customer/redeemOfferList/?status=claimed",{
                headers: {
                    "Authorization": "Token "+localStorage.getItem("token")
                }
            })
                .then(res => res.json())
                .then( result =>{
                    console.log(result)
                    if (result.data.length == 0){
                        this.setState({offers:<h6>No offers grabbed yet</h6>})
                    }
                    else {
                        this.setState({
                            offers: result.data.map((res, _) => {
                                return <Claimed name={res.offer__offer_name}
                                                image={myConfig.apiBackendUrl + "media/" + res.offer__offer_file}
                                                desc={res.offer__offer_details}
                                                retailer={res.offer__retailer__full_name}
                                                category={res.offer__category__name} expDate={res.offer__expiry_date}
                                                claimDate={res.generated_date} id={res.id}
                                                qrcode={myConfig.apiBackendUrl + "media/" + res.coupon_qr}
                                                qr={res.coupon_code}/>
                            }),
                            type: "Claimed Offers"
                        })
                    }
                })
        }
        if(value==2){
            fetch( myConfig.apiBackendUrl+"customer/redeemOfferList/?status=Redeemed",{
                headers: {
                    "Authorization": "Token "+localStorage.getItem("token")
                }
            })
                .then(res => res.json())
                .then( result =>{
                    console.log(result)
                    if (result.data.length == 0){
                        this.setState({offers:<h6>No offers Redeemed yet</h6>,
                            type: "Redeemed Offers"})
                    }
                    else {
                        this.setState({
                            offers: result.data.map((res, _) => {
                                return <Redeemed name={res.offer__offer_name}
                                                 image={myConfig.apiBackendUrl + "media/" + res.offer__offer_file}
                                                 desc={res.offer__offer_details}
                                                 retailer={res.offer__retailer__full_name}
                                                 category={res.offer__category__name} expDate={res.offer__expiry_date}
                                                 claimDate={res.generated_date} id={res.id} bill={res.billFile}/>
                            }),
                            type: "Redeemed Offers"
                        })
                    }
                })
        }
        if(value==3){
            fetch( myConfig.apiBackendUrl+"customer/redeemOfferList/?status=expired",{
                headers: {
                    "Authorization": "Token "+localStorage.getItem("token")
                }
            })
                .then(res => res.json())
                // .then( result =>{
                //     console.log(result)
                //     this.setState({offers: result.data.map( (res,_) => {
                //             return <Claimed name={res.offer__offer_name} image={myConfig.apiBackendUrl+"media/"+res.offer__offer_file} desc={res.offer__offer_details} retailer={res.offer__retailer__full_name} category={res.offer__category__name} expDate={res.offer__expiry_date} claimDate={res.generated_date} id={res.id}/>
                //         }),
                //         type:"Claimed Offers"
                //     })
                // })
        }



    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <li className="tab col s3"><a className="active" id={1} onClick={(evt)=>this.handleClick(evt,1)} style={{color: "#172b54"}}>Claimed</a></li>
                                    <li className="tab col s3"><a id={2} onClick={(evt)=>this.handleClick(evt,2)} style={{color: "#172b54"}}>Redeemed</a></li>
                                    <li className="tab col s3"><a id={3} onClick={(evt)=>this.handleClick(evt,3)} style={{color: "#172b54"}}>Expired</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="col s12 m6">
                            <a href="#" data-target="slide-out" className="btn-floating sidenav-trigger" style={{backgroundColor: "rgb(23, 43, 84)"}}><i className="material-icons">menu</i></a>

                        </div>


                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h2>{this.state.type}</h2>
                            {/*<h4 class="headSub">Explore offers from the top restaurants and cafes.</h4>*/}
                        </div>
                        {this.state.offers}
                    </div>




                </div>
            </>
        );
    }
}