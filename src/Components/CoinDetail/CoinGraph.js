import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
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
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function CoinGraph(props) {
    const { data } = props;
    const [days, setDays] = useState(1);
    const [chartData, getchartData] = useState([]);
    async function getHitoryData(name, days) {
        const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=INR&days=${days}`);
        getchartData(data.prices);
    }
    
    useEffect(() => {
        getHitoryData('bitcoin', 1);
    }, []);
    return (

        <Line data={{
            labels: chartData && chartData.map(item => {
                let date = new Date(item[0]);
                let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}: ${date.getMinutes()} AM`;
                return days == 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
                {
                    label: `Price for Past ${days} days`,
                    borderColor: '#E4A11B',
                    borderWidth: 2,
                    data: chartData && chartData.map(item => item[1])
                }
            ]
        }}
        options={{
            elements: {
                point: {
                    radius: 1
                }
            },
            title: {
                display: true,
                text: 'Historic Data',
                fontSize: 20
            },
            legend: {
                display: true,
                position: 'right'
            }
        }}/>
    )
}

export default CoinGraph;