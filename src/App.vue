<template>
  <div class="container">
    <div class="well">
      <FiltersCharts></FiltersCharts> 
    </div>

    <div class="row">
      <div class="col-md-6">
        <CountriesCharts></CountriesCharts>
      </div>

      <div class="col-md-6">
        <LanguagesCharts></LanguagesCharts>
      </div>
    </div>
  </div>  
</template>

<script>
import CountriesCharts from './charts/CountriesCharts.vue'
import FiltersCharts from './charts/FiltersCharts.vue'
import LanguagesCharts from './charts/LanguagesCharts.vue'
import MOCK_DATA from './MOCK_DATA'; 

export default{

    components: {
      FiltersCharts, 
      CountriesCharts,
      LanguagesCharts
    },
    mounted() {
      this.$store.commit('SET_LIST', MOCK_DATA)
    }
    
  }
</script>

