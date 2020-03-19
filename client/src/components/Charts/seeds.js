import React from 'react'
import AChart from "react-apexcharts";
const op = (id, name, date) =>{
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
            animations: {
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
            categories: date,
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

const Seeds= ({todos, date}) =>{
    const todoList = todos.length ? (
        todos.map( (todo, index) => {
            let option = index;
            let name= todo.name;
            let parameters = op(option, name, date);
            return(
                <div className="col s12 m6" key={index}>
                    <div className="card small">
                        <AChart
                        options={parameters}
                        series={[todo]}/>
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
export default Seeds;