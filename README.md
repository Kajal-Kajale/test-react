This is a simple react application where we fetch data from an API and display a value from the API.
I have used a bitcoin tracker API 'https://api.coindesk.com/v1/bpi/currentprice.json' in which I fetch the currency rates for 3 currencies (EUR, GBP, USD)
I have implemented the code in the 'App.js' file within the 'App' component.

The process that I followed is:
- using the ComponentDidMount() lifecycle method to fetch API.
- then I used 'state' and 'setState' to intialize and update the necessary data from API.
- then I rendered the JSX code to display the output

I have used basic components from Material UI (like Box, Grid, Card, CardContent, Typography) and applied few styling on them to beautify the output.
