import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props){
    const chartDataPoints =[
        {label:'jan' ,value:0},
        {label:'feb' ,value:0},
        {label:'March' ,value:0},
        {label:'april' ,value:0},
        {label:'may' ,value:0},
        {label:'june' ,value:0},
        {label:'july' ,value:0},
        {label:'aug' ,value:0},
        {label:'sep' ,value:0},
        {label:'oct' ,value:0},
        {label:'nov' ,value:0},
        {label:'dec' ,value:0},
    ];

    for( const e of props.expense){
        const expenseMonth = e.date.getMonth(); //starting at  0 => january =>
        chartDataPoints[expenseMonth].value += e.amount;
    }

    return <div>
        <Chart dataPoints ={chartDataPoints} />
    </div>

}
export default ExpensesChart;