import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./auth";
import app from "../config/fire";
import "materialize-css/dist/css/materialize.min.css";
import Sidebar from './sidebar/sidebar'
import Copyright from './copyright'
import './css/login.css'


const Login = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/user")
            } catch (error) {
                alert(error);
            }
            
        },
        [history]
    );
    
    const { currentUser } = useContext(AuthContext);

    /*if (currentUser) {
        console.log(currentUser.email)
        return <Redirect to="/user" />;
    }*/

    return(
        [
        <div className="row big">
        <Sidebar/>
        <main>
            <header>
                <center>
                    <div class="section"></div>
                    <div class="container">
                        <div class="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding: '32px 48px 28px 48px', border: '1px solid #EEE'}}>
                        <form id="myForm" class="col s12" onSubmit={handleLogin}>
                            <div class='row'>
                                <div class='col s12'>
                                </div>
                            </div>

                            <div class='row'>
                                <div class='input-field col s12'>
                                    <input class='validate' type='email' name='email' id='email' />
                                    <label for='email'> <i className="material-icons login">assignment_ind</i> <span className="text-login">Enter your email</span> </label>
                                </div>
                            </div>

                            <div class='row'>
                                <div class='input-field col s12'>
                                    <input class='validate' type='password' name='password' id='password' />
                                    <label for='password'> <i className="material-icons login">vpn_key</i> <span className="text-login">Enter your password</span> </label> 
                                </div>
                                <label style={{float: 'right'}}>
                                    <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
                                </label>
                            </div>

                            <br />
                            <center>
                                <div class='row'>
                                    <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect grey'>Login</button>
                                </div>
                            </center>
                        </form>
                        </div>
                    </div>
                </center>
                <div class="container"></div>
            </header>
        </main>
        </div>,
        <Copyright/>
        ]
    );
};


export default withRouter(Login);