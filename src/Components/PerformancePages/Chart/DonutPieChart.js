import './styles.css'
import DonutChart from 'react-donut-chart';
import React from 'react'

const DonutPieChart = () => {
    return (
        <div className='donut-div'>
            <DonutChart style={{height: '500px', width: '750'}}
                data={[
                    {
                        label: 'Give you up',
                        value: 25,
                    },
                    {
                        label: 'Give  up',
                        value: 25,
                    },
                    {
                        label: ' you up',
                        value: 25,
                    },
                    {
                        label: '',
                        value: 25,
                        isEmpty: true,
                    },
                ]}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
            />;
        </div>
    )
}

export default DonutPieChart