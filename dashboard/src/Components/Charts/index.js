import React from 'react';
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
import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';
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
      position: 'top',
    },
    title: {
      display: true,
      text: 'PRODUCT SALES',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const numbers = {'January': 100 ,'February':180, 'March':170, 'April':350, 'May':290, 'June':620, 'July':660 };
export const data = {
  labels,
  datasets: [
    {
      label: 'Month',
      data: labels.map((each) => numbers[each]),
      borderColor: '#0047b3',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

function Charts() {
  return <Line options={options} data={data} />;
}
export default Charts;
