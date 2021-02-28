import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  arrow: {
    verticalAlign: "middle",
    color: theme.palette.success.light,
    textAlign: "center",
  },
}));

export default function Arrow(props: { rotate: number }): JSX.Element {
  const classes = useStyles();
  return (
    <ExpandLessIcon
      className={classes.arrow}
      style={
        props.rotate === 180
          ? { transform: "rotate(0deg)", cursor: "pointer" }
          : { transform: "rotate(180deg)", cursor: "pointer" }
      }
    />
  );
}
