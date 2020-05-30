import React, { Component } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { connect } from 'react-redux';
import { postIndex } from '../../actions/postIndex'

const colors = ['#00ff78', '#f76c6c', '#ffe700', '#374785', '#e0301e', '#339933', '#375e97', '#fb6542', '#ffbb00', '#3dbb2f'
,'#004c97', '#ff9e15', '#a5cd50', '#2dbecd', '#e61e50', '#fbae00', '#da5353', '#693f7b', '#39589a',	'#338984'];

class GraphWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
        options: {
            colors: [colors[this.props.id]],
            chart: {
            id: 'chart-'.concat(this.props.id),
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
            text: this.props.name,
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
            show: false
            }
        },
        series: [{ data: [] }]
        };
    }

    componentDidMount() {
        this.updateInterval = setInterval(() => this.updateData(), 500);
    }

    componentWillUnmount() {
        clearInterval(this.updateInterval);
    }

    resetData = () => {
        const { data } = this.state.series[0];

        this.setState({
        series: [{ data: data.slice(data.length - 10, data.length) }]
        });
    };

    updateData = () => {
        let a = this.props.index[0]
        if(a < this.props.index[1]){
            const x = this.props.series_s[this.props.id].data[a][0];
            //console.log(this.props.series_s[this.props.id].data[a][0]);
            const y = this.props.series_s[this.props.id].data[a][1];
            let { data } = this.state.series[0];
            data.push({ x, y});
            if(this.props.id===1){
                this.props.postIndex([this.props.index[0]+1,this.props.index[1]]);
            }
            this.setState({ series: [{ data }] }, () =>
            ApexCharts.exec('chart-'.concat(this.props.id), "updateSeries", this.state.series)
            );
            // stop data array from leaking memory and growing too big
            if (data.length > 20) this.resetData();
        }
    }
    

    render() {
        const { options, series } = this.state;
        //<button onClick={this.resetData}>RESET</button>
        return (
                <Chart options={options} series={series}/>
        );
    }

};

    const mapStateToProps = (state) => {
        return {
            series_s: state.series_s,
            options_s: state.options_s,
            index: state.index
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
        postIndex: (index) => {
            dispatch(postIndex(index))
            return Promise.resolve()
            },
        }
    }
    

export default connect(mapStateToProps, mapDispatchToProps)(GraphWrapper);