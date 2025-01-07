// this is our main file because we've imported it in our html.

// import CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css';

// import some functions from 2 new .js files
import {renderFoodTimesChart} from './food-times-chart.js'
import {renderFoodThoughtsChart} from './food-thoughts-chart.js'

// call those new functions
renderFoodTimesChart();
renderFoodThoughtsChart();