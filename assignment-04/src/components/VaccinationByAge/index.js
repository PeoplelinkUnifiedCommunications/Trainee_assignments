import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);


const VaccinationByAge = (props)=> {
   console.log(props)

  const data = {
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

  return (
    <div className="vaccination-by-age-container">
      <Doughnut data={data} />; 
    </div>
  )
}

export default VaccinationByAge
