<template>
   <div>
    <header>
        <nav>
        <h1 >{{ msg }}</h1>
        <router-link to="/" exact>Home</router-link>
        <router-link to="/add" exact>Add Item</router-link>
        <router-link to="/list" exact>List</router-link>
        <router-link to="/axios" exact>Axios</router-link>
        </nav>
    </header>
    </div>
  
</template>

<script>

export default {
  
  data(){
    return{
        
    }
  },
  props:
  {
    msg:{
        type:String
    }
  }
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(122, 63, 100);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory
}
a{
    padding:10px;
    color : ivory
}
</style>