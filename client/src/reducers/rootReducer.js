const initState= {
    data: [],
    col: [],
    series: [
        {
        name: "",
        data: []
        }
    ],
    options: {
        chart: {
            type: 'area',
            group: 'social',
            stacked: false,
            height: 350,
            width:"100%",
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
            categories: [],
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
            colors: undefined,
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
        colors: ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794',
        '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29', '#00FFFF', '#DA4167',
        '#A31621','#1F7A8C', '#8F2D56'
        ],
        title: {
            text: "WWTP",
            align: "center",
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: "25px"
            }
        }
    },
}

const rootReducer = (state=initState, action) =>{
    if (action.type === 'CREATE_DATA') {
        return {
            ...state,
            data: action.data
        }
    }

    if (action.type === 'POST_COLUMNS') {
        return {
            ...state,
            col: action.col
        }
    }

    if (action.type === 'POST_DATE') {
        return {
            ...state,
            options:
            {...state.options,
            xaxis: {...state.options.xaxis,
            categories : action.options}
            }
        }
    }

    if (action.type === 'POST_LINES') {
        return {
            ...state,
            series: action.series
        }
    }



    return state;
}


export default rootReducer;