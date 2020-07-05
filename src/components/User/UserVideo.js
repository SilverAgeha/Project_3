import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ShareIcon from "@material-ui/icons/Share";
import { Box } from "@material-ui/core";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: 570,
    width: 650
  },

  media: {
    height: 0,
    paddingTop: "56.25%" //16:9
  }
}));

function UserVideo() {
  const classes = useStyles();

  return (
    <Box marginLeft={37}>
      <Card className={classes.root}>
        <CardHeader title=" Video Title" subheader="Date of video" />

        <CardMedia
          className={classes.media}
          image="https://wallup.net/wp-content/uploads/2019/05/10/338365-mountains-landscapes-nature-lone-tree-natural-scenery-pure-blue-748x421.jpg"
        />

        <CardContent>
          <Typography>Short Description of the video here</Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <StarBorderIcon />
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default UserVideo;
