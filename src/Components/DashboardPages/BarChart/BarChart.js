// import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";
import './styles.css'
import ErrorIcon from '@mui/icons-material/Error';


const BarChart = () => {
    const options={
        responsive: true,
        legend: {
            display: false,
        },
        type:'bar',
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true,
            }]
        }
    }

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'var(--blue)',
            borderColor: 'rgb(36, 166, 206)',
            borderWidth: 1,
            stack: 1,
            hoverBackgroundColor: 'darkBlue',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40, 45, 79, 10, 41, 16, 85, 20]
          },
          {
            label: 'My second dataset',
            backgroundColor: 'rgb(184, 184, 58)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            stack: 2,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [45, 79, 10, 41, 16, 85, 20, 65, 59, 80, 81, 56, 55, 40]
          }
        ]
    }
  return (
    <div className='bar-div'>
        <div className='title-div'>
            <div className='title-flex'>
              <div className='title'>
                <p>Order Summary</p>
                <ErrorIcon />
              </div>
              <p>Monthly-Weekly-Today</p>
            </div>
            <h1>Total Order: 52.940</h1>
        </div>
        <Bar
                data={data}
                width={null}
                height={null}
                options={options}
            />
    </div>
  )
}

export default BarChart