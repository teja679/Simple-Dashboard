import ReactApexChart from "react-apexcharts";
import ErrorIcon from '@mui/icons-material/Error';
import './styles.css'
const HalfDonut = () => {
    const data = {
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
                <ErrorIcon sx={{fontSize: '2rem', backgroundColor: '#fff'}} />
            </div>
            <ReactApexChart options={data.options} series={data.series} type="donut" />
        </div>
    )
}
export default HalfDonut;