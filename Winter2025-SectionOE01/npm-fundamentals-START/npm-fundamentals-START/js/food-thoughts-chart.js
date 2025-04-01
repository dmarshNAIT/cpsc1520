// import chart
import { Chart,
    DoughnutController,
    ArcElement,
    Legend,
    Title,
    Tooltip,
    SubTitle} from 'chart.js'

// register our controller
Chart.register(DoughnutController,
    ArcElement,
    Legend,
    Title,
    Tooltip,
    SubTitle)

    
// import files
import {getFoodThoughtKeys, getFoodThoughtsValues} from './food.js'

// create a render function
const renderFoodThoughtsChart= () => {
    // get the chart element
    const chartElement = document.querySelector('#food-thoughts-chart');
  
    // let's take a look at the data and let's make a 
    // donut chart... I know right
    const data = {
      labels: getFoodThoughtKeys(),
      datasets: [{
        label: 'Food Thoughts',
        data: getFoodThoughtsValues(),
        backgroundColor: [
           'red',
           'green',
           'blue',
           'yellow',
           'orange',
           'purple',
           'black',
           'gray'
        ],
        hoverOffset: 4
      }]
    };
  
    const config = {
      type: 'doughnut',
      data: data,
    };
  
    const myChart = new Chart(chartElement, config)
  }

// export the function

export {renderFoodThoughtsChart}