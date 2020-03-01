const initState= {
    data: [],
    col: [],
    series: [],
    seeds: [],
    options: [],
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
            options: action.options}
    }

    if (action.type === 'POST_LINES') {
        return {
            ...state,
            series: action.series
        }
    }

    if (action.type === 'POST_SEEDS') {
        return {
            ...state,
            seeds: action.seeds
        }
    }

    return state;
}


export default rootReducer;