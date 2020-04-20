import React, { Component } from 'react'
import { connect } from 'react-redux'

class Updating extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        if (this.props.hisIndex) {
            return(
                this.props.series[this.props.i].data[this.props.hisIndex][1]
            );
        }else{
            return(null);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        series: state.series,
        hisIndex: state.hisIndex
    }
}

export default connect(mapStateToProps, null)(Updating);