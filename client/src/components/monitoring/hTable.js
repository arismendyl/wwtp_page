import React, { Component } from 'react';
import { connect } from 'react-redux';
import Updating from './hUpdating';
import Hdate from './hDate'
import './../css/table.css';
import M from "materialize-css/dist/js/materialize.min.js";


class Table extends Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems, {
                inDuration: 250
            });
        });
    }

    onChangeDate(index){
        let d = this.props.series[0].data[index][0];
        return(d);
	}


    render() {
        let colors = ['#00ff78', '#f76c6c', '#ffe700', '#374785', '#e0301e', '#339933', '#375e97', '#fb6542', '#ffbb00', '#3dbb2f'
    ,'#004c97', '#ff9e15', '#a5cd50', '#2dbecd', '#e61e50', '#fbae00', '#da5353', '#693f7b', '#39589a',	'#338984'];
        const todoList = this.props.series.length ? (
            this.props.series.map( (todo,i) => {
                let name= todo.name;
                return(
                    <tr>
                        <th>{name}</th>
                        <td style={{color:colors[i]}}><b><Updating i={i}/></b></td>
                    </tr>
                );
            }
            )
        ) : (
            <p className="center">Loading</p>
        );
        const date = (this.props.index) ? 
        (this.onChangeDate(this.props.index)):(null);
        return(
            <div className="table">
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Measured</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <td style={{color:"#5d5c5f"}}><b>{date}</b></td>
                        </tr>
                        {todoList}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        series: state.series,
        index: state.hisIndex
        }
}

export default connect(mapStateToProps, null)(Table);