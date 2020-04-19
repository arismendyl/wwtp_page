import React, { Component } from "react";
import { connect } from 'react-redux';
import { postInputModel } from '../../actions/postInputModel'

class API extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.index !== prevProps.index && this.props.index.length >= 0) {
            let input = [];
            input = this.props.model.map((x) => {
                if (x.data===1) {
                    let result = this.props.series.filter(obj => {
                        return obj.name === x.variables;
                    })
                    return result[0].data[this.props.index[0]][1];
                }else{
                    if (x.variables==='MA') {
                        let lim = 1
                        if (this.props.index[0]>=14) {
                            lim=15;
                        }else{
                            lim=this.props.index[0]+1;
                        }
                        for (var index = 0; index < lim; index++) {
                            var MA = 0;
                            MA = MA + this.props.series[2].data[this.props.index[0]-index][1];
                        }
                        MA = MA / (index + 1);
                        return MA
                    }
                    if (x.variables==='t-1') {
                        if (this.props.index[0]===0) {
                            return this.props.series[2].data[this.props.index[0]][1]
                        }else{
                            return this.props.series[2].data[this.props.index[0]-1][1]
                        }
                    }
                }
            });
            let nn = input.slice();
            nn.map((x,i)=>{
                if (x===null) {
                    input[i] = 0;
                }
            });
            this.props.postInputModel(input);
        }
    }


    render() {
        return (
            null
        );
    }

};

    const mapStateToProps = (state) => {
        return {
            index: state.index,
            model: state.model,
            series: state.series
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            postInputModel: (imodel) => {
                dispatch(postInputModel(imodel))
                return Promise.resolve()
            }
        }
    }
    

export default connect(mapStateToProps, mapDispatchToProps)(API);