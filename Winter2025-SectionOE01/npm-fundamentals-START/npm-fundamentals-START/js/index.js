// this is our main file because we've imported it in our html.

// import all of our CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

// import both chart functions
import {renderFoodThoughtsChart} from './food-thoughts-chart.js';
import {renderFoodTimesChart} from './food-times-chart.js';

// execute both chart functions
renderFoodThoughtsChart();
renderFoodTimesChart();