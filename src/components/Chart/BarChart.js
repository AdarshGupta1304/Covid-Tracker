import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';

import './BarChart.css';

const BarChart = ({cases: {totalCases,recovered,deaths}, country}) => {


    // const [flag,setFlag] = useState(false);

    // const [chartData,setChartData] = useState({
    //     labels: [],
    //     datasets: [],
    // });

    // useEffect( () => {
    //     setChartData({labels: ['Cases', 'Recovered', 'Deaths']})
    //     setChartData({
    //         datasets : [{
    //                 label: 'People',
    //                 backgroundColor: 'lightBlue',
    //                 borderColor: 'blue',
    //                 borderWidth: 2,
    //                 data: [totalCases,recovered,deaths]
    //             }]
            
    //     });
    //     // setFlag(true);
    //     console.log('Bar chart data is : ',totalCases,' and ',recovered,' and ',deaths);
    //     // console.log('bar : ',props);
    // }, [totalCases,recovered,deaths]);



    return(
            <div className="container my-4 mx-auto p-4 card shadow lineChart">
                <Bar 
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            data: [totalCases, recovered, deaths],
                            backgroundColor: ['rgb(90, 211, 252)', 
                                            'rgb(127, 250, 127)', 
                                            'rgb(252, 134, 134)'],

                        }]
                    }}
                    options={{
                        maintainAspectRatio: true,
                        title:{
                            display: true,
                            text: `Current State in ${country} ` ,
                            fontSize: 20,
                        },
                        legend:{
                            display: false,
                            // position: 'center',
                        },
                }}
                width={95}
                height={55}
                />
            </div>
    );
}

export default BarChart;