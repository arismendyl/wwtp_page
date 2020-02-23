import React from 'react'
import AChart from "react-apexcharts";

const Seeds= ({todos, options}) =>{
    console.log(todos);
    const todoList = todos.length ? (
        todos.map( (todo, index)=> {
            console.log(todo)
            var option = options;
            option.chart.id ='chart-'.concat(String(index));
            //option.title.text = todo.name;
            console.log(index)
            return(
                <div className="col s6">
                    <div className="card">
                        <AChart
                        options={option}
                        series={[todo]}/>
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

export default Seeds;