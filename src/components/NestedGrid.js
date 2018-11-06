import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FormRow(props) {
  const { classes, render, item } = props;

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>{render(item)}</Paper>
      </Grid>
    </div>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired
};

function NestedGrid(props) {
  const { classes, render, data } = props;
  const listSection = data.map((item, d) => {
    return (
      <Grid container item xs={12} spacing={24}>
        <FormRow classes={classes} render={render} item={item} />
      </Grid>
    );
  });
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        {listSection}
      </Grid>
    </div>
  );
}

NestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedGrid);
