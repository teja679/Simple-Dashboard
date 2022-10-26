import React from 'react'
import './styles.css'
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
            icon2: <TrendingUpIcon />,
        },
        {
            id: 2,
            name: 'Total Product',
            price: 180.75,
            icon1: <ShoppingBasketIcon  sx={{fontSize: '3rem'}} />,
            icon2: <TrendingUpIcon />,
        },
        {
            id: 3,
            name: 'Total Product',
            price: 180.75,
            icon1: <ShoppingBasketIcon  sx={{fontSize: '3rem'}} />,
            icon2: <TrendingUpIcon />,
        },{
            id: 1,
            name: 'Total Product',
            price: 180.75,
            icon1: <ShoppingBasketIcon  sx={{fontSize: '3rem'}} />,
            icon2: <TrendingUpIcon />,
        },
        {
            id: 2,
            name: 'Total Product',
            price: 180.75,
            icon1: <ShoppingBasketIcon  sx={{fontSize: '3rem'}} />,
            icon2: <TrendingUpIcon />,
        },
        {
            id: 3,
            name: 'Total Product',
            price: 180.75,
            icon1: <ShoppingBasketIcon  sx={{fontSize: '3rem'}} />,
            icon2: <TrendingUpIcon />,
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