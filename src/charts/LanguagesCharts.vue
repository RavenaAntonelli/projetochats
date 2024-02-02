<template>
    <div class="languages-container">
        <div id="container-for-languages"></div>
    </div>
</template>

<script>
import BaseCharts from './BaseCharts.vue';
import Highcharts from 'highcharts';
import _ from 'lodash';

export default {
    name: 'LanguagesCharts',
    extends: BaseCharts,
    methods: {
        dataSource() {
            const languages = this.list.map(item => item.language)
            // this.setup()
             // Categorias e dados
            const base =  _(languages)
                    .countBy()
                    .map((y, name) => ({ y, name}))

                    .orderBy(['y'], ['desc'])
                    .value()
           
            const subset =  base.slice(0,10)
            // acc acumulator
            const total = subset.reduce((acc, item) => {
                return acc + item.y
            }, 0);

            const finalData = subset.map(item => {
                item.y  = (item.y /total) * 100

                return item;
            });
            console.log(finalData);
            this.setup(finalData);
        },
        setup(finalData) {

            // const { finalData } = obj
           
            Highcharts.chart('container-for-languages', {
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        text: 'Linguagens'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    subtitle: {
                        text:
                        'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
                    },
                    plotOptions: {
                        pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<span style="font-size: 1.2em"><b>{point.name}</b></span><br>' +
                                '<span style="opacity: 0.6">{point.percentage:.1f} %</span>',
                            connectorColor: 'rgba(128,128,128,0.5)'
                        }
                    }           },
                    series: [
                        {
                            name: 'Percentage',
                            colorByPoint: true,
                            data:finalData
                        }
                    ]
                });

                                
                                

            }
        }
}
</script>

<style>
.languages-container {
  width: 50%; 
  text-align: right;
}
</style>
