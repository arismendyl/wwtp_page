import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import imgx from './images/wwtp.jpg'

class Parallax extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {
                responsiveThreshold: 0
            });
        });
    };

    render(){
        return(
            <div className="parallax-container">
                <div className="parallax">
                    <img src={imgx} alt="" className="responsive-img"/>
                </div>
            </div>
        );
    };
}


export default Parallax;

