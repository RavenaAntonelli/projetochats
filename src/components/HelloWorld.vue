<template>
  <div class="charts-container" style="position: relative; height:50vh; width:80vw">
    <HighchartsLineChart />
  </div>
</template>

<script>
import HighchartsLineChart from './HighchartsLineChart.vue';

export default {
  name: 'HelloWorld',
  components: {
    HighchartsLineChart,
  },
};
</script>

