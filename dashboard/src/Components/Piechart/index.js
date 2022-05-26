import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Orange', 'Yellow','Blue', 'DarkBlue'],
  datasets: [
    {
      label: 'Order Status',
      data: [9, 19, 13, 5],
      backgroundColor: [
        '#ff6600',
        '#ffff1a',
        '#4d94ff',
        '#1a1aff',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Piechart() {
  return <Doughnut data={data} />;
}
export default Piechart;