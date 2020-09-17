<template>
  <div id=app>
    <h1>{{msg}}</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text" v-model="item.name"/>
        <label>Item Category</label>
        <select v-model="item.category">
            <option id="Fountain Pen">Fountain Pen</option>
            <option id="Gel Pen">Gel Pen</option>
            <option id="2B Pencil">2B Pencil</option>
            <option id="4B Pencil">4B Pencil</option>
            <option id="Notebook">Notebook</option>
        </select>
        <label>Quantity</label>
        <input type="number" v-model="item.count"/>
        <label>Cost (SGD)</label>
        <input type="text" v-model="item.cost"/>
        <button v-on:click.prevent.once="addItem">Add Item</button>
    </form>
  </div>
</template>
<script>
import database from '../firebase.js'
export default {
  
  data(){
    return{
        msg:"Add Item",
        item:{
            name:'',
            category:'',
            count:'',
            cost:'',
            image:''
        }
        }
  },
  methods:{
      addItem(){
          console.log(this.item)
          database.collection('items').add(this.item)
          alert('saved')
          this.item.name=''
          this.item.category=''
          this.item.count=0
          this.item.cost=''
      }
  }
}
</script>
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}
p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;
    text-align: left;
}
input[type="text"],select,
input[type="number"],input[type="file"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>