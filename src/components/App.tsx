import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Nav from "./Nav";
import Table1 from "./Table1/Table1";
import Table2 from "./Table2/Table2";

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
      <Switch>
        <Route exact path="/table1" component={Table1} />
        <Route path="/table2" component={Table2} />
        <Redirect from="/" to="/table1" />
      </Switch>
    </div>
  );
}
