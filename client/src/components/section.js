import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import glasses from './images/glassespc.jpg'
import analysis from './images/analysis.jpg'
import plant from './images/wwtp_overview.jpg'
import M from "materialize-css/dist/js/materialize.min.js";


class Section extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems, {
                inDuration: 250
            });
        });
    }
    
    render(){
        return(
            <div className="grey lighten-2">
                <section className="container section" key="content">
                    <div className="row">
                        <div className="col s12 l4">
                            <img src={glasses} alt="Data analysis" className="responsive-img materialboxed"/>
                        </div>
                        <div className="col s12 l6 offset-l1">
                            <h2 className="black-text">Machine Learning</h2>
                            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
                                consectetur, adipisci velit...</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 l4 push-l7 offset-l1">
                            <img src={analysis} alt="Data analysis" className="responsive-img materialboxed"/>
                        </div>
                        <div className="col s12 l6 pull-l5 offset-l1 right-align">
                            <h2 className="black-text">Data analysis</h2>
                            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
                                consectetur, adipisci velit...</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 l4">
                            <img src={plant} alt="Data analysis" className="responsive-img materialboxed"/>
                        </div>
                        <div className="col s12 l6 offset-l1">
                            <h2 className="black-text">Plant treatment</h2>
                            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
                                consectetur, adipisci velit...</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
}


export default Section;