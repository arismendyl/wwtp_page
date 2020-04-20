const initState= {
    data: [],
    col: [],
    series: [],
    seeds: [],
    options: [],
    series_s: [],
    options_s: [],
    model:[],
    inputModel: [],
    index: [],
    hisIndex: null,
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

    if (action.type === 'POST_DATE_S') {
        return {
            ...state,
            options_s: action.options_s}
    }

    if (action.type === 'POST_LINES_S') {
        return {
            ...state,
            series_s: action.series_s
        }
    }

    if (action.type === 'POST_INDEX') {
        return {
            ...state,
            index: action.index
        }
    }

    if (action.type === 'POST_MODEL') {
        return {
            ...state,
            model: action.model
        }
    }

    if (action.type === 'POST_INPUTMODEL') {
        return {
            ...state,
            inputModel: action.imodel
        }
    }

    if (action.type === 'POST_HISINDEX') {
        return {
            ...state,
            hisIndex: action.hindex
        }
        
    }


    return state;
}


export default rootReducer;