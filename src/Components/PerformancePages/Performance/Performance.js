import React from 'react'
import './styles.css'
import ErrorIcon from '@mui/icons-material/Error';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const Performance = () => {
  return (
    <div className='performance-div'>
        <div className='menu-head'>
            <h1>Performance </h1>
            <ErrorIcon />
        </div>
        <div className='lists-div'>
            <div className='lists'>
                <ShoppingBasketIcon  sx={{fontSize: '3rem'}} sx={{fontSize: '3rem'}} />
                <div className='list'>
                    <p>Total Product</p>
                    <p>180.675</p>
                </div>
            </div>
             <TrendingUpIcon />
        </div>
        <div className='lists-div'>
            <div className='lists'>
                <ShoppingBasketIcon  sx={{fontSize: '3rem'}} />
                <div className='list'>
                    <p>Total Product</p>
                    <p>180.675</p>
                </div>
            </div>
             <TrendingUpIcon />
        </div>
        <div className='lists-div'>
            <div className='lists'>
                <ShoppingBasketIcon  sx={{fontSize: '3rem'}} />
                <div className='list'>
                    <p>Total Product</p>
                    <p>180.675</p>
                </div>
            </div>
             <TrendingUpIcon />
        </div>
        <div className='lists-div'>
            <div className='lists'>
                <ShoppingBasketIcon  sx={{fontSize: '3rem'}} />
                <div className='list'>
                    <p>Total Product</p>
                    <p>180.675</p>
                </div>
            </div>
             <TrendingUpIcon />
        </div>
        <button>View more</button>
    </div>
  )
}

export default Performance