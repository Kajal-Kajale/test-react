import React from 'react';
import './App.css';
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core';

class App extends React.Component {

  state = {
        eur: null,
        gbp:null,
        usd:null
  }

  async componentDidMount () {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  
      this.setState (
          {
            eur: data.bpi.EUR.rate,
            gbp: data.bpi.GBP.rate,
            usd: data.bpi.USD.rate
          }
        )
    }
      
  render () {
    return (
      <div className="App">
        <Box p={6}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item container xl={5} sm={12} xs={12} className="card"
          style={{width: "400px", height: "400px"}}>
            <Grid item xs={12}>
              <h2>TRACK BITCOIN PRICE</h2>
              <img
                alt="delete logo"
                src="https://cdn.pixabay.com/photo/2019/06/13/13/06/monster-4271569_960_720.png"
                width="60%"
              />
            </Grid>
                    <Grid item xs={12}>
                      <Card variant="outlined" className="price-card">
                        <CardContent>
                          <Typography>Bitcoin Price for Euro:
                          <span className="title"> {this.state.eur} </span>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card variant="outlined" className="price-card">
                        <CardContent>
                          <Typography> Bitcoin Price for Pound:
                            <span className="title"> {this.state.gbp} </span>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card variant="outlined" className="price-card">
                        <CardContent>
                          <Typography> Bitcoin Price for Dollar:
                          <span className="title"> {this.state.usd} </span>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
            </Grid>
        </Grid>
      </Box>
      </div>
    )
  }
}
export default App;
