import React, {Component} from "react";
import {Link} from "react-router-dom";
import {myConfig} from "../../../../../config";


export default class CategoryCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>

                <a href={"/offers?cat_id="+this.props.id+"&categoryName="+this.props.name}>
                    <div className="col s6 m4 no-left-padding categoryCardWrapper">
                        
                            <div className="lighten-1 valign-wrapper categoryCard"
                                 style={{backgroundColor: "rgb(23, 43, 84)"}}>
                                <img src={myConfig.apiBackendUrl+'/media/'+this.props.icon}
                                     className="responsive-img center-block" width={"60"} height={"60"}/>
                            </div>

                        <div className="categoryTitle center-align" style={{color: "rgb(23, 43, 84)"}}>{this.props.name}</div>
                    </div>
                </a>
            </>
        )
    }
}