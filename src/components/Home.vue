<template>
    <div id="main">
        <div id="chart">
            <barchart></barchart>
        
        </div>
        <div id="chart">
            <doughnut></doughnut>
        
        </div>
         <div id="chart">
            <linechart></linechart>
        </div>
       
    </div>
</template>

<script>
import barchart from '../barchart.js'
import doughnut from '../doughnut.js'
import linechart from '../linechart.js'
export default {
    components:{
        barchart,doughnut,linechart
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:240px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
</style>