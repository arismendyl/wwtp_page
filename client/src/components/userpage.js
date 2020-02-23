import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import './css/home.css'
import Line from "./Charts/chart";
import Sidebar from "./sidebar2/sidebar"

class UserPage extends Component {
    
    render(){
        return(
            [
			<Sidebar/>,
						<div class="content bg black">
							<div class="container">
							<div class="row">
								<div class="col s12 m4">
									<div class="card card-bg black-text">
										<div class="card-content center">
											<p>Revenue</p>
											<h5>$12,476.00</h5>
											<i class="material-icons small green-text">keyboard_arrow_up</i>
											<b class="green-text">%12</b>
										</div>
									</div>
								</div>
								<div class="col s12 m4">
									<div class="card card-bg black-text">
										<div class="card-content center">
											<p>Click</p>
											<h5>2400</h5>
											<i class="material-icons small red-text">keyboard_arrow_down</i>
											<b class="red-text">%10</b>
										</div>
									</div>
								</div>
								<div class="col s12 m4">
									<div class="card card-bg black-text">
										<div class="card-content center">
											<p>Users</p>
											<h5>5000,00</h5>
											<i class="material-icons small green-text">keyboard_arrow_up</i>
											<b class="green-text">%7</b>
										</div>
									</div>
								</div>
							</div>
						</div>
						</div>
    ,
            <Line/>]
        );
    };
    
}

export default (UserPage);