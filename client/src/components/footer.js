import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

class Footer extends Component {
    render(){
        return(
            <div className="grey darken-3">
            <footer className="page-footer grey darken-3">
                <div className="container contact">
                    <h5 className="center">Contact us</h5>
                    <div className="row">
                        <div className="col s12 l6 center-align">
                            <ul>
                                <li>
                                    <span>Luis Arismendy</span>
                                </li>
                                <li>
                                    <i className="material-icons contact ">email</i>
                                    <span>arismendyl@uninorte.edu.co</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col s12 l6 center-align">
                            <ul>
                                <li>
                                    <span>Carlos Cárdenas</span>
                                </li>
                                <li>
                                    <i className="material-icons contact">email</i>
                                    <span>ccarlosa@uninorte.edu.co</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright grey darken-4">
                    <div className="container center-align">&copy; 2020 ML Forecasting</div>
                </div>
            </footer>
            </div>
        );
    };
}


export default Footer;