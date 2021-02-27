import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./Table/Table";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    margin: "0 auto",
    padding: "2% 10%",
    textAlign: "center",
  },
}));

export default function App(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>React-table</h1>
      <Table />
    </div>
  );
}
