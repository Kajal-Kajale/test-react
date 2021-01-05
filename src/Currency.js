import React from 'react';

class Currency extends React.Component {

    async componentDidMount () {
        const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    

    render () {
        return (
            <div>
               
            </div>
            
        );
    }
}
export default Currency;