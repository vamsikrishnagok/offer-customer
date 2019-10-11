import React, {Component} from "react";
import google_playstore from './../../../../assets/images/google-play-badge.png'
export default class GetApp extends Component {
    render() {
        return (
            <>
                <section>
                    <div className="row">
                        <div className="col s12 whiteBg z-depth-1 valign-wrapper whiteTextBox top-margin">
                            {/*<div class="row">*/}
                            <div className="col s12 m8 offset-m2 center-align">
                                <h2 className="no-bottom-margin">Get the Aroodi App</h2>
                                <h4 className="headSub">Get the best offers on the go</h4>
                                <form>
                                    <div className="input-field col s8">
                                        <input name="phone_number" id="phone_number" type="tel" />
                                        <label htmlFor="phone_number">Enter phone number</label>
                                    </div>
                                    <div className="input-field col s4"><button className="btn waves-effect" type="submit" style={{backgroundColor: "rgb(23, 43, 84)"}}><span className="show-on-small hide-on-med-and-up"><i className="material-icons">send</i></span><span className="hide-on-small-only">Text App Link</span></button></div>
                                </form>
                                <div className="col s12 center-align greyText">OR</div>
                                <form>
                                    <div className="input-field col s8">
                                        <input name="email_id" id="email_id" type="email" />
                                        <label htmlFor="email_id">Enter email id</label>
                                    </div>
                                    <div className="input-field col s4"><button className="btn waves-effect" type="submit" style={{backgroundColor: "rgb(23, 43, 84)"}}><span className="show-on-small hide-on-med-and-up"><i className="material-icons">send</i></span><span className="hide-on-small-only">Email App Link</span></button></div>
                                </form>
                                <div className="col s12 center-align">
                                    <a href="#"><img src={google_playstore} className="responsive-img" /></a>
                                </div>
                            </div>
                            {/*</div>*/}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}