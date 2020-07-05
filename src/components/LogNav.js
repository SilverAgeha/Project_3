import React from "react";
import clsx from "clsx";
import Home from "./Home";
import Edit from "./Edit";
import Profile from "./Profile";
import Videos from "./Videos";
import Logout from "./Logout";
import Upload from "./Upload";
import "./styling.css";

import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import VideoLibraryRoundedIcon from "@material-ui/icons/VideoLibraryRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import {
  Drawer,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  List
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { Button } from "semantic-ui-react";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  appBar: {
    transition: theme.transitions.create([
      "margin",
      "width",
      {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }
    ])
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },

  title: {
    flexGrow: 1
  },

  hide: {
    display: "none"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },

  drawerPaper: {
    width: drawerWidth
  },

  drawerHeader: {
    display: "center",
    allignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "center"
    //Needed so that content can be below app bar //Currently not working
    //...theme.mixins.toolbar
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    marginTop: 100
  },

  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

function MenuAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
        margin="2500"
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            VidsLinx
          </Typography>
        </Toolbar>
      </AppBar>

      <BrowserRouter>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>

          <Divider height="100px" />

          <List>
            {["Home", "Videos"].map((text, index) => (
              <ListItem button key={text} component={Link} to={"/" + text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <HomeRoundedIcon />
                  ) : (
                    <VideoLibraryRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            {["Upload", "Edit"].map((text, index) => (
              <ListItem button key={text} component={Link} to={"/" + text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <PublishRoundedIcon />
                  ) : (
                    <EditRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {["Profile", "Logout"].map((text, index) => (
              <ListItem button key={text} component={Link} to={"/" + text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <AccountCircleRoundedIcon />
                  ) : (
                    <ExitToAppRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route path="/Home" component="Home">
              <Home />
            </Route>

            <Route path="/Videos" component="Videos">
              <Videos />
            </Route>

            <Route path="/Edit" component="Edit">
              <Edit />
            </Route>

            <Route path="/Upload" component="Upload">
              <Grid classname="Outer">
                <Grid className="Inner">
                  <Upload />
                </Grid>
              </Grid>
            </Route>

            <Route path="/Profile" component="Profile">
              <Profile />
            </Route>

            <Route path="/Logout" component="Logout">
              <Logout />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default MenuAppBar;
