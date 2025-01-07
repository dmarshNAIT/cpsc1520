// this is our main file because we've imported it in our html.

// import some stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

// import some functions
import {renderFoodThoughtsChart} from './food-thoughts-chart.js';
import {renderFoodTimesChart} from './food-times-chart.js';

// run those functions
renderFoodThoughtsChart();
renderFoodTimesChart();