import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./Table/Table";
import TableApp from "./Table1/TableApp";
import TableApp2 from "./Table2/TableApp2";
import TableExample from "./TableExample";
import Nav from "./Nav";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "95vh",
    margin: "0 auto",
    padding: "1% 10%",
    textAlign: "center",
  },
}));

export default function App(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Nav />
      <h1>React-table</h1>
      {/* <p>the table was created using the Material-UI</p> */}
      {/* <Table /> */}
      {/* <TableApp /> */}
      {/* <TableApp2 /> */}
      {/* <TableExample /> */}
      <Switch>
        <Route exact path="/table1" component={Table} />
        <Route path="/table2" component={TableApp2} />
      </Switch>
    </div>
  );
}
