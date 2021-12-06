import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
    const dataPointvalues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointvalues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={Math.random()}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Chart;
