import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
];

export default function MultilineTextFields(prop) {
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select Currency"
          value={currency}
          onChange={handleChange}
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>    
        <p>You Selected: {currency}</p>
      </div>
 
  );
}
