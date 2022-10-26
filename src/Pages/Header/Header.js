import React from 'react'
import './styles.css'
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import SettingsIcon from '@mui/icons-material/Settings';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
const Header = () => {
    const data = [
        {
            id: 1,
            name: 'Dashboard',
            link: <DashboardIcon sx={{ fontSize: '2.5rem' }} />,
        }, {
            id: 2,
            name: 'Marketplace',
            link: <LocalGroceryStoreIcon sx={{ fontSize: '2.5rem' }} />,
        }, {
            id: 2.5,
            name: 'Orders',
            link: <ShoppingBasketIcon sx={{ fontSize: '2.5rem' }} />,
        }, {
            id: 4,
            name: 'Tracking',
            link: <AnalyticsOutlinedIcon sx={{ fontSize: '2.5rem' }} />,
        }, {
            id: 5,
            name: 'Customers',
            link: <PeopleAltOutlinedIcon sx={{ fontSize: '2.5rem' }} />,
        }, {
            id: 6,
            name: 'Discounts',
            link: <DiscountOutlinedIcon sx={{ fontSize: '2.5rem' }} />,
        },
    ]
    return (
        <div className='navbar'>
            <div className='links-div'>
                {/* <header>MARKETING</header> */}
                {data.map((item, index) => (
                    <a href='/' className='links'>
                        <p>
                            {item.link}
                        </p>
                    </a>
                ))}
            </div>
            <div>
                <a href='/' className='links'>
                    <p>
                        <SettingsIcon sx={{ fontSize: '2.5rem' }} />
                    </p>
                </a>
                <a href='/' className='links'>
                    <p>
                        <SendToMobileIcon sx={{ fontSize: '2.5rem' }} />
                    </p>
                </a>
              
            </div>
        </div>
    )
}

export default Header