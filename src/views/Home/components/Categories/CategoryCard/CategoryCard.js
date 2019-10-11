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
                <Link to={{ pathname:"/offers", search:"?cat_id="+this.props.id+"&categoryName="+this.props.name}}>
                    <div className="col s6 m4 no-left-padding categoryCardWrapper">
                        <a href="category.html" className="valign-wrapper">
                            <div className="lighten-1 valign-wrapper categoryCard"
                                 style={{backgroundColor: "rgb(23, 43, 84)"}}>
                                <img src={myConfig.apiBackendUrl+'/media/'+this.props.icon}
                                     className="responsive-img center-block" width={"50%"} height={"40%"}/>
                            </div>
                        </a>
                        <div className="categoryTitle center-align" style={{color: "rgb(23, 43, 84)"}}>{this.props.name}</div>
                    </div>
                </Link>
            </>
        )
    }
}