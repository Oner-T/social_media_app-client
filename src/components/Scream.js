import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

const styles = {
  card: {
    display: "flex"
  }
};

export class Scream extends Component {
  render() {
    const classes = this.props.classes;
    const {
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount
      }
    } = this.props.return(
      <Card>
        <CardMedia 
        image={userImage}
        title = "Profile image" />
        <CardContent>
          <Typography></Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Scream);
