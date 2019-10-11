import React, {Component} from "react";
import './../../assets/css/main.css'
import {Topbar,Footer} from './components'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<>
                <Topbar/>
                {this.props.children}

               <Footer/>
            </>
        );
    }
}