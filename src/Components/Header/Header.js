import React from 'react'
import './styles.css'
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
const Header = () => {
    return (
        <div className='navbar'>
            <div className='menu-div'>
                <h2>Flup</h2>
            </div>
            <div className='links-div'>
                <header>MARKETING</header>
                <a href='/' className='links'>
                    <DashboardIcon />
                    <p>Dashboard</p>
                </a>
                <a href='/' className='links'>
                    <LocalGroceryStoreIcon />
                    <p>Marketplace</p>
                </a>
                <a href='/' className='links'>
                    <ShoppingBasketIcon />
                    <p>Orders</p>
                </a>
                <a href='/' className='links'>
                    <AnalyticsOutlinedIcon />
                    <p>Tracking</p>
                </a>
                <a href='/' className='links'>
                    <PeopleAltOutlinedIcon />
                    <p>Customers</p>
                </a>
                <a href='/' className='links'>
                    <DiscountOutlinedIcon />
                    <p>Discounts</p>
                </a>
                <br />
                <header>PAYMENTS</header>
                <a href='/' className='links'>
                    <p>Ledger</p>
                </a>
                <a href='/' className='links'>
                    <p>Taxes</p>
                </a>
                <br />
                <header>SYSTEM</header>
                <a href='/' className='links'>
                    <p>Settings</p>
                </a>
                <a href='/' className='links'>
                    <p>Dark Mode</p>
                </a>
            </div>
        </div>
    )
}

export default Header