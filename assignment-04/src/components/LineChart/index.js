import React from 'react';

import { Line } from 'react-chartjs-2';

import { faker } from '@faker-js/faker';

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

const labels = ["1st Week", "2nd week", "3rd week", "4th weeek", "5th week", "6th week", "7th week", "8th week", "9th week", "10th week"];

export const data = {
  labels,
  datasets: [
    { 
      label: 'Product sales',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}