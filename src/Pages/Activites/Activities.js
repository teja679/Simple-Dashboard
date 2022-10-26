import React from 'react'
import './styles.css'
import Performance from '../../Components/PerformancePages/Performance/Performance'
import DonutPieChart from '../../Components/PerformancePages/Chart/DonutPieChart'
import HalfDonut from '../../Components/PerformancePages/Chart/HalfDonut'

const Activities = () => {
  return (
    <div className='activities'>
        <Performance />
        <HalfDonut />
    </div>
  )
}

export default Activities