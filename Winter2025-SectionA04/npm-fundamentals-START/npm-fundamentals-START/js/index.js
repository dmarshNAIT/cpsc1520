// this is our main file because we've imported it in our html.

// import our CSS here
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

// import those 2 chart functions
import {renderFoodThoughtsChart} from './food-thoughts-chart.js';
import {renderFoodTimesChart} from './food-times-chart.js';

// run the chart functions
renderFoodThoughtsChart();
renderFoodTimesChart();