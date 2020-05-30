import React, { Component } from "react";
import { connect } from 'react-redux';
import './../css/boxes.css'
import "materialize-css/dist/css/materialize.min.css";
import { Modal, Button } from 'react-materialize';
import M from "materialize-css/dist/js/materialize.min.js";
import GraphWrapper from './chart/test.js'
import {postReal} from '../../actions/postReal'
import {postPredicted} from '../../actions/postPredicted'

class Boxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modaln: null,
            modalt: null,
            modalp: null,
            delay: 1,
            date: null,
            datep: null,
            resq: 0
        }
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {inDuration: 250});
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.index !== prevProps.index && this.props.index.length >= 0) {
            let f = this.props.inputModel.toString()
            const promise1 = fetch('http://localhost:9000/model/predict?param='+f)
            .then(res => res.text())
            .then(res => {
                this.setState({modaln: this.props.series[2].data[this.props.index[0]][1]})
                var date = this.props.series[2].data[this.props.index[0]][0];
                let val;
                val = this.props.decomposition[this.props.index[0]].trend + JSON.parse(res)*this.props.model[4].max;
                console.log(this.props.model[4].max);
                if (this.props.index[0] >= 6) {
                    val = val + this.props.decomposition[this.props.index[0]-6].seasonal;
                }
                this.setState({modalt: Math.round(val)})
                var tempDate = new Date(date);
                this.setState({date: tempDate.toDateString()});
                var nextDay = new Date(tempDate);
                nextDay.setDate(tempDate.getDate() + this.state.delay);
                this.setState({datep: nextDay.toDateString()});
                this.setState({resq: this.state.resq+1});
                this.props.postReal([date, this.state.modaln]);
                this.props.postPredicted([nextDay, this.state.modalt]);
            });
        }
    }

    render() {
        /*content bg
        var d = new Date(Date.now());
        d.setDate(d.getDate() + 1);
        */
        const trigger = <div className="col s12 center-align">
                            <a href="" className="btn-small indigo valign-wrapper"><i className="large material-icons">timeline</i></a>
                        </div>
        return (
            <div class="black">
				<div class="container">
                    <div class="row">
                        <Modal trigger={trigger}>
                            <div className="card-large valign-wrapper">
                                <div className="container">
                                    {<GraphWrapper
                                        id={"0"} 
                                        name={"vs"}
                                    />}
                                </div>
                            </div>
                        </Modal>
                        <div class="col s12 m4">
                            <div class="card card-bg black-text">
                                <div class="card-content center">
                                    <h5>Current COD</h5>
                                    <span>{this.state.date}</span>
                                    <h5 className="indigo-text darken-4">{this.state.modaln}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card card-bg black-text">
                                <div class="card-content center">
                                    <h5>Predicted COD</h5>
                                    <span>{this.state.datep}</span>
                                    <h5 className="indigo-text darken-4">{this.state.modalt}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card card-bg black-text">
                                <div class="card-content center">
                                    <h5>Prescription</h5>
                                    <span>{this.state.datep}</span>
                                    <h5 className="indigo-text darken-4">{this.state.modalt}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
        );
    }

};

    const mapStateToProps = (state) => {
        return {
            inputModel: state.inputModel,
            series: state.series,
            index: state.index,
            decomposition: state.decomposition,
            model: state.model
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
        postReal: (real) => {
                dispatch(postReal(real))
                return Promise.resolve()
            },
        postPredicted: (predicted) => {
                dispatch(postPredicted(predicted))
                return Promise.resolve()
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Boxes);