import React, { Component } from 'react'
import { connect } from 'react-redux'

class Updating extends Component {
    
    constructor(props){
        super(props);
    }

    render() { 
        return(
            this.props.series[this.props.i].data[this.props.index[0]][1]
        );
    }
}

const mapStateToProps = (state) => {
    return {
        series: state.series,
        index: state.index
    }
}

export default connect(mapStateToProps, null)(Updating);