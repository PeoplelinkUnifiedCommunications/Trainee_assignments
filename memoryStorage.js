const axios = require('axios');

let apiData = new Map(); // Variable to store API data

// Fetch data from the API
async function fetchData() {
  try {
    const response = await axios.get('https://dummyjson.com/products/1');
    apiData = response.data; // adding the data to the variable
    console.log('API data has been fetched and stored.');
    console.log(apiData);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();

// Access the data
