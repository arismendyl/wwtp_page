import React, { Component } from 'react'
import ApexCharts from 'react-apexcharts'
import { connect } from 'react-redux'
import GraphWrapper from './test'
import './../css/seeds.css'

class Seeds extends Component {
    
    constructor(props){
        super(props);
        this.refsArray = [];
    }

    componentDidMount(nextProps) {
        window.setInterval(() => {}, 1000)
    }

    render() {
        const todoList = this.props.todos.length ? (
            this.props.todos.map( (todo, index) => {
                let option = index;
                let name= todo.name;
                return(
                    <div className="col s12 l6" key={index}>
                        <div className="card small">
                            <div>
                                <GraphWrapper
                                id={option} 
                                name={name}
                                />
                            </div>
                        </div>
                    </div>
                );
            }
            )
        ) : (
            <p className="center">Loading</p>
        );
        return(
            <div className="container">
                <div className="row">
                    {todoList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        series_s: state.series_s,
        options_s: state.options_s
    }
}

export default connect(mapStateToProps, null)(Seeds);