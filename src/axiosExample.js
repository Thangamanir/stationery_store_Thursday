import {Line} from 'vue-chartjs'
import axios from 'axios'
//Comment added
export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          labels:[],
          datasets: [
            {
              label: 'Bitcoin price in USD',
               data:[],
              borderWidth:0.5,
              borderColor:"magenta",
              backgroundColor:'orange',
              fill:false
            }
          ]
          
        },
        options: {
           
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-08-20&end=2020-09-12'
         ).then(response=>{
          console.log("Response==>")
          console.log(response)
        this.results=response.data.bpi
        console.log("BPI==>")
        console.log(this.results)
        for(let key in this.results){
            this.chartdata.datasets[0].data.push(this.results[key])
            this.chartdata.labels.push(key+'')
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
       // console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}