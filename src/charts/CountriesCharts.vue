<template>
    <div class="chart-container">
        <div id="container-for-countries"></div>
    </div>
</template>

<script>
import _ from 'lodash';
import Highcharts from 'highcharts';
import BaseCharts from './BaseCharts.vue';

export default {
    name: 'CountriesCharts',
    extends: BaseCharts,
    methods: {
        // Utilizado para ler a lista e calcular a fonte de dados do grafico
        dataSource() {

            // 1. Extrair os paises
            // 2. Contar a quantidade de ocorrências de cada um
            // 3. Transfomar objetos em arrays
            // 4. Ordenar do maior para o menor
            const countries = this.list.map(item => item.country)
            
            // Categorias e dados
            const base =  _(countries)
                    .countBy()
                    .map((value, key) => ({ key, value}))

                    .orderBy(['value'], ['desc'])
                    .value()
        
            const categories = base.map(item => item.key)
            window.console.log(categories);
            const values = base.map(item => item.value)
            window.console.log(values);
            this.setup({categories, values})
        },
        // Montar o gráfico e exibi-lo na tela, obs: só é chamado quando a fonte de dados estiver pronta
        setup(obj) {
            const { categories, values} = obj
            Highcharts.chart('container-for-countries', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Países',
                align: 'left'
            },
            subtitle: {
                text:
                    'Source: <a target="_blank" ' +
                    'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
                align: 'left'
            },
            xAxis: {
                categories: categories,
                crosshair: true,
                accessibility: {
                    description: 'Countries'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Quantidade (Inteiros)'
                }
            },
            tooltip: {
                valueSuffix: ' (Inteiros)'
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [
                {
                    name: 'Países',
                    data: values
                }
            ]
        });


        },
    }
}
</script>

<style>
.chart-container {
  width: 50%; 
}
</style>
