import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  card: {
    margin: 8,
    width: "100%",
    height: "240px",
    [theme.breakpoints.down('sm')]: {
      height: "300px"
    }
  },
  media: {
   
  },
  fonts: {
    padding: "100px 0",
    height: "240px",
    [theme.breakpoints.down('sm')]: {
      height: "300px"
    },
    fontFamily: [
      "proxima-nova",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
})

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card
      className={classes.card}
      style={{ textAlign: "center", verticalAlign: "center" }}
    >
      <CardActionArea>
          <p
            className={classes.fonts}
            style={{ fontSize: "16px", color: "#2B60F0"}}
          >
            See more {props.project}
          </p>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
