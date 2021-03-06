import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  card: {
    margin: 8,
    width: "100%", 
  },
  media: {
    objectFit: "fill",
    height: "240px",
    [theme.breakpoints.down('sm')]: {
      height: "340px"
    }
  },
  fonts: {
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
    <Card className={classes.card}>
      <CardActionArea style={{ textAlign: "left" }}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Product"
          style={styles.media}
        />
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
