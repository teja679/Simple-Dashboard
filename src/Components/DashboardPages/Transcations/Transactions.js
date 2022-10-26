import React from 'react'
import './styles.css'
import ErrorIcon from '@mui/icons-material/Error';

const Transactions = () => {

    const data = [
        {
            id: 1,
            name: 'Super Packaging',
            date: 'October 26, 2022',
            customer: 'Marsha Jola',
            price: '$250,39',
            status: 'recieved',
        },
        {
            id: 2,
            name: 'Super Packaging',
            date: 'October 26, 2022',
            customer: 'Marsha Jola',
            price: '$250,39',
            status: 'recieved',
        },
        {
            id: 3,
            name: 'Super Packaging',
            date: 'October 26, 2022',
            customer: 'Marsha Jola',
            price: '$250,39',
            status: 'recieved',
        },
        {
            id: 3,
            name: 'Super Packaging',
            date: 'October 26, 2022',
            customer: 'Marsha Jola',
            price: '$250,39',
            status: 'recieved',
        },
        {
            id: 3,
            name: 'Super Packaging',
            date: 'October 26, 2022',
            customer: 'Marsha Jola',
            price: '$250,39',
            status: 'recieved',
        },
    ]
  return (
    <div className='transactions'>
        <div className='header'>
            <h1>Last Transaction</h1>
            <ErrorIcon />
        </div>
        <table>
            <tr className='trow'>
                <th>No</th>
                <th>Product Name</th>
                <th>Date</th>
                <th>Customers</th>
                <th>Price</th>
                <th>Status Orders</th>
                <th>Action</th>
            </tr>
            {data.map((item, index) => (
                <tr key={item.id} className='trow'>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.customer}</td>
                    <td>{item.price}</td>
                    <td>{item.status}</td>
                    <td>...</td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default Transactions