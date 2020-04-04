import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "nouislider/distribute/nouislider.css";
import './css/home.css'
import Line from "./Charts2/chart";
import Sidebar from "./sidebar2/sidebar"
import { connect } from 'react-redux'
import { postLines_s } from '../actions/postLines_s'
import { postIndex } from '../actions/postIndex'

class HistoricalPage extends Component {


    render(){
        return(
            [
			<Sidebar/>
			,
			<Line/>
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


export default connect(mapStateToProps, mapDispatchToProps)(HistoricalPage);