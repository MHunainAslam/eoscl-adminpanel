import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';
import { app_url } from '../../../config';
import axios from 'axios';
import { useState } from 'react';

const RevenueChart = () => {
    const getuser = localStorage.getItem("EosclDashboard");
    const usertoken = JSON.parse(getuser);
    const [Month, setMonth] = useState([])
    const [Count, setCount] = useState([])
    const [Year, setYear] = useState('')

    useEffect(() => {
        axios.get(`${app_url}/api/dashboard-charts?current_year=${Year}`, {
            headers: {
                'Authorization': `Bearer ${usertoken?.data?.token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response)
                setCount(response.data?.data?.count)
                setMonth(response.data?.data?.months)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
            });
    }, [Year])
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);
    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const ctx = chartContainer.current.getContext('2d');
            if (chartInstance.current) {
                chartInstance.current.destroy(); // Destroy previous chart instance
            }
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Month,
                    datasets: [{
                        label: '',
                        data: Count,
                        backgroundColor: [
                            '#26235a',
                            '#3029aa',
                            '#729FCF',
                            '#26235a',
                            '#3029aa',
                            '#b58a2c',
                            '#26235a',
                            '#b58a2c',
                            '#3029aa',
                            '#26235a',
                            '#3029aa',
                            '#5C3566',
                        ],

                        borderWidth: 0
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false, // This turns off the gridlines on the y-axis
                            }
                        },
                        x: {
                            beginAtZero: true,
                            grid: {
                                display: false, // This turns off the gridlines on the y-axis
                            }
                        }
                    }

                }
            });
        }
    }, [Count]);

    const [Years10, setYears10] = useState([])

    const getLastTenYears = () => {
        const currentYear = new Date().getFullYear();
        const lastTenYears = [];

        for (let i = 0; i < 10; i++) {
            lastTenYears.push(currentYear - i);
        }
        console.log('lastTenYears', lastTenYears);
        setYears10(lastTenYears)
        console.log(Years10);
        return lastTenYears;
    }
    useEffect(() => {
        getLastTenYears()

    }, [])


    return (
        <>
            <div className="card chart h-100">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="heading-m mb-0">
                            Revenue State
                        </p>
                        <select name="" className='form-select my-2 inp2 w-auto' id="" value={Year} onChange={(e) => setYear(e.target.value)}>
                            {Years10?.map((item, i) => (
                                <option value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="border-bottom"></div>
                    <canvas ref={chartContainer} width="400" id='0' height="200"></canvas>
                </div>
            </div>
        </>
    )
}

export default RevenueChart