import React from 'react';
import {Bar} from "react-chartjs-2";

export const BarChart = (props) => {
const {fighters} = props;
    const fighterName = fighters.map( f => f.name);
    const fighterWin = fighters.map( f => f.win);
    const fighterTotal = fighters.map( f => f.total);
    const borderColorArray = fighters.map( f =>'rgba(255, 206, 86, 0.2)' );
    const backGroundArray = fighters.map( f => 'rgba(54, 162, 235, 0.2)' );
     const data = {
        labels: fighterName,
        datasets: [
            {label: "TOTAL FIGHTS",
             data: fighterTotal,
                borderColor: borderColorArray,
                backgroundColor: borderColorArray,
                pointBackGroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)',
            },
            {label: "WIN",
                data: fighterWin,
                borderColor: backGroundArray,
                backgroundColor: backGroundArray,
                pointBackGroundColor: 'rgba(54, 162, 235, 0.2)',
                pointBorderColor: 'rgba(54, 162, 235, 0.2)',
            },
        ]
    };
    return <Bar data = {data}/>
};