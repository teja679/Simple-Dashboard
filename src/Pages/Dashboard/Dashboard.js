import React from 'react'
import './styles.css'
import BarChart from '../../Components/DashboardPages/BarChart/BarChart'
import Search from '../../Components/DashboardPages/Intro/Search'

const Dashboard = () => {
  return (
    <div className='dashboard-div'>
        <Search />
        <BarChart />
    </div>
  )
}

export default Dashboard