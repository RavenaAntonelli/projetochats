<template>
    <div>
      <div></div>
    </div>
  </template>
  <script>
  import Highcharts from 'highcharts';
  
  export default {
  name : "BasicLineChart",
  props: {
    colors: Array,
    data: Array,
    categories: Array,
    sideText: String
  },
  data : function() {
     return {
        target: undefined
     }
  },
  mounted() { 
     this.target = Highcharts.chart(this.$el, {
       title: {
         text: ''
       },
       subtitle: {  
         text: ''
       },
       colors: this.colors,
       legend: {
         enabled: false
       },
       yAxis: {
         title: {
           text: this.sideText
         }
       },
       xAxis: {
         categories: this.categories
       },
       series: [{
         data: this.data
       }],
       responsive: {
         rules: [{
           condition: {
              maxWidth: 500
           }
        }]
      }
      });
   },
   beforeDestroy: function() {
      this.target.destroy();
   },
  }
  </script>