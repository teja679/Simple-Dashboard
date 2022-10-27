// import React, { useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";
import './styles.css'
import ErrorIcon from '@mui/icons-material/Error';
import { useState } from 'react';

const BarChart = () => {
  const [graph, setGraph] = useState(true)
  const [days, setDays] = useState(30)
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true,
        type: "linear",
        display: true,
        position: "left",
      }],
      yAxes: [{
        stacked: true,
        type: "linear",
        display: true,
        position: "right",
      }]
    }
  }
  const label1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
  const data = {
    labels: label1,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#3a80e9',
        borderColor: '#3a80e9',
        borderWidth: 1,
        stack: 1,
        hoverBackgroundColor: 'var(--blue',
        hoverBorderColor: 'blue',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 79, 10, 41, 16, 85, 20]
      },
      {
        label: 'My second dataset',
        backgroundColor: '#61c96f',
        borderColor: '#61c96f',
        borderWidth: 1,
        stack: 2,
        hoverBackgroundColor: '#61c96f',
        hoverBorderColor: '#61d96f',
        data: [45, 79, 10, 41, 16, 85, 20, 65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }

  // const handleChange = async (event) => {
  //   setDays(event.target.value);
  //   const prices_data = await getPrices(data.id, event.target.value, type);
  //   setPrices(prices_data);
  //   const priorDate = getPriorDate(event.target.value);
  //   var dates = getDaysArray(priorDate, today);
  //   setChartData({
  //     labels: dates,
  //     datasets: [
  //       {
  //         data: prices_data?.map((data) => data[1]),
  //       },
  //     ],
  //   });
  // };
  return (
    <div className='bar-div'>
      <div className='title-div'>
        <div className='title-flex'>
          <div className='title'>
            <p>Order Summary</p>
            <ErrorIcon />
          </div>
          {/* <ColorToggleButton /> */}
          {/* <button className='period'>Monthly</button> */}
          <button className='graphBtn' onClick={(() => setGraph(!graph))}>{graph ? 'Line Graph' : 'Bar Graph'}</button>
        </div>
        <h1>Total Order: 52.940</h1>
      </div>
      {graph ?
        <Bar data={data} width={null}
          height={null} options={options}
        /> : <Line data={data} width={null}
          height={null} options={options}
        />}
    </div>
  )
}

export default BarChart