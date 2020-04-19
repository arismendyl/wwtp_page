import React, { Component } from "react";
import { connect } from 'react-redux';
import './../css/boxes.css'

class Boxes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modaln: null,
            modalt: null,
            modalp: null
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.index !== prevProps.index && this.props.index.length >= 0) {
            let f = this.props.inputModel.toString()
            const promise1 = fetch('http://localhost:9000/model/predict?param='+f)
            .then(res => res.text())
            .then(res => {
                this.setState({modalt: Math.ceil(Math.abs(JSON.parse(res))/10)})  
            });
            this.setState({modaln: this.props.series[2].data[this.props.index[0]][1]})
            
        }
    }

    render() {
        //content bg
        return (
            <div class="black">
				<div class="container">
                    <div class="row">
                        <div class="col s12 m4">
                            <div class="card card-bg black-text">
                                <div class="card-content center">
                                    <h5>Current COD</h5>
                                    <h5 className="indigo-text darken-4">{this.state.modaln}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card card-bg black-text">
                                <div class="card-content center">
                                    <h5>Predicted COD</h5>
                                    <h5 className="indigo-text darken-4">{this.state.modalt}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card card-bg black-text">
                                <div class="card-content center">
                                    <h5>Prescription</h5>
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
            index: state.index
        }
    }


export default connect(mapStateToProps, null)(Boxes);