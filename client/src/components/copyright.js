import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

class Copyright extends Component {
    render(){
        return(
            <footer className="page-footer grey darken-4">
                <div className="footer-copyright grey darken-4">
                    <div className="container center-align">&copy; 2020 ML Forecasting</div>
                </div>
            </footer>
        );
    };
}


export default Copyright;