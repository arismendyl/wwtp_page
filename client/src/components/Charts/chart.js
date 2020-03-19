import React, { Component } from "react";
import { connect } from 'react-redux'
import { postDate } from '../../actions/postDate'
import { postLines } from '../../actions/postLines'
import { createData } from "../../actions/postActions"
import { postColumns } from "../../actions/postColumns"
import { postDate_s } from '../../actions/postDate_s'
import { postLines_s } from '../../actions/postLines_s'

import Seeds from './seeds'

class Chart extends Component {

  constructor(props) {
    super(props);
    this.processing = this.processing.bind(this);
    this.state = {
      componentChart: null,
      ok: 0
    }
  }

  async callApi(callback) {
    let boundCallback = callback.bind(this);
    const promise1 = fetch('http://localhost:9000/API/read/')
      .then(res => res.text())
      .then(res => {
        this.props.createData(JSON.parse(res))
      });
    const promise2 = fetch('http://localhost:9000/API/read/columns')
      .then(res => res.text())
      .then(res => {
        this.props.postColumns(JSON.parse(res))
      })
      ;
    Promise.all([promise1, promise2]).then(() => boundCallback());
  }

  segment(col) {
    let c = col
    const co = c.map(
      (x) => {
        return x.column_name;
      }
    )
    return co
  }

  processing() {
    this.setState({ok:1})
    var column = this.segment(this.props.col);
    var data = this.props.data;
    const date = data.map(x => {
      return x.Date.split("T")[0]
    }

    );
    column.splice(column.indexOf('Date'), 1);
    var s = column.map(x => {
      var prel = data.map(
        (z) => {
          return z[x]
        }
      )
      return ({ name: x, data: prel })
    })
    var a = [s[0],s[3]]
    this.setState({ load: true })
    this.props.postDate(date);
    this.props.postDate_s(date);
    this.props.postLines(s);
    this.props.postLines_s(s);
  }

  componentDidMount() {
    this.callApi(this.processing);
  }

  chart = (e) => {
    this.setState({componentChart: e})
  }

  render() {
    if(this.props.series_s.length === 0 || this.props.options_s === 0){
      var a = 0;
      var b = 1
    }else{
      var a = this.props.series_s[0].data.length;
      var b = this.props.options_s.length;
    }
    if (a==b && this.props.series_s.length != 0 && this.props.options_s.length != 0) {
      return (
        <Seeds todos={this.props.series_s} date={this.props.options_s}/>
      );
    }else{
      return(
        null
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    col: state.col,
    series: state.series,
    options: state.options,
    series_s: state.series_s,
		options_s: state.options_s
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postDate: (options) => {
      dispatch(postDate(options))
      return Promise.resolve()
    },
    postLines: (series) => {
      dispatch(postLines(series))
      return Promise.resolve()
    },
    createData: (data) => {
      dispatch(createData(data))
      return Promise.resolve()
    },
    postColumns: (col) => {
      dispatch(postColumns(col))
      return Promise.resolve()
    },
    postDate_s: (options_s) => {
      dispatch(postDate_s(options_s))
      return Promise.resolve()
      },
    postLines_s: (series_s) => {
      dispatch(postLines_s(series_s))
      return Promise.resolve()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
