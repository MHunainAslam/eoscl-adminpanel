import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';
import { app_url } from '../../../config';
import axios from 'axios';

const RevenueChart = () => {
    const getuser = localStorage.getItem("EosclDashboard");
    const usertoken = JSON.parse(getuser);

    // useEffect(() => {
    //     axios.get(`${app_url}/api/dashboard-charts`, {
    //         headers: {
    //             'Authorization': `Bearer ${usertoken?.data?.token}`,

    //         }
    //     })
    //         .then(response => {
    //             // Handle successful response here
    //             console.log(response)

    //         })
    //         .catch(error => {
    //             // Handle error here
    //             console.error(error);
    //         });
    // }, [])
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
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'jun', 'July', 'Aug', 'Sep', 'Nov', 'Dec'],
                    datasets: [{
                        label: '',
                        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
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
    }, []);

    return (
        <>
            <div className="card chart h-100">
                <div className="card-body">
                    <p className="heading-m">
                        Revenue State
                    </p>
                    <div className="border-bottom"></div>
                    <canvas ref={chartContainer} width="400" id='0' height="200"></canvas>
                </div>
            </div>
        </>
    )
}

export default RevenueChart