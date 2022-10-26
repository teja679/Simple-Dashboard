import React from 'react'
import './styles.css'
import BarChart from '../../Components/DashboardPages/BarChart/BarChart'
import Search from '../../Components/DashboardPages/Search/Search'
import Transactions from '../../Components/DashboardPages/Transcations/Transactions'

const Dashboard = () => {
  return (
    <div className='dashboard-div'>
        <Search />
        <BarChart />
        <Transactions />
    </div>
  )
}

export default Dashboard