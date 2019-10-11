import React, {Component} from "react";
import {myConfig} from "../../../../config";
import CategoryCard from './CategoryCard'
import {Link} from "react-router-dom";

export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: "",
            isCategoriesLoaded: false
        }
    }
    componentDidMount() {
        fetch(myConfig.apiBackendUrl + "customer/categoryList/", {
            headers: {
                "Authorization": "Token " + localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then((result) => {
                    console.log(result)
                    this.setState({
                        categories: result.data.map((res, _) => {
                            return <CategoryCard name={res.name} id={res.id} handler={this.props.handler} icon={res.icons}/>
                        }), isCategoriesLoaded: true
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
                <div className="col s12 m12">
                    <div className="col s12 whiteBg z-depth-1">
                        <div className="col s12">
                            <h2 className="no-bottom-margin">Categories</h2>
                            <h4 className="headSub">Find the offer that you're looking for in your category</h4>

                            {this.state.categories}
                        </div>
                    </div>
                    <div className="col s12 whiteBg z-depth-1 valign-wrapper whiteTextBox top-margin">
                        <div className="col s12 center-align greyText">Don't know the category? View all the <a
                            href="/offers" style={{color: "rgb(23, 43, 84)"}}><a
                            className="textLink greyText">offers</a></a>
                        </div>
                    </div>
                </div>
            </>
        );

    }
}