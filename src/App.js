import React, { Component } from "react";
import "./styles.css";

import { Grid } from "@material-ui/core";
import MenuAppBar from "./components/LogNav";

class App extends Component {
  render() {
    return (
      <Grid>
        <Grid>
          <MenuAppBar />
        </Grid>
      </Grid>
    );
  }
}

export default App;
