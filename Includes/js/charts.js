const backTestingData = {
    labels: Dates_BT,
    datasets: [{
        label: 'Zenith Innovest Return',
        data: Model_Return_BT,
        borderColor: 'blue',
        borderWidth: 2,
        pointRadius: 0,
        fill: false
    }, {
        label: 'S&P 500 Index Return',
        data: SnP_Return_BT,
        borderColor: 'red',
        borderWidth: 2,
        pointRadius: 0,
        fill: false
    }]
};

const historicalReturnData = {
    labels: ['Zenith Innovest', 'S&P 500 Index'],
    datasets: [{
        data: [Overall_Model_Return_HR, Overall_SnP_Return_HR],
        backgroundColor: ['green', 'orange' ]
    }]
};

// Plugins for charts
const backgroundColorPlugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};

// Options for the charts
const lineChartOptions = {
    responsive: true,
    scales: {
        x: {
            type: 'time',
            time: {
                unit: 'year'
			},
            display: true,
            scaleLabel: {
                display: true
            }
        },
        y: {
            display: true,
            scaleLabel: {
                display: true
            }
        }
    },
    plugins: {
        tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
                title: context => {
                    const date = new Date(context[0].parsed.x);
                    const formattedDate = date.toLocaleString([], { dateStyle: 'long'});
                    return formattedDate;
				}
			}
        }
    },
    hover: {
        mode: 'index',
        intersect: false
    }
};

const barChartOptions = {
    scales: {
        x: {
            display: false
        },
        y: {
            display: false
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: { mode: null },
        datalabels: {
            anchor: 'end',
            align: 'bottom',
            color: '#fafafa',
            font: {
                family: 'Garamond',
                size: 18
            },
            formatter: function (value, context) {
                return context.chart.data.labels[context.dataIndex] + '\n+' + value + '%';
            },
            textAlign: 'right'
        }
    },
    hover: { mode: null },
    responsive: true,
    maintainAspectRatio: false
};

// Render the charts
const backTestingChart = new Chart(document.getElementById('backTestingChart').getContext('2d'), {
    type: 'line',
    data: backTestingData,
    options: lineChartOptions
});

const historicalReturnChart = new Chart(document.getElementById('historicalReturnChart').getContext('2d'), {
    type: 'bar',
    data: historicalReturnData,
    options: barChartOptions,
    plugins: [ChartDataLabels, backgroundColorPlugin]
});