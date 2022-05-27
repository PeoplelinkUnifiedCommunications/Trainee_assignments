import React from 'react';

import { Line } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Product sales cart',
    },
  },
};
const values= {"1st Week":400, "2nd Week":500, "3rd Week":300, "4th week":400, "5th Week":900, "6th Week":200, "7th Week":1000, "8th Week":300, "9th Week":400, "10th Week":300}

const labels = ["1st Week", "2nd Week", "3rd Week", "4th week", "5th Week", "6th Week", "7th Week", "8th Week", "9th Week", "10th Week"];

export const data = {
  labels,
  datasets: [
    { 
      label: 'Product sales',
      data: labels.map((each) => values[each]),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}