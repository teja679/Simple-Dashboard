import ReactApexChart from "react-apexcharts";
import ErrorIcon from '@mui/icons-material/Error';
import './styles.css'
const HalfDonut = () => {
    const chartOptions = {
        labels: ['Open', 'Handled', 'Pending']
      }
    const data = {
        chartOptions: {
            labels: ['Open', 'Handled', 'Pending']
          },
        series: [20, 30, 41],
        options: {
            chart: {
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 90,
                    offsetY: 10
                }
            },
            grid: {
                padding: {
                    bottom: -90
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 400
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    };
    return (
        <div className="donut-div" id="chart">
            <div className="flex-div">
                <h1>My Activity</h1>
                <ErrorIcon sx={{fontSize: '2rem', backgroundColor: 'var(--darkgrey)'}} />
            </div>
            <ReactApexChart options={data.options} chartOptions={chartOptions} series={data.series} type="donut" />
        </div>
    )
}
export default HalfDonut;