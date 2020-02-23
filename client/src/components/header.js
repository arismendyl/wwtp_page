import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Sidebar from './sidebar/sidebar'

class Header extends Component {
    render(){
        return(
            <header>
                <Sidebar/>
            </header>
        );
    };
}


export default Header;