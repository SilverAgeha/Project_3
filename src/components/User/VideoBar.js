import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UserCard from "./UserCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    direction: "row",
    justify: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 50,
    marginLeft: 100
  }
}));

function VideoBar() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <UserCard />
        </Grid>
        <Grid item xs={4}>
          <UserCard />
        </Grid>
        <Grid item xs={4}>
          <UserCard />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid container item xs={6} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={6} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={6} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={6} spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

export default VideoBar;
