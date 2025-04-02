// this is our main file because we've imported it in our html.

// import all our CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

// import stuff from the food files
import {renderFoodThoughtsChart} from './food-thoughts-chart.js';
import {renderFoodTimesChart} from './food-times-chart.js';

// run some functions
renderFoodThoughtsChart();
renderFoodTimesChart();
