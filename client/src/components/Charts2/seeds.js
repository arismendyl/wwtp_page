import React, { Component } from 'react'
import ApexCharts from 'react-apexcharts'
import { connect } from 'react-redux'
import GraphWrapper from './test'

const op = (id, name) =>{
    let colors = ['#00ff78', '#f76c6c', '#ffe700', '#374785', '#e0301e', '#339933', '#375e97', '#fb6542', '#ffbb00', '#3dbb2f'
    ,'#004c97', '#ff9e15', '#a5cd50', '#2dbecd', '#e61e50', '#fbae00', '#da5353', '#693f7b', '#39589a',	'#338984'];
    let text_id = 'chart-'.concat(id);
    return(
        {
            colors: [colors[id]],
            chart: {
            id:text_id,
            type: 'area',
            group: 'social',
            stacked: false,
            height: 'auto',
            /*animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                },
                initialAnimation: {
                    enabled: true
                }
            },*/
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
        },
        markers: {
            size: 0,
        },
        xaxis: {
            //categories: date,
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
            colors: [colors[id]],
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
            text: name,
            align: "center",
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: "25px"
            }
        },
        yaxis: {
            labels: {
                minWidth: 40
            }
        }}
        )
};


class Seeds extends Component {
    
    constructor(props){
        super(props);
        this.refsArray = [];
    }

    componentDidMount(nextProps) {
        window.setInterval(() => {
            /*if(this.props.series_s.length>0){
                        this.props.series_s.map((x,i)=>{
                            this.refsArray[i].chart.updateSeries([{
                                ...this.refsArray[i].props.series[0],
                                data: [...this.props.series_s[i].data]}]);
                            console.log('series');
                            console.log([{
                                ...this.refsArray[i].props.series[0],
                                data: [...this.props.series_s[i].data]}])
                        });
                }*/
        }, 1000)
    }
    
    /*shouldComponentUpdate(nextProps) {
        return this.props.todos.length != nextProps.todos.length;
    }*/

    /*componentWillReceiveProps(nextProps){
        console.log(this.props)
        if(this.props.series_s.length){
            if(!(nextProps.series_s===this.props.series_s)){
                console.log('ok')
                nextProps.series_s.map((x,i)=>{
                    this.refsArray[i].chart.updateSeries([{
                        ...this.refsArray[i].props.series[0],
                        data: [...nextProps.series_s[i].data]}]);
                    console.log('series');
                    console.log([{
                        ...this.refsArray[i].props.series[0],
                        data: [...nextProps.series_s[i].data]}])
                });
            }
        }
    }*/

    render() {
        const todoList = this.props.todos.length ? (
            this.props.todos.map( (todo, index) => {
                let option = index;
                let name= todo.name;
                return(
                    <div className="col s12 m6" key={index}>
                        <div className="card small">
                            <GraphWrapper
                            id={option} 
                            name={name}
                            />
                        </div>
                    </div>
                );
            }
            )
        ) : (
            <p className="center">Loading</p>
        );
        return(
            <div className="container">
                <div className="row">
                    {todoList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        series_s: state.series_s,
        options_s: state.options_s
    }
}

export default connect(mapStateToProps, null)(Seeds);