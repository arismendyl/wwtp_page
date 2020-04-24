import React, { Component } from 'react'
import { connect } from 'react-redux'

class Hdate extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        if (this.props.hisIndex>=0) {
            return(
                this.props.series[0].data[this.props.hisIndex][0]
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

export default connect(mapStateToProps, null)(Hdate);