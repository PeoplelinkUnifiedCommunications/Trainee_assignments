// import { PieChart, Legend, Cell, ResponsiveContainer } from "recharts"
import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [ "Ordered" ,"Pending" ,"Deliverd","Total"],
  datasets: [
    {
      label: 'Languages scales',
      data: [ 40, 25, 15, 50],
      backgroundColor: [
        "blue",
        "yellow",
        'rgba(236, 88, 19, 0.923)', 
        "rgb(67, 67, 210)",
      ],
      borderColor: [
        "blue",
        "yellow",
        'rgba(236, 88, 19, 0.923)', 
        "rgb(67, 67, 210)",
      ],
      borderWidth: 1,
    },
  ],
};

function PieCharts() {
  return <Doughnut data={data} />;
}
export default PieCharts

