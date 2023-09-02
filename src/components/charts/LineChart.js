import ReactApexChart from 'react-apexcharts'
import { Typography } from 'antd'
import { LineChartOptions, LineChartSeries } from '../../config/config'

function LineChart() {
  return (
    <>
      <div className="linechart">
        <Typography.Text type="secondary">Balance</Typography.Text>
        <Typography.Title level={2}>$ 15,000</Typography.Title>
      </div>

      <ReactApexChart
        className="full-width"
        options={{ ...LineChartOptions, colors: ['#393939', '#dfe6e9'] }}
        series={LineChartSeries}
        type="bar"
        height={350}
        width={'100%'}
      />
    </>
  )
}

export default LineChart
