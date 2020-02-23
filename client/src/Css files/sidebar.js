import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";


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
                <nav key="nav" className="nav-wraper indigo">
                    <div className="container">
                        <a href="#" className="brand-logo">Site title</a>
                        <a href="#" className="sidenav-trigger" data-target="slide-out">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#" className="btn-floating indigo darken-4 z-depth-0">
                                <i className="material-icons">notifications</i>
                            </a>
                            </li>
                            <li><span className="badge white-text pink new">5</span></li>
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <a href="#!">
                            <i className="material-icons">cloud</i>First Link
                            With Icon
                        </a>
                    </li>
                    <li>
                        <a href="#!">Second Link</a>
                    </li>
                    <li>
                        <div className="divider" />
                    </li>
                    <li>
                        <a className="subheader">Subheader</a>
                    </li>
                    <li>
                        <a className="waves-effect" href="#!">
                            Third Link With Waves
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;