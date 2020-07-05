import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardMedia,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 500
  },

  text: {
    color: "#000333",
    textDecoration: "none"
  }
});

export default function UserCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Thumbnail"
          height="140"
          image="https://wallup.net/wp-content/uploads/2019/05/10/338365-mountains-landscapes-nature-lone-tree-natural-scenery-pure-blue-748x421.jpg"
          title="Thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            Title
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
