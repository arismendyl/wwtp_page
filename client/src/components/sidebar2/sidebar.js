import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import '../css/sidebar.css'
import fire from '../../config/fire';

class Sidebar extends Component{
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    handlelogout(e){
        fire.auth().signOut();
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
                            <li><a href="/user">Real Time</a></li>
                            <li><a href="/hist">Historical Data</a></li>
                            <li><a href="/" onClick={this.handlelogout} className="btn-floating black z-depth-0">
                                <i className="material-icons grey-text text-lighten-2">exit_to_app</i>
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
                        <a href="/user">
                            <i className="material-icons">timeline</i>
                            Real Time
                        </a>
                    </li>
                    <li>
                        <a href="/hist">
                            <i className="material-icons">history</i>
                            Historical Data
                        </a>
                    </li>
                    <li>
                        <a href="/" onClick={this.handlelogout}>
                            <i className="material-icons">exit_to_app</i>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;