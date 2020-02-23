import React, { Component } from "react";
//import { connect } from 'react-redux';
import pasta from './images/pasta.jpg'
import curry from './images/curry.jpg'

class CSS extends Component{
    render(){
        return(
            [
            <div key="1" className="container">
                <h1 className="red-text text-darken-3 center">Materialize CSS</h1>
                <h4 className="center-align">Center alignment</h4>
                <h4 className="left-align">Left alignment</h4>
                <h4 className="right-align">Right alignment</h4>
            </div>,
            <div key="2" className="container grey lighten-2 box valign-wrapper">
                <h5>Vertical alignment</h5>
            </div>,
            <div key="3" className="container grey-text">
                <p className="truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>,
            <div key="4" className="container">
                <h4>Buttons</h4>
                <a href="#" className="btn waves-effect waves-light">Normal button</a>
                <a href="#" className="btn-small">Small button</a>
                <a href="#" className="btn-large">Large button</a>
                <a href="#" className="btn indigo">indigo button</a>
                <a href="#" className="btn disabled">Disabled button</a>
                <h4>Floating button</h4>
                <a href="#" className="btn-floating pink pulse"></a>
                <h4>Other elements</h4>
                <div className="btn">I am a div tag</div>
            </div>,
            <div key="5" className="container">
                <h4>Icons</h4>
                <i class="material-icons red-text">error</i>
                <i class="material-icons yellow-text text-darken-2">warning</i>
                <i class="material-icons grey-text">cloud</i>
                <h4>Icons on Buttons</h4>
                <a href="#" className="btn indigo">
                    <span className="white-text">Send</span>
                    <i class="material-icons white-text right">send</i>
                </a>
                <a href="#" className="btn pink waves-effect waves-light">
                    <span className="white-text">Email</span>
                    <i class="material-icons white-text right">email</i>
                </a>
                <h4>Icons on Float Buttons</h4>
                <a href="#" className="btn-floating blue pulse">
                    <i className="material-icons">add</i>
                </a>
                <a href="#" className="btn-floating red pulse">
                    <i className="material-icons">remove</i>
                </a>
                <a href="#" className="btn-floating yellow pulse">
                    <i className="material-icons">edit</i>
                </a>
            </div>,
            <div key="6" className="container">
                <h4>Grids</h4>
                <div className="row">
                    <div className="col s3">content</div>
                    <div className="col s3">content</div>
                    <div className="col s3">content</div>
                    <div className="col s3">content</div>
                </div>
                <div className="row">
                    <div className="col s12 m6 l4">content</div>
                    <div className="col s12 m6 l4">content</div>
                    <div className="col s12 m6 l4">content</div>
                    <div className="col s12 m6 l4">content</div>
                    <div className="col s12 m6 l4">content</div>
                    <div className="col s12 m6 l4">content</div>
                </div>
                <div className="row">
                    <div className="col s12 m6 l4">content</div>
                    <div className="col s12 m6 l4">content</div>
                    <div className="col s12 m6 l4">content</div>
                    <div className="col s12 m6 l4">content</div>
                    <div className="col s12 m6 l4">content</div>
                    <div className="col s12 m6 l4">content</div>
                </div>
                <div className="row">
                    <div className="col s12 m4 l3 xl12">content</div>
                    <div className="col s12 m4 l3 xl12">content</div>
                    <div className="col s12 m4 l3 xl12">content</div>
                    <div className="col s12 m4 l3 xl12">content</div>
                    <div className="col s12 m4 l3 xl12">content</div>
                    <div className="col s12 m4 l3 xl12">content</div>
                </div>
            </div>,
            <div key="7" className="container">
                <div className="row">
                    <div className="col s2">
                        <div></div>
                    </div>
                    <div className="col s2">
                        <div className="z-depth-1"></div>
                    </div>
                    <div className="col s2">
                        <div className="z-depth-2"></div>
                    </div>
                    <div className="col s2">
                        <div></div>
                    </div>
                    <div className="col s2">
                        <div></div>
                    </div>
                    <div className="col s2">
                        <div></div>
                    </div>                    
                </div>
            </div>,
            <div key="8" className="container">
                <h2>Cards</h2>
                <div className="row">
                    <div className="col s12 l6">
                        <div className="card">
                            <div className="card-image">
                                <img src={pasta} alt="pasta"/>
                                <a href="" className="halfway-fab btn-floating pink pulse">
                                    <i className="material-icons">favorite</i>
                                </a>
                            </div>
                            <div className="card-content">
                                <span className="card-title center">Mango</span>
                                <p>
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                                </p>
                            </div>
                            <div className="card-action">
                                <a href="#">More details</a>
                                <a href="#">View Ingredients</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 l6">
                        <div className="card">
                            <div className="card-image">
                                <img src={curry} alt="pasta"/>
                                <a href="" className="halfway-fab btn-floating pink pulse">
                                    <i className="material-icons">favorite</i>
                                </a>
                            </div>
                            <div className="card-content">
                                <span className="card-title center">Mango</span>
                                <p>
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                                </p>
                            </div>
                            <div className="card-action">
                                <a href="#">More details</a>
                                <a href="#">View Ingredients</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            <div key="9" className="container">
                <h2 className="red-text">Collections</h2>
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Customers</h4></li>
                    <li className="collection-item avatar">
                        <i className="material-icons circle blue">person</i>
                        <span className="title">Luis</span>
                        <p className="grey-text">black-belt</p>
                        <a href="" className="secondary-content">
                            <i className="material-icons blue-text">email</i>
                        </a>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons circle blue">person</i>
                        <span className="title">Juan</span>
                        <p className="grey-text">black-belt</p>
                        <a href="" className="secondary-content">
                            <i className="material-icons blue-text">email</i>
                        </a>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons circle blue">person</i>
                        <span className="title">Moisés</span>
                        <p className="grey-text">black-belt</p>
                        <a href="" className="secondary-content">
                            <i className="material-icons blue-text">email</i>
                        </a>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons circle blue">person</i>
                        <span className="title">Carlos</span>
                        <p className="grey-text">black-belt</p>
                        <a href="" className="secondary-content">
                            <i className="material-icons blue-text">email</i>
                        </a>
                    </li>
                </ul>
            </div>,
            <div className="container">
                <h2>Modals</h2>
                <a href="#terms" className="btn orange modal-trigger">Terms & Conditions</a>
                <div className="modal" key="terms">
                    test
                </div>
            </div>
            ]
                );
    }
};

export default CSS;