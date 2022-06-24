import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const Search = () => {
  return (
    <div style={{ display: "flex", padding: "32px", justifyContent: 'space-around' }}>
      <FormControl>
        <InputLabel id="demo-select-small">Show all items</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          //   value={age}
          label="Show all items"
          onChange={() => console.log("hello")}
          style={{ width: "200px" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="demo-select-small">Show all items</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          //   value={age}
          label="Show all items"
          onChange={() => console.log("hello")}
          style={{ width: "200px" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField
        style={{ width: "50%" }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
    </div>
  );
};

export default Search;
