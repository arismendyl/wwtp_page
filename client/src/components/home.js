import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Header from './header'
import Section from './section'
import Parallax from './parallax'
import Footer from './footer'
import './css/home.css'

class Home extends Component {
    render(){
        return(
            [
            <Header/>,
            <Section/>,
            <Parallax/>,
            <Footer/>
            ]
        );
    };
}


export default Home;