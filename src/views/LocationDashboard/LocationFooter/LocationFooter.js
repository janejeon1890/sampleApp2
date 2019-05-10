import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    color: "white",
    backgroundColor: "#374656",
    height: "70px",

    position: "relative",
    display: "flex",
    float: "center",
    textAlign: "center",
    verticalAlign: "middle",
    justifyContent: "center",
    alignItems: "center",
  },
};

function LocationFooter(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    Team
    </div>
  );
}

LocationFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationFooter);