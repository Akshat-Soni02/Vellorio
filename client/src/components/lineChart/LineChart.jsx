import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData }) {
  if (!chartData) {
    return <div>Loading...</div>; // or render a placeholder, handle this according to your needs
  }
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;