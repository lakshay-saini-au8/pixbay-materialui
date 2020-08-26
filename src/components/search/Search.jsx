import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

class Search extends Component {
  render() {
    return (
      <Grid container>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Search Your Image"
            variant="outlined"
          />
        </form>
      </Grid>
    );
  }
}

export default Search;
