export const LineChartSeries = [
  {
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43, 44, 55, 78, 66, 44, 50]
  },
  {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27, 56, 78, 55, 78, 20, 40]
  }
]

export const LineChartOptions = {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  yaxis: {
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
        colors: ['#8c8c8c']
      }
    }
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    }
  },
  xaxis: {
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
        colors: [
          '#8c8c8c',
          '#8c8c8c',
          '#8c8c8c',
          '#8c8c8c',
          '#8c8c8c',
          '#8c8c8c',
          '#8c8c8c',
          '#8c8c8c',
          '#8c8c8c',
          '#8c8c8c',
          '#8c8c8c',
          '#8c8c8c'
        ]
      }
    },
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
  },
  fill: {
    opacity: 1
  }
}
