import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import './css/home.css'
import Line from "./Charts/chart";
import Sidebar from "./sidebar2/sidebar"
import { connect } from 'react-redux'
import { postLines_s } from '../actions/postLines_s'
import { postIndex } from '../actions/postIndex'

class UserPage extends Component {

	onChangeSlide(data){
		let min = data[0];
		let max = data[1];
		let length = this.props.options.length;
		let inf = Math.floor((min*length)/100);
		let sup = Math.floor((max*length)/100);
		this.props.postIndex([inf,sup])
	}

	dataSubset(data, inf, sup){
		let series = data.map((x)=>{
			return x.data.slice(inf, sup)
		});
		const sf = series.map((x, index)=>{
			return {...data[index], data: x}; //https://medium.com/front-end-weekly/immutability-in-array-of-objects-using-map-method-dd61584c7188
		});
		return sf
	}



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
			<div className="container">
				<div className="row">
					<div className="col s11">
							<Nouislider 
							range={{ min: 0, max: 100 }} 
							start={[0, 80]} 
							connect
							onSet={this.onChangeSlide.bind(this)}
							ref="NoUiSlider"
							/>
					</div>
					<div className="col s1 offset-s11">
						<a class="btn-floating btn-large waves-effect waves-light green right-align"><i class="material-icons">eject</i></a>
					</div>
				</div>
			</div>
			,
			<Line/>,
			/*<div className="container">
				<div className="row">
					<di className="col s6">
						<GraphWrapper/> 
					</di>
				</div>
			</div>*/
			]
        );
    };
    
}

const mapStateToProps = (state) => {
	return {
		series: state.series,
		options: state.options,
		series_s: state.series_s,
		options_s: state.options_s
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		postIndex: (index) => {
		dispatch(postIndex(index))
		return Promise.resolve()
		},
		postLines_s: (series_s) => {
		dispatch(postLines_s(series_s))
		return Promise.resolve()
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);