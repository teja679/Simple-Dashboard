import React from 'react'
import './styles.css'
import FeedbackIcon from '@mui/icons-material/Feedback';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ErrorIcon from '@mui/icons-material/Error';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const Performance = () => {
    const data = [
        {
            id: 1,
            name: 'Total Product',
            price: 180.75,
            icon1: <ShoppingBasketIcon  sx={{fontSize: '3rem'}} />,
            icon2: <TrendingUpIcon sx={{color: 'green', fontSize: '3rem'}} />,
        },
        {
            id: 2,
            name: 'Total Views',
            price: 180.75,
            icon1: <VisibilityIcon  sx={{fontSize: '3rem'}} />,
            icon2: <TrendingDownIcon sx={{color: 'red', fontSize: '3rem'}} />,
        },
        {
            id: 3,
            name: 'Total Sales',
            price: 180.75,
            icon1: <ShoppingCartIcon  sx={{fontSize: '3rem'}} />,
            icon2: <TrendingUpIcon sx={{color: 'green', fontSize: '3rem'}} />,
        },{
            id: 1,
            name: 'Total Users',
            price: 2.058346,
            icon1: <PeopleAltIcon  sx={{fontSize: '3rem'}} />,
            icon2: <TrendingUpIcon sx={{color: 'green', fontSize: '3rem', fontSize: '3rem'}} />,
        },
        {
            id: 3,
            name: 'Total feedbacks',
            price: 180.75,
            icon1: <FeedbackIcon  sx={{fontSize: '3rem'}} />,
            icon2: <TrendingUpIcon sx={{color: 'green', fontSize: '3rem'}} />,
        },
    ]
  return (
    <div className='performance-div'>
        <div className='menu-head'>
            <h1>Performance </h1>
            <ErrorIcon />
        </div>
        {data.map((item, index) => (
            <div className='lists-div'>
            <div className='lists'>
                {item.icon1}
                <div className='list'>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            </div>
            {item.icon2}
        </div>
        ))}
        <button>View more</button>
    </div>
  )
}

export default Performance