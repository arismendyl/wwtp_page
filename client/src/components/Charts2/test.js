import React, { Component } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { connect } from 'react-redux';
import { postIndex } from '../../actions/postIndex'
import { postHisIndex } from '../../actions/postHisIndex'

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
            type: 'area',
            group: 'social',
            stacked: false,
            height: '100%',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                speed: 350
                }
            },
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            },
            events: {
                markerClick: function(event, chartContext, { seriesIndex, dataPointIndex, config}) {
                    if (this.state.options.chart.id === 'chart-0') {
                        this.props.postHisIndex(dataPointIndex);
                    }
                }.bind(this)
            }
        },
        markers: {
            size: 0,
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
        fill: {
            opacity: 0.9,
            type: 'solid',
            gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: []
            }
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
        yaxis: {
            labels: {
                minWidth: 60
            },
            showForNullSeries: true
        }
        },
        series: [{ data: [] }]
        };
    }

    componentDidMount() {
        this.updateInterval = setInterval(() => this.updateData(), 1000)
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
        let { data } = this.state.series[0];
        
        data=this.props.series_s[this.props.id].data.slice();
        this.setState({ series: [{ data }] }, () =>
        ApexCharts.exec('chart-'.concat(this.props.id), "updateSeries", this.state.series)
        );
    }
    

    render() {
        const { options, series } = this.state;
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
        postHisIndex: (hindex) => {
                dispatch(postHisIndex(hindex))
                return Promise.resolve()
            }
        }
    }
    

export default connect(mapStateToProps, mapDispatchToProps)(GraphWrapper);