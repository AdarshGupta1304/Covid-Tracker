import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import '../../../node_modules/react-linechart/dist/styles.css';
import './Line_Chart.css';

import { GlobalHistoricalAPI } from '../API/GlobalDataAPI';

const LineChart = () => {


    const [lineData,setLineData] = useState({
        labels : [],
        datasets: [{},{},{}],
    });

    useEffect(() => {
        const historyData = async () => {
            let data = await GlobalHistoricalAPI();
            let history_data = data.data;
            console.log('history data : ',history_data);
            //
            let getDate = Object.keys(history_data.cases);
            let getCases = Object.values(history_data.cases);
            let getRecovered = Object.values(history_data.recovered);
            let getDeaths = Object.values(history_data.deaths);

            setLineData({labels: getDate});
            setLineData({
                            datasets:[
                            {
                                label: 'Cases',
                                data : getCases,
                                fill: true,
                                borderColor: 'Blue',
                                backgroundColor: 'lightBlue',
                                borderCapStyle: 'butt',
                                lineTension: 0.1,
                                key: getCases,
                            },
                            {
                                label: 'Recovered',
                                data: getRecovered,
                                fill: true,
                                borderColor: 'Green',
                                backgroundColor: 'lightgreen',
                                lineTension: 0.1,
                                key: getRecovered,
                            },
                            {
                                label: 'Deaths',
                                data: getDeaths,
                                fill: true,
                                borderColor: 'red',
                                backgroundColor: 'lightCoral',
                                lineTension: 0.1,
                                key: getDeaths,
                            }
                        ],
                        });
        }
        historyData();
    },[]);

    const datasetKeyProvider=()=>{ 
        return btoa(Math.random()).substring(0,12)
    } 


    return(
        <div className="container my-4 mx-auto p-4 card shadow lineChart">
            <h3 className="text-muted font-italic">Cases For Past Few Days</h3>
            <Line
                width={3}
                height={1}
                data={lineData}
                datasetKeyProvider={datasetKeyProvider}
                className="mainChart"
            />
        </div>
    );
}

export default LineChart;