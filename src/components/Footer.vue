<template>
  <div class="footer">
    <footer>
        <p v-html="copyRtSymbol +title"></p>
    </footer>
    
  </div>
</template>

<script>

export default {
  
  data(){
    return{
        copyRtSymbol:'&copy; ',
        title:'BT3103'
        }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    background:rgb(122, 63, 100);
    padding:5px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
    text-align:center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 40px;
    vertical-align: middle;
}
p{
    align-content: center;
    color:ivory;
}
</style>