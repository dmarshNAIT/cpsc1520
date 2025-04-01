// import chart
import { Chart,
    LineController,
    LineElement,
    BarElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Title,
    Tooltip,
    SubTitle,
    Utils} from 'chart.js'

// register our controller
Chart.register(LineController,
    LineElement,
    BarElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Title,
    Tooltip,
    SubTitle)

// import files
import {getFoodTimesKeys, getFoodTimesValues} from './food.js'

// create a render function
function renderFoodTimesChart () {
    const chartElement = document.querySelector('#food-times-chart');
  
    const data = {
      labels: getFoodTimesKeys(),
      datasets: [{
        label: 'How hungry I am',
        data: getFoodTimesValues(),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
  
    const config = {
      type: 'line',
      data: data,
    };
  
    const myChart = new Chart(chartElement, config)
  }

// export the function
export {renderFoodTimesChart}