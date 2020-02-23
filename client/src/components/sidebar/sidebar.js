import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import '../css/sidebar.css'


class Sidebar extends Component{
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render(){
        return (
            <div>
                <nav key="nav" className="nav-wraper grey lighten-2">
                    <div className="container">
                        <a href="#" className="sidenav-trigger" data-target="slide-out">
                            <i className="material-icons black-text">menu</i>
                        </a>
                        <a href="/" className="brand-logo black-text">
                        <i className="material-icons black-text">trending_up</i>
                        <span>ML Forecasting</span>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/login" className="btn-floating black z-depth-0">
                                <i className="material-icons grey-text text-lighten-2">person</i>
                            </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav grey lighten-2">
                    <li>
                        <a href="/">
                            <i className="material-icons">home</i>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/login">
                            <i className="material-icons">person</i>
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;