import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartOptions from "./highcharts.options";
import drilldow from "highcharts/modules/drilldown";
drilldow(Highcharts);
HighchartOptions(Highcharts);

const options = {
    chart: {
        type: 'column',
        events: {
            drilldown: true,
        },
    },
    title: {
        text: 'Browsers mais populares em 2017'
    },
    subtitle: {
        text: 'Source: Site W3Counter (www.w3counter.com) - Dados em %'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Porcentagem'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 5,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> do total<br/>'
    },
    series: [{
        name: 'Navegador',
        colorByPoint: true,
        data: [{
            name: 'IE/Edge',
            y: 8,
            drilldown: 'IE/Edge'
        }, {
            name: 'Chrome',
            y: 58.8,
            drilldown: 'Chrome'
        }, {
            name: 'Firefox',
            y: 9.3,
            drilldown: 'Firefox'
        }, {
            name: 'Safari',
            y: 14.5,
            drilldown: 'Safari'
        }, {
            name: 'Opera',
            y: 4,
            drilldown: 'Opera'
        }]
    }],
    drilldown: {
        series: [{
            name: 'IE/Edge',
            id: 'IE/Edge',
            data: [
                ['v11.0', 24.13],
                ['v8.0', 17.2],
                ['v9.0', 8.11],
                ['v10.0', 5.33],
                ['v6.0', 1.06]
            ]
        },
        {
            name: 'Chrome',
            id: 'Chrome',
            data: [
                ['v40.0', 5],
                ['v41.0', 4.32],
                ['v42.0', 3.68],
                ['v39.0', 2.96],
                ['v36.0', 2.53],
                ['v43.0', 1.45]
            ]
        }
        ]
    }
}

const App = () => <div>
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
</div>

export default App