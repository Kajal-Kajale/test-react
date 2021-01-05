React app to fetch data from API and display the output

This is a simple react application where we fetch data from an API and display a value from the API.
I have used a bitcoin tracker API 'https://api.coindesk.com/v1/bpi/currentprice.json' in which I fetch the currency rates for 3 currencies (EUR, GBP, USD).
I have implemented the code in the 'App.js' file within the 'App' component.

A lifecycle method was intitialized to fetch the data from the API which was then tested in the console for it's working. The data from the API displayed three currencies with a set of information. Each set of data had a parameter of corresponding bitcoin rate for each of the currency. Using states, the value for all the three currencies was set to null. In the render method, the JSX code for a simple display card was designed using Material UI components. The setState function was then used to update the corresponding bitcoin rate for each currency within the JSX code. 
