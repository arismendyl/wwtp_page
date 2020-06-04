import React, { Component } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { connect } from 'react-redux';

const colors = ['#00ff78', '#f76c6c', '#ffe700', '#374785', '#e0301e', '#339933', '#375e97', '#fb6542', '#ffbb00', '#3dbb2f'
,'#004c97', '#ff9e15', '#a5cd50', '#2dbecd', '#e61e50', '#fbae00', '#da5353', '#693f7b', '#39589a',	'#338984'];

class GraphWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
        len:0,
        MAPE:0,
        options: {
            stroke: {
                width: 2
            },
            colors: [colors[15], colors[3]],
            chart: {
            id: 'chart-'.concat('vs'),
            animations: {
                enabled: true,
                easing: "linear",
                dynamicAnimation: {
                speed: 1000
                }
            },
            height: 'auto',
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            },
            type: 'area',
            group: 'social',
            stacked: false,
            height: 'auto',
            },
            dataLabels: {
            enabled: false
            },
            title: {
            text: "Real vs Predicted COD",
            align: "center",
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: "25px"
            }
            },
            markers: {
            size: 0
            },
            xaxis: {
            type: "datetime",
            labels: {
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM \'yy',
                    day: 'dd MMM',
                    hour: 'HH:mm'
                }
            }
            },
            yaxis:{
                range: "autoScaleYaxis",
                showForNullSeries: true
            },
            legend: {
            show: true
            }
        },
        series: [{ name: 'Predicted', data: [] }, { name: 'Real', data: [] }]
        };
    }

    componentDidMount() {
        this.updateInterval = setInterval(() => null, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.updateInterval);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.real.length<this.props.real.length && this.props.predicted.length>1) {
            this.setState({MAPE: this.state.MAPE + Math.abs((this.props.real[this.props.real.length-1][1]-this.props.predicted[this.props.predicted.length-2][1])/(this.props.real[this.props.real.length-1][1]))});
            this.updateData();
        }
        
    }

    resetData = () => {
        const { data } = this.state.series[0];

        this.setState({
        series: [{ data: data.slice(data.length - 10, data.length) }]
        });
    };

    updateData = () => {
        if(this.props.real.length > 0){
            this.setState({ series: [{ name: 'Predicted', data: this.props.predicted }, { name: 'Real', data: this.props.real }]}, () =>{
                ApexCharts.exec('chart-'.concat('vs'), "updateSeries", this.state.series);
            });
        }
    }
    

    render() {
        const { options, series } = this.state;
        var N
        if (this.props.predicted.length>0) {
            N = this.props.predicted.length;
        }else{
            N = 1;
        }
        //<button onClick={this.resetData}>RESET</button>
        return (
            [<Chart options={options} series={series}/>,
            <h5>MAPE: </h5>,
            <span>{Math.round(this.state.MAPE*(100/N)*100)/100}%</span>]
        );
    }

};

    const mapStateToProps = (state) => {
        return {
            real: state.real,
            predicted: state.predicted
        }
    }
    

export default connect(mapStateToProps, null)(GraphWrapper);