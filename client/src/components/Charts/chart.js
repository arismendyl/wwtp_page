import React, { Component } from "react";
import { connect } from 'react-redux'
import { postDate } from '../../actions/postDate'
import { postLines } from '../../actions/postLines'
import { createData } from "../../actions/postActions"
import { postColumns } from "../../actions/postColumns"
import { postDate_s } from '../../actions/postDate_s'
import { postLines_s } from '../../actions/postLines_s'
import { postModel } from '../../actions/postModel'
import { postDecomposition } from '../../actions/postDecomposition'
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
      });
    const promise3 = fetch('http://localhost:9000/API/read/model')
      .then(res => res.text())
      .then(res => {
        let dataModel = JSON.parse(res);
        dataModel.sort((a, b) => (a.id > b.id) ? 1 : -1);
        this.props.postModel(dataModel)
      });
    const promise4 = fetch('http://localhost:9000/API/read/decomposition')
    .then(res => res.text())
    .then(res => {
      this.props.postDecomposition(JSON.parse(res));
    });
    Promise.all([promise1, promise2, promise3, promise4]).then(() => boundCallback());
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
        (z,i) => {
          return [date[i],z[x]]
        }
      )
      return ({ name: x, data: prel })
    })
    this.setState({ load: true })
    this.props.postDate(date);
    this.props.postDate_s(date);
    this.props.postLines(s);
    this.props.postLines_s(s);
  }

  componentDidMount() {
    this.callApi(this.processing);
  }

  /*shouldComponentUpdate(nextProps) {
    return this.props.series_s.length != nextProps.series_s.length;
  }*/

  chart = (e) => {
    this.setState({componentChart: e})
  }

  render() {
    return (
      <Seeds todos={this.props.series}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    col: state.col,
    series: state.series,
    options: state.options,
    model: state.model
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
    },
    postModel: (model) => {
      dispatch(postModel(model))
      return Promise.resolve()
    },
    postDecomposition: (decomposition) => {
      dispatch(postDecomposition(decomposition))
      return Promise.resolve()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
