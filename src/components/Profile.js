import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Account from "./AccountReset/Account";
import ProfileInfo from "./Profile/ProfileForm";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      marginLeft: 150
    },

    "& > *": {
      margin: theme.spacing(2)
    },

    large: {
      width: theme.spacing(7),
      height: theme.spacing(7)
    }
  }
}));

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 25
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expand": {
      minHeight: 56
    }
  },

  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

function Profile() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Container maxWidth="sm" className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Profile</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <ProfileInfo />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Container>

        <Container maxWidth="sm" className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Account</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Account />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Container>
      </Container>
    </div>
  );
}

export default Profile;
