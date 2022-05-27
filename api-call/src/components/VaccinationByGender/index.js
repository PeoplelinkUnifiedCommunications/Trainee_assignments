import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function VaccinationByGender(props){
    const {byGenderDetails} = props
   
    const lablesList = byGenderDetails.map((each)=>each.gender)

    const values = byGenderDetails.map((each)=>each.count)


    const data = {
        labels:lablesList,
        datasets: [
          {
            label: 'Languages scales',
            data: values,
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

    return(
        <Doughnut data={data} />
    )
}
export default VaccinationByGender

