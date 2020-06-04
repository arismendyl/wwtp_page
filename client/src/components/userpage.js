import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import './css/home.css'
import Line from "./Charts/chart";
import Sidebar from "./sidebar2/sidebar";
import { connect } from 'react-redux';
import { postLines_s } from '../actions/postLines_s';
import { postIndex } from '../actions/postIndex';
import API from "./model/api";
import Boxes from "./model/boxes";
import Table from './monitoring/table';
import M from "materialize-css/dist/js/materialize.min.js";
import './css/user.css';

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
			<div className="row">
				<div className="col s10">
					<div className="container header">
						<Sidebar/>
						<Boxes/>
					</div>
					<div className="content">
						<div className="container">
							<div className="row">
								<div className="col s11">
										<Nouislider 
										range={{ min: 0, max: 100 }} 
										start={[0, 99]} 
										connect
										onSet={this.onChangeSlide.bind(this)}
										ref="NoUiSlider"
										/>
								</div>
							</div>
						</div>
						<Line/>
					</div>
					<API/>
				</div>
				<div className="col s2">
					<Table/>
				</div>
			</div>
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